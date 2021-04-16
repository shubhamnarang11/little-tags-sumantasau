import React, { useState} from "react";
import "./DeliveryAddress.scss";
import { STATIC_DATA, TEST_DATA } from "../../config/StaticData";

export default function DeliveryAddress() {
   
    const { CART_DATA, DELIVERY_ADDRESS_DATA } = TEST_DATA; 

    const getDefaultDeliveryAddress = () => {
        const { DELIVERY_ADDRESS_DATA } = TEST_DATA;
        const DeliveryAddress =  DELIVERY_ADDRESS_DATA.filter((data) => data.isDefault === true);        
        return DeliveryAddress[0].id;
      };   

      const [DeliveryAddress, setDeliveryAddress] = useState(getDefaultDeliveryAddress); 
  

    const {
        ENGLISH: {
            ShoppingCart: { SHOPPINGCART_ITEM_COST,
                SHOPPINGCART_SUMMERY_HEADING, SHOPPINGCART_ITEM_TAX, 
                SHOPPINGCART_ITEM_DELIVERY, SHOPPINGCART_ORDER_TOTAL },

            DeliveryAddress: { DELIVERYADDRESS_HEADING, DELIVERYADDRESS_PAYMENT_BUTTON, DELIVERYADDRESS_Add} ,
                
            TAX_PERCENTAGE, DELIVERY_AMOUNT, DELIVERY_AMOUNT_LIMIT
        },
        
      } = STATIC_DATA;

    
    
    const TotalProductPrice = CART_DATA.reduce((ProductPrice, CartProduct) => ProductPrice + CartProduct.price, 0);
        
     const ProductTax = (TotalProductPrice *  TAX_PERCENTAGE)/100;

    const DeliveryCost = (TotalProductPrice + ProductTax) > DELIVERY_AMOUNT_LIMIT ? 0 : DELIVERY_AMOUNT;

    const OrderTotalCost = TotalProductPrice + ProductTax + DeliveryCost;
      return(
          <div id="delivery-address-container">
            <div className="left">
                <h3>{DELIVERYADDRESS_HEADING}</h3>
                <ul>
                { DELIVERY_ADDRESS_DATA.map((AddressData) => (
                <li>
                    <div className="address-info"> 
                        <h4>{AddressData.name}</h4>
                        <span>{AddressData.address}</span>
                    </div>
                    <div className="radio-button-container">
                        <input type="radio" name="radio-default-selection"
                        value={AddressData.id}
                        onClick={() => setDeliveryAddress(AddressData.id)}
                        checked={DeliveryAddress === AddressData.id}></input>
                    </div>
                </li>
                ))}
                </ul>
                <p><a href="/add-deliveryaddress" className="add-delivery-address-link">{DELIVERYADDRESS_Add}</a></p>
                

            </div>
            <div className="right">
                    <div className="heading-bar">
                            <div className="heading-item">{SHOPPINGCART_SUMMERY_HEADING}</div> 
                    </div>
                    <div className="summery-info"> 
                        <div>
                            <div className="item-total">{SHOPPINGCART_ITEM_COST} :</div>
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
                        <input type="button" value={DELIVERYADDRESS_PAYMENT_BUTTON} />
                    </div>
                </div>
            </div>        
      );
    }