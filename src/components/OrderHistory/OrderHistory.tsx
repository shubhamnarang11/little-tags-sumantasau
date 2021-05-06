import { FC, useContext, useState } from 'react';
import { connect } from 'react-redux';
import { STATIC_DATA } from '../../config/StaticData';
import { OrderHistoryModel } from '../../models/OrderHistory.model';
import FirebaseContext from '../Firebase/Context';
import './OrderHistory.scss';

const OrderHistory: FC<OrderHistoryModel.IProps> = ({ orders }) => {
  let count = 0;
  const {
    ENGLISH: {
      OrderHistory: {
        ORDER_HISTORY_HEADING,
        ORDER_QUANTITY,
        TOTAL_ORDERED,
        DEVLIVERED_ON,
        ORDERED_ON,
      },
      STAR_RATING,
    },
  } = STATIC_DATA;
  const [selectedRating, setSelectedRating] = useState<any>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>([]);
  const firebase = useContext(FirebaseContext);

  const addRating = (rating: number, productId: number) => {
    count = 0;
    firebase.db.ref(`ratings`).on('value', (snap: any) => {
      if (count === 0) {
        let productRatings = snap.val();
        setProduct(productId);
        setRating(rating, productId);
        if (productRatings && productRatings[productId]) {
          count = 1;
          productRatings[productId] = [...productRatings[productId], rating];
          firebase.db.ref(`ratings`).set(productRatings).catch(console.log);
        } else {
          count = 1;
          productRatings = {
            ...productRatings,
            [productId]: [rating],
          };
          firebase.db.ref(`ratings`).set(productRatings).catch(console.log);
        }
      }
    });
  };

  const setProduct = (productId: number) => {
    if (!selectedProduct.includes(productId)) {
      setSelectedProduct([...selectedProduct, productId]);
    }
  };

  const setRating = (rating: number, productId: number) => {
    const selectedProductIndex = selectedProduct.findIndex(
      (pro: number) => pro === productId
    );

    if (selectedProductIndex !== -1) {
      selectedRating[selectedProductIndex] = rating;
      setSelectedRating(selectedRating);
    } else {
      setSelectedRating([...selectedRating, rating]);
    }
  };

  const getRatingsForProduct = (productId: number) => {
    const selectedProductIndex = selectedProduct.findIndex(
      (pro: number) => pro === productId
    );

    if (selectedProductIndex !== -1) {
      return selectedRating[selectedProductIndex];
    }
  };

  return (
    <div id='order-history-container'>
      <h2>{ORDER_HISTORY_HEADING}</h2>
      <section>
        {orders.map((order_item: any) => (
          <div className='order-info'>
            <img src={order_item.image} alt={order_item.productName} />
            <div className='order-item-info'>
              <h3>{order_item.productName}</h3>
              <p>
                {ORDER_QUANTITY} : {order_item.quantity}
              </p>
              <div className='address-div'>
                Address: <p>{order_item.address}</p>
              </div>
              <h4>
                {TOTAL_ORDERED} : &#8377; {order_item.price}
              </h4>
            </div>
            <div className='delivery-info'>
              <div className='delivery-date'>
                <h4>
                  {DEVLIVERED_ON} : {order_item.delivery_date}
                </h4>
              </div>
              <div className='order-date'>
                <p>
                  {ORDERED_ON} : {order_item.order_date}
                </p>
              </div>
              <div className='rating-div'>
                <p>Rate this product </p>
                {STAR_RATING.map((rat) =>
                  rat <= getRatingsForProduct(order_item.productId) ? (
                    <i
                      key={rat}
                      className='fa fa-star checked'
                      onClick={() => addRating(rat, order_item.productId)}
                    ></i>
                  ) : (
                    <i
                      key={rat}
                      className='fa fa-star-o'
                      onClick={() => addRating(rat, order_item.productId)}
                    ></i>
                  )
                )}
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
