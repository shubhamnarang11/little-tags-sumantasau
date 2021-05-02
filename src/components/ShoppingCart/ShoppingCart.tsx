import React, { FC, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./ShoppingCart.scss";
import { STATIC_DATA } from "../../config/StaticData";
import { ShoppingCartModel } from "../../models/ShoppingCart.model";
import { connect } from "react-redux";
import { ShoppingCartItems } from "..";
import { CONFIG } from "../../config/Config";
import DeliveryAddress from "../DeliveryAddress/DeliveryAddress";
import { resetBuyNowFlag } from "../../actions/ProductDetails.action";

const ShoppingCart: FC<ShoppingCartModel.IProps> = ({
  cartItems,
  resetBuyNowFlag,
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
      },
      TAX_PERCENTAGE,
      DELIVERY_AMOUNT,
      DELIVERY_AMOUNT_LIMIT,
    },
  } = STATIC_DATA;
  const {
    ROUTES: { SHOPPING_CART_ITEMS, DELIVERY_ADDRESS },
  } = CONFIG;

  const totalProductPrice = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const productTax = (totalProductPrice * TAX_PERCENTAGE) / 100;

  const deliveryCost =
    totalProductPrice + productTax > DELIVERY_AMOUNT_LIMIT
      ? 0
      : DELIVERY_AMOUNT;

  const orderTotalCost = totalProductPrice + productTax + deliveryCost;

  const history = useHistory();

  const onCheckoutClick = () => {
    history.push(DELIVERY_ADDRESS);
  };

  useEffect(() => {
    return () => {
      resetBuyNowFlag();
    };
  });

  return (
    <div id="cart-container">
      <div className="left">
        <Switch>
          <Route
            path={SHOPPING_CART_ITEMS}
            render={(props) => (
              <ShoppingCartItems
                {...props}
                cartItems={cartItems}
              ></ShoppingCartItems>
            )}
          />
          <Route path={DELIVERY_ADDRESS} component={DeliveryAddress} />
        </Switch>
      </div>
      <div className="right">
        <div className="heading-bar">
          <div className="heading-item">{SHOPPINGCART_SUMMERY_HEADING}</div>
        </div>
        <div className="summery-info">
          <div>
            <div className="item-total">{SHOPPINGCART_ITEM_COST} :</div>
            <div className="item-price">&#8377; {totalProductPrice}</div>
          </div>
          <div>
            <div className="item-tax">{SHOPPINGCART_ITEM_TAX} :</div>
            <div className="price-tax">&#8377; {Math.round(productTax)}</div>
          </div>
          <div>
            <div className="item-devlivery">{SHOPPINGCART_ITEM_DELIVERY} :</div>
            <div className="price-item-delivery">&#8377; {deliveryCost}</div>
          </div>
          <p />
          <hr />
          <div>
            <div className="order-total">{SHOPPINGCART_ORDER_TOTAL} </div>
            <div className="price-total">
              &#8377; {Math.round(orderTotalCost)}
            </div>
          </div>
        </div>
        <div className="button-container">
          <input
            type="button"
            value={SHOPPINGCART_CHECKOUT_BUTTON}
            onClick={onCheckoutClick}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isBuyItem: state.shoppingCartState.isBuyItem,
  cartItems: state.shoppingCartState.isBuyItem
    ? [
        state.shoppingCartState.cartItems[
          state.shoppingCartState.cartItems.length - 1
        ],
      ]
    : state.shoppingCartState.cartItems,
});
export default connect(mapStateToProps, { resetBuyNowFlag })(ShoppingCart);
