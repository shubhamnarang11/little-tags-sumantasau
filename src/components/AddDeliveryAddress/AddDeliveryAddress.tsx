import './AddDeliveryAddress.scss';
import { STATIC_DATA, TEST_DATA } from '../../config/StaticData';

export default function AddDeliveryAddress() {
  const {
    ENGLISH: {
      DeliveryAddress: {
        ADD_DELIVERYADDRESS_HEADING,
        FIRSTNAME_TEXT,
        FIRSTNAME_PLACEHOLDER,
        LASTNAME_TEXT,
        LASTNAME_PLACEHOLDER,
        EMAIL_TEXT,
        EMAIL_PLACEHOLDER,
        MOBILE_TEXT,
        MOBILE_PLACEHOLDER,
        ADDRESS_LINE1_TEXT,
        ADDRESS_LINE1_PLACEHOLDER,
        ADDRESS_LINE2_TEXT,
        ADDRESS_LINE2_PLACEHOLDER,
        STATE_TEXT,
        STATE_PLACEHOLDER,
        PINCODE_TEXT,
        PINCODE_PLACEHOLDER,
      },
    },
  } = STATIC_DATA;

  const { STATE_DATA } = TEST_DATA;

  return (
    <div id='add-delivery-address-container'>
      <h3>{ADD_DELIVERYADDRESS_HEADING}</h3>
      <div className='left'>
        <p>{FIRSTNAME_TEXT}</p>
        <input
          type='text'
          className='input-box'
          placeholder={FIRSTNAME_PLACEHOLDER}
          required
        />

        <p>{LASTNAME_TEXT}</p>
        <input
          type='text'
          className='input-box'
          placeholder={LASTNAME_PLACEHOLDER}
          required
        />

        <p>{EMAIL_TEXT}</p>
        <input
          type='text'
          className='input-box'
          placeholder={EMAIL_PLACEHOLDER}
          required
        />

        <p>{MOBILE_TEXT}</p>
        <input
          type='text'
          className='input-box'
          placeholder={MOBILE_PLACEHOLDER}
          required
        />
      </div>
      <div className='right'>
        <p>{ADDRESS_LINE1_TEXT}</p>
        <input
          type='text'
          className='input-box'
          placeholder={ADDRESS_LINE1_PLACEHOLDER}
          required
        />

        <p>{ADDRESS_LINE2_TEXT}</p>
        <input
          type='text'
          className='input-box'
          placeholder={ADDRESS_LINE2_PLACEHOLDER}
          required
        />

        <p>{STATE_TEXT}</p>
        <select>
          <option>{STATE_PLACEHOLDER}</option>
          {STATE_DATA.map((State) => (
            <option>{State.name}</option>
          ))}
        </select>

        <p>{PINCODE_TEXT}</p>
        <input
          type='text'
          className='input-box'
          placeholder={PINCODE_PLACEHOLDER}
          required
        />
      </div>
      <span>
        <input type='button' value='Add Address' className='input-button' />
      </span>
    </div>
  );
}
