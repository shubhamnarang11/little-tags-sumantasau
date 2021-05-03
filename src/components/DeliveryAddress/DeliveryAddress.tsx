import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './DeliveryAddress.scss';
import { STATIC_DATA } from '../../config/StaticData';
import { CONFIG } from '../../config/Config';
import { DeliveryAddressModel } from '../../models/DeliveryAddress.model';
import { connect } from 'react-redux';

const DeliveryAddress: FC<DeliveryAddressModel.IProps> = ({
  userAddresses,
}) => {
  const {
    ENGLISH: {
      DeliveryAddress: { DELIVERYADDRESS_HEADING, DELIVERYADDRESS_Add },
    },
  } = STATIC_DATA;

  const {
    ROUTES: { ADD_DELIVERY_ADDRESS },
  } = CONFIG;

  const [DeliveryAddress, setDeliveryAddress] = useState(-1);

  const history = useHistory();

  const onAddAddressClick = () => {
    history.push(ADD_DELIVERY_ADDRESS);
  };

  return (
    <div id='delivery-address-container'>
      <div className='delivery-address-header'>
        <h2>{DELIVERYADDRESS_HEADING}</h2>
        <p>
          <input
            type='button'
            value={DELIVERYADDRESS_Add}
            className='input-button'
            onClick={onAddAddressClick}
          />
        </p>
      </div>
      {userAddresses.length > 0 ? (
        <ul>
          {userAddresses.map((AddressData: any) => (
            <li>
              <div className='address-info'>
                <div className='radio-button-container'>
                  <input
                    type='radio'
                    name='radio-default-selection'
                    value={AddressData.id}
                    onClick={() => setDeliveryAddress(AddressData.id)}
                    checked={AddressData.isDefault}
                  ></input>
                  <label>{AddressData.isDefault ? 'Default' : ''}</label>
                </div>
                <h3>{AddressData.name}</h3>
                <span>
                  {AddressData.address}, <br />
                  {AddressData.state}, {AddressData.city} -{' '}
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
};

const mapStateToProps = (state: any) => ({
  userAddresses: state.loginState.loggedInUser.addresses ?? [],
});

export default connect(mapStateToProps)(DeliveryAddress);
