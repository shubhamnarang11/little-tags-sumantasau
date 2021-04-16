import './DeliveryAddress.scss';
import { STATIC_DATA, TEST_DATA } from '../../config/StaticData';

export default function DeliveryAddress() {
  const { DELIVERY_ADDRESS_DATA } = TEST_DATA;

  const {
    ENGLISH: {
      DeliveryAddress: { DELIVERYADDRESS_HEADING, DELIVERYADDRESS_Add },
    },
  } = STATIC_DATA;

  return (
    <div>
      <h3>{DELIVERYADDRESS_HEADING}</h3>
      <ul>
        {DELIVERY_ADDRESS_DATA.map((AddressData) => (
          <li>
            <div className='address-info'>
              <h4>{AddressData.name}</h4>
              <span>{AddressData.address}</span>
            </div>
            <div className='radio-button-container'>
              <input
                type='radio'
                name='radio-default-selection'
                checked={AddressData.isDefault}
              ></input>
            </div>
          </li>
        ))}
      </ul>
      <p>
        <a href='/add-delivery-address' className='add-delivery-address-link'>
          {DELIVERYADDRESS_Add}
        </a>
      </p>
    </div>
  );
}
