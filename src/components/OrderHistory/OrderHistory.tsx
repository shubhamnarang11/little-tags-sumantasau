import { FC } from 'react';
import { connect } from 'react-redux';
import { STATIC_DATA } from '../../config/StaticData';
import { OrderHistoryModel } from '../../models/OrderHistory.model';
import './OrderHistory.scss';

const OrderHistory: FC<OrderHistoryModel.IProps> = ({ orders }) => {
  const {
    ENGLISH: {
      OrderHistory: {
        ORDER_HISTORY_HEADING,
        ORDER_QUANTITY,
        TOTAL_ORDERED,
        DEVLIVERED_ON,
        ORDERED_ON,
      },
    },
  } = STATIC_DATA;
  
  return (
    <div id='order-history-container'>
      <h2>{ORDER_HISTORY_HEADING}</h2>
      <section>
        {orders.map((order_item: any) => (
          <div className='order-info'>
            <img src={order_item.image} alt={order_item.productName} />
            <div className='order-item-info'>
              <h3>
                {order_item.productName}
              </h3>
              <p>
                {ORDER_QUANTITY} : {order_item.quantity}
              </p>
              <h4>
                {TOTAL_ORDERED} : &#8377; {order_item.price}
              </h4>
            </div>
            <div className="delivery-info">
              <div className="delivery-date">
                <h4>
                  {DEVLIVERED_ON} : {order_item.delivery_date}
                </h4>
              </div>
              <div className="order-date">
                <p>
                  {ORDERED_ON} : {order_item.order_date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  orders: state.loginState.loggedInUser.orders ?? [],
});

export default connect(mapStateToProps)(OrderHistory);
