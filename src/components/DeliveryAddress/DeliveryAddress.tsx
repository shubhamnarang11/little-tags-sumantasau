import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./DeliveryAddress.scss";
import { STATIC_DATA } from "../../config/StaticData";
import { CONFIG } from "../../config/Config";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function DeliveryAddress() {
  const [DELIVERY_ADDRESS_DATA, setDELIVERY_ADDRESS_DATA] = useLocalStorage(
    "DELIVERY_ADDRESS_DATA",
    []
  );

  const {
    ENGLISH: {
      DeliveryAddress: { DELIVERYADDRESS_HEADING, DELIVERYADDRESS_Add },
    },
  } = STATIC_DATA;

  const {
    ROUTES: { ADD_DELIVERY_ADDRESS },
  } = CONFIG;

  const getDefaultDeliveryAddress = () => {
    const DeliveryAddress = DELIVERY_ADDRESS_DATA.filter(
      (data: any) => data.isDefault === true
    );
    return DeliveryAddress.length > 0 ? DeliveryAddress[0].id : 0;
  };

  const [DeliveryAddress, setDeliveryAddress] = useState(
    getDefaultDeliveryAddress
  );

  const history = useHistory();

  const onAddAddressClick = () => {
    history.push(ADD_DELIVERY_ADDRESS);
  };

  return (
    <div id="delivery-address-container">
      <div className="delivery-address-header">
        <div className="address-heading">
          <h2>{DELIVERYADDRESS_HEADING}</h2>
        </div>
        <div className="add-address-button">
          <input
            type="button"
            value={DELIVERYADDRESS_Add}
            className="input-button"
            onClick={onAddAddressClick}
          />
        </div>
      </div>
      {DELIVERY_ADDRESS_DATA.length > 0 ? (
        <ul>
          {DELIVERY_ADDRESS_DATA.map((AddressData: any) => (
            <li>
              <div className="address-info">
                <div className="radio-button-container">
                  <input
                    type="radio"
                    name="radio-default-selection"
                    value={AddressData.id}
                    onClick={() => setDeliveryAddress(AddressData.id)}
                    checked={DeliveryAddress === AddressData.id}
                  ></input>
                  <label>
                    {AddressData.isDefault === true ? "Default" : ""}
                  </label>
                </div>
                <h3>{AddressData.name}</h3>
                <span>
                  {AddressData.address}, <br />
                  {AddressData.state}, {AddressData.city} -{" "}
                  {AddressData.pincode}
                  <br />
                  {AddressData.mobile}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Please add a delivery address</p>
      )}
    </div>
  );
}
