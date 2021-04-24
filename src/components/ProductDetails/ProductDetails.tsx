import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Carousel } from '..';
import { STATIC_DATA, TEST_DATA } from '../../config/StaticData';
import { addItemsToCart, buyItem } from '../../actions/ProductDetails.action';
import './ProductDetails.scss';
import { ProductDetailsModel } from '../../models/ProductDetails.model';
import { ShoppingCartModel } from '../../models/ShoppingCart.model';
import { useHistory } from 'react-router';
import { CONFIG } from '../../config/Config';

const ProductDetails: FC<ProductDetailsModel.IProps> = ({
  addItemsToCart,
  buyItem,
}) => {
  let context: any = null;
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageZoomed, setIsImageZoomed] = useState(-1);

  const { PRODUCTS_DATA } = TEST_DATA;
  const {
    ENGLISH: {
      ProductDetails: { CATEGORY_PRODUCT_SIZES },
      NO_SUCH_IMAGE,
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
      const product = PRODUCTS_DATA.find((product) => product.id === productId);

      if (product && Object.keys(product).length > 0) {
        setSelectedProduct(product);
      }
    }
  }, [PRODUCTS_DATA]);

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
    if (buyNow) {
      buyItem(item);
      history.push(SHOPPING_CART_ITEMS);
    } else {
      addItemsToCart(item);
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
        event.pageX - 150,
        event.pageY - 150,
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
                  <img src={image} alt={NO_SUCH_IMAGE}></img>
                </div>
              ))}
            </Carousel>
          </div>
          <div className='all-images'>
            {selectedProduct.images.map((image: string, i: number) => (
              <img
                key={i}
                src={image}
                alt={NO_SUCH_IMAGE}
                onClick={() => setSelectedImage(i)}
                className={selectedImage === i ? 'selected-image' : ''}
              ></img>
            ))}
          </div>
        </div>
        <div className='content-div'>
          <p className='product-name'>{selectedProduct.name}</p>
          <div className='rating'>
            {selectedProduct.rating}
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
            <button className='add-to-cart' onClick={() => addOrBuyItem()}>
              Add to Cart
            </button>
            <button className='buy-now' onClick={() => addOrBuyItem(true)}>
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

export default connect(null, { addItemsToCart, buyItem })(ProductDetails);
