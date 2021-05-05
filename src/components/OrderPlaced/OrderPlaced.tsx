import React from 'react';
import { Link } from 'react-router-dom';
import { STATIC_DATA } from '../../config/StaticData';
import './OrderPlaced.scss';

export default function OrderPlaced() {
  const {
    ENGLISH: {
      OrderPlaced: { SUCCESS, ORDER_HISTORY, CONTINUE_SHOPPING },
    },
  } = STATIC_DATA;

  return (
    <div className='order-placed-div'>
      <p className='heading'>{SUCCESS}</p>
      <p>{ORDER_HISTORY}</p>
      <Link to='/'>{CONTINUE_SHOPPING}</Link>
    </div>
  );
}
