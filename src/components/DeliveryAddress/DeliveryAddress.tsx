import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./DeliveryAddress.scss";
import { STATIC_DATA, TEST_DATA } from "../../config/StaticData";
import { CONFIG } from "../../config/Config";

export default function DeliveryAddress() {
  const { DELIVERY_ADDRESS_DATA } = TEST_DATA;

  const {
    ENGLISH: {
      DeliveryAddress: { DELIVERYADDRESS_HEADING, DELIVERYADDRESS_Add },
    },
  } = STATIC_DATA;

  const {
    ROUTES: { ADD_DELIVERY_ADDRESS },
  } = CONFIG;

  const getDefaultDeliveryAddress = () => {
    const { DELIVERY_ADDRESS_DATA } = TEST_DATA;
    const DeliveryAddress = DELIVERY_ADDRESS_DATA.filter(
      (data) => data.isDefault === true
    );
    return DeliveryAddress[0].id;
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
      <h3>{DELIVERYADDRESS_HEADING}</h3>
      <ul>
        {DELIVERY_ADDRESS_DATA.map((AddressData) => (
          <li>
            <div className="address-info">
              <h4>{AddressData.name}</h4>
              <span>{AddressData.address}</span>
            </div>
            <div className="radio-button-container">
              <input
                type="radio"
                name="radio-default-selection"
                value={AddressData.id}
                onClick={() => setDeliveryAddress(AddressData.id)}
                checked={DeliveryAddress === AddressData.id}
              ></input>
            </div>
          </li>
        ))}
      </ul>
      <p>
        <input
          type="button"
          value={DELIVERYADDRESS_Add}
          className="input-button"
          onClick={onAddAddressClick}
        />
      </p>
    </div>
  );
}
