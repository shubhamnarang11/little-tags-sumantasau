import { FC } from "react";
import { STATIC_DATA } from "../../config/StaticData";
import { ShoppingCartItemsModel } from "../../models/ShoppingCartItems.model";

const ShoppingCartItems: FC<ShoppingCartItemsModel.IProps> = ({
  cartItems,
  removeCartItem,
}) => {
  const {
    ENGLISH: {
      ShoppingCart: {
        SHOPPINGCART_HEADING,
        SHOPPINGCART_ITEM_HEADING,
        SHOPPINGCART_PRICE_HEADING,
      },
    },
  } = STATIC_DATA;

  const totalCartItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div>
      <h2>{SHOPPINGCART_HEADING}</h2>
      <div className="heading-bar">
        <div className="heading-item">
          {SHOPPINGCART_ITEM_HEADING}({totalCartItems})
        </div>
        <div className="heading-price">{SHOPPINGCART_PRICE_HEADING}</div>
      </div>
      <div className="scroll-bar">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.productId}>
            <div className="item-image">
              <img src={item.image} alt={item.productName} />
            </div>
            <div className="item-info">
              <h3>{item.productName}</h3>
              {item.quantity > 0 ? (
                <p>In Stock</p>
              ) : (
                <p className="out-stock">Out of Stock</p>
              )}
              <div className="quantity-remove">
                <span className="quantity-selection">
                  Qty :{" "}
                  <select value={item.quantity}>
                    {[...Array(item.totalQuantity).keys()].map((quantity) => (
                      <option value={quantity + 1}>{quantity + 1}</option>
                    ))}
                  </select>
                </span>
                <p onClick={() => removeCartItem(item.productId)}>Remove</p>
              </div>
            </div>
            <div className="item-price">&#8377; {item.price}</div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartItems;
