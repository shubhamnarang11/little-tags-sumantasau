import { STATIC_DATA, TEST_DATA } from "../../config/StaticData";
import "./OrderHistory.scss";

export default function OrderHistory() {
  const { ORDER_HISTORY_DATA } = TEST_DATA;

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
    <div id="order-history-container">
      <h2>{ORDER_HISTORY_HEADING}</h2>
      <section>
        {ORDER_HISTORY_DATA.map((order_item) => (
          <div className="order-info">
            <img src={order_item.image} alt={order_item.productname} />
            <div className="order-item-info">
              <h3>
                {order_item.productname} ({order_item.category})
              </h3>
              <p>
                {ORDER_QUANTITY} : {order_item.quantity}
              </p>
              <h4>
                {TOTAL_ORDERED} : &#8377; {order_item.total_price}
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
}
