import React from "react";
import "./ShoppingCart.scss";
import { STATIC_DATA, TEST_DATA } from "../../config/StaticData";

export default function ShoppingCart() {
    const {
        ENGLISH: {
            ShoppingCart: { SHOPPINGCART_HEADING, SHOPPINGCART_ITEM_HEADING, 
                SHOPPINGCART_PRICE_HEADING, SHOPPINGCART_SUMMERY_HEADING, SHOPPINGCART_ITEM_TAX, 
                SHOPPINGCART_ITEM_DELIVERY, SHOPPINGCART_ORDER_TOTAL, SHOPPINGCART_CHECKOUT_BUTTON },  
              
        },
      } = STATIC_DATA;

    const { CART_DATA } = TEST_DATA; 
    
    const QuantityNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const TotalProductPrice = CART_DATA.reduce((ProductPrice, CartProduct) => ProductPrice + CartProduct.price, 0);
     
    const ProductTax = (TotalProductPrice *  12.5)/100;

    const DeliveryCost = (TotalProductPrice + ProductTax) > 500 ? 0 : 40;

    const OrderTotalCost = TotalProductPrice + ProductTax + DeliveryCost;
    
      return(         
              <div id="cart-container">
                    <div className="left">
                        <h2>{SHOPPINGCART_HEADING}</h2>
                        <div className="heading-bar">
                             <div className="heading-item">{SHOPPINGCART_ITEM_HEADING}(5)</div>
                             <div className="heading-price">{SHOPPINGCART_PRICE_HEADING}</div>
                        </div>

                        { CART_DATA.map((CartProduct) => (
                            <div className="cart-item">
                                <div className="item-image">
                                <img src={CartProduct.image} alt={CartProduct.name} />    
                                </div>
                                <div className="item-info">
                                    <h3>{CartProduct.name}({CartProduct.category})</h3>
                                    <p>In Stock</p>
                                    <span className="quantity-selection">
                                        Qty : <select>
                                                { QuantityNumber.map((Quantity) => (
                                                        <option>{Quantity}</option>                                              
                                                ))}
                                            </select>
                                    </span>
                                </div>
                                <div className="item-price">&#8377; {CartProduct.price}</div>
                                <hr />
                            </div>
                            
                        ))}       
                    </div>
                    <div className="right">
                        <div className="heading-bar">
                             <div className="heading-item">{SHOPPINGCART_SUMMERY_HEADING}</div> 
                        </div>
                        <div className="summery-info"> 
                            <div>
                                <div className="item-total">{SHOPPINGCART_ITEM_HEADING} :</div>
                                <div className="item-price">&#8377; {TotalProductPrice}</div>
                            </div>   
                            <div>
                                <div className="item-tax">{SHOPPINGCART_ITEM_TAX} :</div>
                                <div className="price-tax">&#8377; {Math.round(ProductTax)}</div>
                            </div>  
                            <div>
                                <div className="item-devlivery">{SHOPPINGCART_ITEM_DELIVERY} :</div>
                                <div className="price-item-delivery">&#8377; {DeliveryCost}</div>
                            </div>    
                            <p />
                            <hr/>
                            <div>
                                <div className="order-total">{SHOPPINGCART_ORDER_TOTAL} </div>
                                <div className="price-total">&#8377; {Math.round(OrderTotalCost)}</div>
                            </div>    
                        </div>
                        <div className="button-container">
                            <input type="button" value={SHOPPINGCART_CHECKOUT_BUTTON} />
                        </div>
                    </div>
              </div>             
      );
    };
