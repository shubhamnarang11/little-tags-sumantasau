import React, { FC, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddDeliveryAddress.scss";
import { CONFIG } from "../../config/Config";
import { STATIC_DATA, TEST_DATA } from "../../config/StaticData";
import FirebaseContext from "../Firebase/Context";
import { v4 } from "uuid";
import { connect } from "react-redux";
import { AddDeliveryAddressModel } from "../../models/AddDeliveryAddress.model";
import { setUser } from "../../actions/Login.action";

const AddDeliveryAddress: FC<AddDeliveryAddressModel.IProps> = ({
  language,
  loggedInUser,
  setUser,
}) => {
  const {
    [language]: {
      DeliveryAddress: {
        ADD_DELIVERYADDRESS_HEADING,
        FIRSTNAME_TEXT,
        FIRSTNAME_PLACEHOLDER,
        LASTNAME_TEXT,
        LASTNAME_PLACEHOLDER,
        MOBILE_TEXT,
        MOBILE_PLACEHOLDER,
        ADDRESS_LINE1_TEXT,
        ADDRESS_LINE1_PLACEHOLDER,
        ADDRESS_LINE2_TEXT,
        ADDRESS_LINE2_PLACEHOLDER,
        STATE_TEXT,
        STATE_PLACEHOLDER,
        CITY_TEXT,
        CITY_PLACEHOLDER,
        PINCODE_TEXT,
        PINCODE_PLACEHOLDER,
        FIRSTNAME_VALIDATION_TEXT,
        ADDRESS1_VALIDATION_TEXT,
        STATE_VALIDATION_TEXT,
        MOBILE_VALIDATION_TEXT,
        MOBILE_VALID_TEXT,
        PINCODE_VALIDATION_TEXT,
        PINCODE_VALID_TEXT,
      },
    },
  } = STATIC_DATA;

  const { STATE_DATA, CITY_DATA } = TEST_DATA;

  const {
    ROUTES: { DELIVERY_ADDRESS },
  } = CONFIG;

  const [City, setCity] = useState<any>([]);
  const firebase = useContext(FirebaseContext);

  const [userFirstName, setuserFirstName] = useState("");
  const [userLastName, setuserLastName] = useState("");
  const [userAddress1, setuserAddress1] = useState("");
  const [userAddress2, setuserAddress2] = useState("");
  const [userStateName, setuserStateName] = useState("");
  const [userCityName, setuserCityName] = useState("");
  const [userMobile, setuserMobile] = useState("");
  const [userPincode, setuserPincode] = useState("");
  const [userDefaultAddress, setuserDefaultAddress] = useState(false);

  const [requireduserFirstName, setrequireduserFirstName] = useState("");
  const [requireduserAddress1, setrequireduserAddress1] = useState("");
  const [requireduserState, setrequireduserState] = useState("");
  const [requireduserMobile, setrequireduserMobile] = useState("");
  const [requireduserPincode, setrequireduserPincode] = useState("");

  const history = useHistory();

  const handleStateSelect = (event: any) => {
    const index = event.nativeEvent.target.selectedIndex;
    setuserStateName(event.nativeEvent.target[index].text);
    setrequireduserState("");

    const CityData = CITY_DATA.filter(
      (stateselected) => stateselected.stateId === parseInt(event.target.value)
    );
    setCity(CityData);
  };

  const handleCitySelect = (event: any) => {
    const index = event.nativeEvent.target.selectedIndex;
    setuserCityName(event.nativeEvent.target[index].text);
  };

  const checkValidation = () => {
    let flag = true;
    if (!userFirstName) {
      setrequireduserFirstName(FIRSTNAME_VALIDATION_TEXT);
      flag = false;
    }
    if (!userAddress1) {
      setrequireduserAddress1(ADDRESS1_VALIDATION_TEXT);
      flag = false;
    }
    if (!userStateName) {
      setrequireduserState(STATE_VALIDATION_TEXT);
      flag = false;
    }
    if (!userMobile) {
      setrequireduserMobile(MOBILE_VALIDATION_TEXT);
      flag = false;
    } else {
      if (userMobile.length !== 10) {
        setrequireduserMobile(MOBILE_VALID_TEXT);
        flag = false;
      }
    }
    if (!userPincode) {
      setrequireduserPincode(PINCODE_VALIDATION_TEXT);
      flag = false;
    } else {
      if (userPincode.length !== 6) {
        setrequireduserPincode(PINCODE_VALID_TEXT);
        flag = false;
      }
    }
    return flag;
  };

  const onSaveClick = () => {
    if (checkValidation()) {
      const newAddress = {
        id: v4(),
        name: userFirstName + " " + userLastName,
        address: userAddress1 + " " + userAddress2,
        state: userStateName,
        city: userCityName,
        pincode: userPincode,
        mobile: userMobile,
        isDefault: userDefaultAddress,
      };
      if (!loggedInUser.addresses) {
        const newUser = {
          ...loggedInUser,
          addresses: [newAddress],
        };
        firebase.db
          .ref(`users/${loggedInUser.uid}`)
          .set(newUser)
          .then(() => setUser(newUser));
      } else {
        if (userDefaultAddress) {
          const oldDefaultAddress = loggedInUser.addresses.find(
            (addr: any) => addr.isDefault
          );

          if (oldDefaultAddress) {
            oldDefaultAddress.isDefault = false;
          }

          const newUser = {
            ...loggedInUser,
            addresses: [...loggedInUser.addresses, newAddress],
          };
          firebase.db
            .ref(`users/${loggedInUser.uid}`)
            .set(newUser)
            .then(() => setUser(newUser));
        } else {
          const newUser = {
            ...loggedInUser,
            addresses: [...loggedInUser.addresses, newAddress],
          };
          firebase.db
            .ref(`users/${loggedInUser.uid}`)
            .set(newUser)
            .then(() => setUser(newUser));
        }
      }
      history.push(DELIVERY_ADDRESS);
    }
  };

  const onCancelClick = () => {
    history.push(DELIVERY_ADDRESS);
  };

  return (
    <div id="add-delivery-address-container">
      <h3>{ADD_DELIVERYADDRESS_HEADING}</h3>
      <div className="left">
        <p className="input-heading">{FIRSTNAME_TEXT}</p>
        <input
          type="text"
          className="input-box"
          placeholder={FIRSTNAME_PLACEHOLDER}
          value={userFirstName}
          onChange={(event) => {
            setuserFirstName(event.target.value);
            setrequireduserFirstName("");
          }}
          required
        />
        <p className="validation-msg-left">
          {requireduserFirstName ? requireduserFirstName : ""}
        </p>
      </div>
      <div className="right">
        <p>{LASTNAME_TEXT}</p>
        <input
          type="text"
          className="input-box"
          placeholder={LASTNAME_PLACEHOLDER}
          value={userLastName}
          onChange={(event) => {
            setuserLastName(event.target.value);
          }}
          required
        />
        <p className="validation-msg-right"></p>
      </div>
      <div className="left">
        <p className="input-heading">{ADDRESS_LINE1_TEXT}</p>
        <input
          type="text"
          className="input-box"
          placeholder={ADDRESS_LINE1_PLACEHOLDER}
          value={userAddress1}
          onChange={(event) => {
            setuserAddress1(event.target.value);
            setrequireduserAddress1("");
          }}
          required
        />
        <p className="validation-msg-left">
          {requireduserAddress1 ? requireduserAddress1 : ""}
        </p>
      </div>
      <div className="right">
        <p>{ADDRESS_LINE2_TEXT}</p>
        <input
          type="text"
          className="input-box"
          placeholder={ADDRESS_LINE2_PLACEHOLDER}
          value={userAddress2}
          onChange={(event) => {
            setuserAddress2(event.target.value);
          }}
          required
        />
        <p className="validation-msg-right"></p>
      </div>
      <div className="left">
        <p className="input-heading">{STATE_TEXT}</p>
        <select onChange={handleStateSelect}>
          <option>{STATE_PLACEHOLDER}</option>
          {STATE_DATA.sort((a, b) => (a.name > b.name ? 1 : -1)).map(
            (State, i) => (
              <option value={State.id}>{State.name}</option>
            )
          )}
        </select>
        <p className="validation-msg-left">
          {requireduserState ? requireduserState : ""}
        </p>
      </div>
      <div className="right">
        <p>{CITY_TEXT}</p>
        <select onChange={handleCitySelect}>
          <option>{CITY_PLACEHOLDER}</option>
          {City.sort((a: any, b: any) => (a.name > b.name ? 1 : -1)).map(
            (city: any, i: number) => (
              <option value={city.id}>{city.name}</option>
            )
          )}
        </select>
        <p className="validation-msg-right"></p>
      </div>
      <div className="left">
        <p className="input-heading">{MOBILE_TEXT}</p>
        <input
          type="text"
          className="input-box"
          placeholder={MOBILE_PLACEHOLDER}
          value={userMobile}
          onChange={(event) => {
            setuserMobile(event.target.value);
            setrequireduserMobile("");
          }}
          maxLength={10}
          required
        />
        <p className="validation-msg-left">
          {requireduserMobile ? requireduserMobile : ""}
        </p>
      </div>
      <div className="right">
        <p className='required-field'>{PINCODE_TEXT}</p>
        <input
          type="text"
          className="input-box"
          placeholder={PINCODE_PLACEHOLDER}
          value={userPincode}
          onChange={(event) => {
            setuserPincode(event.target.value);
            setrequireduserPincode("");
          }}
          maxLength={6}
          required
        />
        <p className="validation-msg-right">
          {requireduserPincode ? requireduserPincode : ""}
        </p>
      </div>

      <section>
        <input
          type="checkbox"
          checked={userDefaultAddress}
          onChange={(event) => {
            setuserDefaultAddress(!userDefaultAddress);
          }}
        />
        <label>Set as default address</label>
        <br />
        <span>
          <input
            type="button"
            value="Save"
            className="input-button"
            onClick={onSaveClick}
          />
          <input
            type="button"
            value="Cancel"
            className="input-button"
            onClick={onCancelClick}
          />
        </span>
      </section>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  loggedInUser: state.loginState.loggedInUser,
  language: state.dashboardState.language
});

export default connect(mapStateToProps, { setUser })(AddDeliveryAddress);
