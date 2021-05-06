import React, { FC, useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Carousel } from '..';
import { STATIC_DATA } from '../../config/StaticData';
import { addItemToCart, buyItem } from '../../actions/ProductDetails.action';
import './ProductDetails.scss';
import { ProductDetailsModel } from '../../models/ProductDetails.model';
import { ShoppingCartModel } from '../../models/ShoppingCart.model';
import { useHistory } from 'react-router';
import { CONFIG } from '../../config/Config';
import FirebaseContext from '../Firebase/Context';
import { setUser } from '../../actions/Login.action';

const ProductDetails: FC<ProductDetailsModel.IProps> = ({
  products,
  loggedInUser,
  addItemToCart,
  buyItem,
  setUser,
}) => {
  let context: any = null;
  const firebase = useContext(FirebaseContext);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageZoomed, setIsImageZoomed] = useState(-1);
  const [selectedProductRating, setSelectedProductRating] = useState(5);

  const {
    ENGLISH: {
      ProductDetails: { CATEGORY_PRODUCT_SIZES },
      NO_IMAGE_FOUND,
    },
  } = STATIC_DATA;
  const {
    ROUTES: { SHOPPING_CART_ITEMS },
  } = CONFIG;

  useEffect(() => {
    const productId = parseInt(
      window.location.search.substring(1).split('=')[1]
    );
    if (productId && productId !== -1) {
      firebase.db.ref(`ratings/${productId}`).once('value', (snap: any) => {
        const ratings = snap.val();
        let rating = 5;
        if (ratings) {
          rating =
            ratings.reduce((a: number, b: number) => a + b, 0) / ratings.length;
        }

        setSelectedProductRating(rating);
      });
      const product = products.find((product: any) => product.id === productId);

      if (product && Object.keys(product).length > 0) {
        setSelectedProduct(product);
      }
    }
  // eslint-disable-next-line
  }, [products]);

  const selectSize = (size: string) => {
    setSelectedSize(size);
  };

  const changeQuantity = (changeType: string) => {
    if (changeType === 'plus') {
      setSelectedQuantity(selectedQuantity + 1);
    } else {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const history = useHistory();

  const addOrBuyItem = (buyNow: boolean = false) => {
    const item: ShoppingCartModel.CartItem = {
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      quantity: selectedQuantity,
      totalQuantity: selectedProduct.quantity,
      price: selectedProduct.price,
      image: selectedProduct.images[0],
    };

    if (loggedInUser && Object.keys(loggedInUser).length > 0) {
      if (loggedInUser.cartItems) {
        const newUser = {
          ...loggedInUser,
          cartItems: [...loggedInUser.cartItems, item],
        };
        firebase.db
          .ref(`users/${loggedInUser.uid}`)
          .set(newUser)
          .then(() => setUser(newUser));
      } else {
        const newUser = {
          ...loggedInUser,
          cartItems: [item],
        };
        firebase.db
          .ref(`users/${loggedInUser.uid}`)
          .set(newUser)
          .then(() => setUser(newUser));
      }
    }

    if (buyNow) {
      buyItem(item);
      history.push(SHOPPING_CART_ITEMS);
    } else {
      addItemToCart(item);
    }
  };

  const getAvailableProductSizes = () => {
    return (CATEGORY_PRODUCT_SIZES as { [key: number]: string[] })[
      selectedProduct.categoryId
    ];
  };

  const showZoomedImage = (index: number) => {
    setIsImageZoomed(index);
  };

  const drawImage = (event: any) => {
    const image = new Image();
    image.src = selectedProduct.images[isImageZoomed];

    if (context) {
      context.drawImage(
        image,
        event.pageX - 100,
        event.pageY,
        80,
        80,
        0,
        0,
        200,
        200
      );
    }
  };

  return selectedProduct ? (
    <>
      <div className='product-details-div'>
        <div className='images-div'>
          <div className='carousel-images'>
            <Carousel
              show={1}
              infiniteLoop={false}
              carouselContainerClass='product-details'
              selectedImage={selectedImage}
              updateCurrentIndex={(index) => setSelectedImage(index)}
            >
              {selectedProduct.images.map((image: string, i: number) => (
                <div
                  key={i}
                  onMouseEnter={(e) => showZoomedImage(i)}
                  onMouseMove={drawImage}
                  onMouseLeave={() => showZoomedImage(-1)}
                >
                  <img src={image} alt={NO_IMAGE_FOUND}></img>
                </div>
              ))}
            </Carousel>
          </div>
          <div className='all-images'>
            {selectedProduct.images.map((image: string, i: number) => (
              <img
                key={i}
                src={image}
                alt={NO_IMAGE_FOUND}
                onClick={() => setSelectedImage(i)}
                className={selectedImage === i ? 'selected-image' : ''}
              ></img>
            ))}
          </div>
        </div>
        <div className='content-div'>
          <p className='product-name'>{selectedProduct.name}</p>
          <div className='rating'>
            {selectedProductRating}
            <i className='fa fa-star'></i>
          </div>
          <span className='horizontal-line' />
          {selectedProduct.quantity < 10 ? (
            <p className='items-left'>
              Only {selectedProduct.quantity} Items left in stock
            </p>
          ) : null}
          <p className='price'>Rs. {selectedProduct.price}</p>
          {getAvailableProductSizes().length > 0 ? (
            <>
              <p>Select Size</p>
              <div className='sizes-div'>
                {getAvailableProductSizes().map((size: string) => (
                  <div
                    onClick={() => {
                      selectSize(size);
                    }}
                    className={selectedSize === size ? 'selected' : ''}
                    key={size}
                  >
                    {size}
                  </div>
                ))}
              </div>{' '}
            </>
          ) : null}
          <p>Select Quantity</p>
          <button
            className='minus'
            onClick={() => changeQuantity('minus')}
            disabled={selectedQuantity === 1}
          >
            -
          </button>
          <input
            step='1'
            min='1'
            max={selectedProduct.quantity}
            value={selectedQuantity}
            title='Qty'
            className='quantity-input'
            readOnly
          />
          <button
            className='plus'
            onClick={() => changeQuantity('plus')}
            disabled={selectedQuantity === selectedProduct.quantity}
          >
            +
          </button>

          <div className='purchase-buttons'>
            <button
              className='add-to-cart'
              onClick={() => addOrBuyItem()}
              disabled={getAvailableProductSizes().length > 0 && !selectedSize}
            >
              Add to Cart
            </button>
            <button
              className='buy-now'
              onClick={() => addOrBuyItem(true)}
              disabled={getAvailableProductSizes().length > 0 && !selectedSize}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {isImageZoomed !== -1 && (
        <canvas
          id='canvas'
          ref={(c: any) => (context = c && c.getContext('2d'))}
        ></canvas>
      )}
    </>
  ) : null;
};

const mapStateToProps = (state: any) => ({
  products: state.dashboardState.products,
  loggedInUser: state.loginState.loggedInUser,
});

export default connect(mapStateToProps, { addItemToCart, buyItem, setUser })(
  ProductDetails
);
