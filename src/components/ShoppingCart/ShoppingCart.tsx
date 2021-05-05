import React, { FC, useContext, useEffect, useState } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import './ShoppingCart.scss';
import { STATIC_DATA } from '../../config/StaticData';
import { ShoppingCartModel } from '../../models/ShoppingCart.model';
import { connect } from 'react-redux';
import { Login, ShoppingCartItems } from '..';
import { CONFIG } from '../../config/Config';
import DeliveryAddress from '../DeliveryAddress/DeliveryAddress';
import {
  resetBuyNowFlag,
  removeItemFromCart,
  emptyCart,
} from '../../actions/ProductDetails.action';
import { EmptyCart } from '../../assets';
import FirebaseContext from '../Firebase/Context';
import { setUser } from '../../actions/Login.action';

const ShoppingCart: FC<ShoppingCartModel.IProps> = ({
  loggedInUser,
  cartItems,
  resetBuyNowFlag,
  setUser,
  removeItemFromCart,
  emptyCart,
}) => {
  const {
    ENGLISH: {
      ShoppingCart: {
        SHOPPINGCART_ITEM_COST,
        SHOPPINGCART_SUMMERY_HEADING,
        SHOPPINGCART_ITEM_TAX,
        SHOPPINGCART_ITEM_DELIVERY,
        SHOPPINGCART_ORDER_TOTAL,
        SHOPPINGCART_CHECKOUT_BUTTON,
        CONTINUE_SHOPPING,
        LOGIN_MESSAGE,
        LOGIN_BUTTON,
      },
      TAX_PERCENTAGE,
      DELIVERY_AMOUNT,
      DELIVERY_AMOUNT_LIMIT,
      NO_IMAGE_FOUND,
    },
  } = STATIC_DATA;
  const {
    ROUTES: { SHOPPING_CART_ITEMS, DELIVERY_ADDRESS, ORDER_PLACED },
  } = CONFIG;
  const [selectedAddress, setSelectedAddress] = useState('');

  const totalProductPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [showLoginModal, setShowLoginModal] = useState(false);

  const productTax = (totalProductPrice * TAX_PERCENTAGE) / 100;

  const deliveryCost =
    totalProductPrice + productTax > DELIVERY_AMOUNT_LIMIT
      ? 0
      : DELIVERY_AMOUNT;

  const orderTotalCost = totalProductPrice + productTax + deliveryCost;

  const history = useHistory();

  const firebase = useContext(FirebaseContext);

  const onCheckoutClick = () => {
    if (window.location.pathname === DELIVERY_ADDRESS) {
      const items = loggedInUser.cartItems.map((item: any) => {
        const today = new Date();
        item['order_date'] = today.toLocaleDateString();
        item['delivery_date'] = new Date(
          today.setDate(today.getDate() + 2)
        ).toLocaleDateString();
        item['address'] = selectedAddress;
        return item;
      });
      if (loggedInUser.orders) {
        loggedInUser.orders = [...items, ...loggedInUser.orders];
      } else {
        loggedInUser.orders = items;
      }
      delete loggedInUser.cartItems;

      firebase.db
        .ref(`users/${loggedInUser.uid}`)
        .set(loggedInUser)
        .then(() => {
          emptyCart();
          setUser(loggedInUser);
          history.push(ORDER_PLACED);
        });
    } else {
      history.push(DELIVERY_ADDRESS);
    }
  };
  const removeCartItem = (itemId: number) => {
    let { cartItems } = loggedInUser;

    loggedInUser.cartItems = cartItems.filter(
      (item: any) => item.productId !== itemId
    );

    firebase.db
      .ref(`users/${loggedInUser.uid}`)
      .set(loggedInUser)
      .then(() => {
        removeItemFromCart(itemId);
        setUser(loggedInUser);
      });
  };
  const setAddress = (addr: string) => {
    setSelectedAddress(addr);
  };

  useEffect(() => {
    return () => {
      resetBuyNowFlag();
    };
  });

  return (
    <div id='cart-container'>
      {loggedInUser && Object.keys(loggedInUser).length > 0 ? (
        cartItems.length > 0 ? (
          <>
            <div className='left'>
              <Switch>
                <Route
                  path={SHOPPING_CART_ITEMS}
                  render={(props) => (
                    <ShoppingCartItems
                      {...props}
                      cartItems={cartItems}
                      removeCartItem={removeCartItem}
                    ></ShoppingCartItems>
                  )}
                />
                <Route
                  path={DELIVERY_ADDRESS}
                  render={(props) => (
                    <DeliveryAddress setAddress={setAddress}></DeliveryAddress>
                  )}
                />
              </Switch>
            </div>
            <div className='right'>
              <div className='heading-bar'>
                <div className='heading-item'>
                  {SHOPPINGCART_SUMMERY_HEADING}
                </div>
              </div>
              <div className='summery-info'>
                <div>
                  <div className='item-total'>{SHOPPINGCART_ITEM_COST} :</div>
                  <div className='item-price'>&#8377; {totalProductPrice}</div>
                </div>
                <div>
                  <div className='item-tax'>{SHOPPINGCART_ITEM_TAX} :</div>
                  <div className='price-tax'>
                    &#8377; {Math.round(productTax)}
                  </div>
                </div>
                <div>
                  <div className='item-devlivery'>
                    {SHOPPINGCART_ITEM_DELIVERY} :
                  </div>
                  <div className='price-item-delivery'>
                    &#8377; {deliveryCost}
                  </div>
                </div>
                <p />
                <hr />
                <div>
                  <div className='order-total'>{SHOPPINGCART_ORDER_TOTAL} </div>
                  <div className='price-total'>
                    &#8377; {Math.round(orderTotalCost)}
                  </div>
                </div>
              </div>
              <div className='button-container'>
                <input
                  type='button'
                  value={SHOPPINGCART_CHECKOUT_BUTTON}
                  onClick={onCheckoutClick}
                />
              </div>
            </div>
          </>
        ) : (
          <div className='no-items'>
            <div>
              <img src={EmptyCart} alt={NO_IMAGE_FOUND}></img>
            </div>
            <Link to='/'>{CONTINUE_SHOPPING}</Link>
          </div>
        )
      ) : (
        <>
          <div className='not-login'>
            <p>{LOGIN_MESSAGE}</p>
            <button
              onClick={() => {
                setShowLoginModal(true);
              }}
            >
              {LOGIN_BUTTON}
            </button>
          </div>
          {showLoginModal && (
            <Login
              onCloseLoginModalClick={() => {
                setShowLoginModal(false);
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  loggedInUser: state.loginState.loggedInUser,
  isBuyItem: state.shoppingCartState.isBuyItem,
  cartItems: state.shoppingCartState.isBuyItem
    ? [
        state.shoppingCartState.cartItems[
          state.shoppingCartState.cartItems.length - 1
        ],
      ]
    : state.shoppingCartState.cartItems,
});

export default connect(mapStateToProps, {
  resetBuyNowFlag,
  setUser,
  removeItemFromCart,
  emptyCart,
})(ShoppingCart);
