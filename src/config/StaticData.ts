export const STATIC_DATA = {
  ENGLISH: {
    Navbar: {
      SEARCH_PLACEHOLDER: 'Search for products...',
      SIGN_IN_CREATE_ACCOUNT: 'Sign In or Create Account', 
    },
    UserProfile: {
      USERNAME_PLACEHOLDER : 'Enter your name',
      USEREMAIL_PLACEHOLDER : 'Enter your email',
      USERMOBILE_PLACEHOLDER : 'Enter your mobile',
      AVATAR_ALT_TAG: 'User Profile',      
    },
    Footer:{
      FOOTER_CONTACT_INFO_HEADING : "Contact Info",
      FOOTER_CONTACT_INFO : " Phone : (+91) 134567890 Address : 80A MG Road, Udayan Building, Kolkata West Bengal - 700415, India",
      FOOTER_CATEGORY_HEADING : "Categories",
      FOOTER_SUBSCRIPTION_HEADING : "Let's stay in touch",
      FOOTER_SUBSCRIPTION_INFO : "Keep up to date with our latest news and special offer",
    }, 
    ShoppingCart:{
      SHOPPINGCART_HEADING : "SHOPPING CART",
      SHOPPINGCART_ITEM_HEADING : "Item",
      SHOPPINGCART_PRICE_HEADING : "Price",
      SHOPPINGCART_SUMMERY_HEADING : "Summery",
      SHOPPINGCART_ITEM_TAX : "Tax @12.5%",
      SHOPPINGCART_ITEM_DELIVERY : "Delivery",
      SHOPPINGCART_ORDER_TOTAL : "Order Total",
      SHOPPINGCART_CHECKOUT_BUTTON : "Proceed to Checkout",
    },   
    App: {
      CATEGORIES: {
        'T-Shirts': 'tshirt',
        Shirts: 'shirt',
        Shoes: 'shoe',
        Trousers: 'trouser',
        'Other Accessories': 'other',
      },
    },
    NO_SUCH_IMAGE: 'No Image Found',    
  },
};

export const SessionKeys = {
  USERNAME: 'username',
};

export const TEST_DATA = {
  PRODUCTS_DATA: [
    {
      id: 1,
      name: 'Wrangler High Neck',     
      category: 'T-Shirts',      
      categoryId: 1,
      price: 531,
      rating: 4.2,
      quantity: 6,
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2521204/2018/2/26/11519626464547-na-8991519626464330-1.jpg',
    },
    {
      id: 2,
      name: 'Wrangler High Neck',     
      category: 'T-Shirts',     
      categoryId: 1,
      price: 319,
      rating: 4.2,
      quantity: 6,
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2388031/2020/2/26/b8563035-e4fb-4814-ba4a-1b371133f6901582699904522-Kook-N-Keech-Men-Peach-Coloured-Printed-Round-Neck-T-shirt-4-1.jpg',
    },
    {
      id: 3,
      name: 'Wrangler High Neck',      
      category: 'Shoes',
      categoryId: 2,
      price: 1000,
      rating: 4.2,
      quantity: 6,
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11873212/2020/7/20/ca92cb3b-f955-468c-a369-6cd412552e001595246752625-ASICS-Men-Sports-Shoes-8151595246751387-1.jpg',
    },
    {
      id: 4,
      name: 'Wrangler High Neck',     
      category: 'Shirts',     
      categoryId: 3,
      price: 629,
      rating: 4.2,
      quantity: 6,
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11327046/2020/2/5/ee4dbaa6-0765-40bc-848c-1dcc56dbb2101580901998633-Roadster-Men-Shirts-2221580901996569-5.jpg',
    },
    {
      id: 6,
      name: 'Wrangler High Neck',     
      category: 'Trousers',
      categoryId: 4,
      price: 1000,
      rating: 4.2,
      quantity: 6,
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290040/2018/2/7/11517998926396-HIGHLANDER-Men-Grey-Tapered-Fit-Solid-Chinos-5971517998926206-1.jpg',
    },
    {
      id: 7,
      name: 'Wrangler High Neck',      
      category: 'Other Accessories',
      categoryId: 5,
      price: 1000,
      rating: 4.2,
      quantity: 6,
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2278227/2018/4/5/11522921945738-DressBerry-Women-Watches-5181522921945628-1.jpg',
    },
  ],
  CART_DATA: [
    {
      id: 1,
      name: 'Printed Polo Collar T-shirt',
      category: 'T-Shirts',
      categoryId: 1,
      price: 531,
      rating: 4.2,
      quantity: 6,
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2521204/2018/2/26/11519626464547-na-8991519626464330-1.jpg',
    },
    {
      id: 2,
      name: 'Printed Round Neck T-shirt',
      category: 'T-Shirts',
      categoryId: 1,
      price: 319,
      rating: 4.2,
      quantity: 6,
      image:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2388031/2020/2/26/b8563035-e4fb-4814-ba4a-1b371133f6901582699904522-Kook-N-Keech-Men-Peach-Coloured-Printed-Round-Neck-T-shirt-4-1.jpg',
    }    
  ],
  CATEGORIES_DATA: [
    { id: 1, name: 'T-Shirts' },
    { id: 2, name: 'Shoes' },
    { id: 3, name: 'Shirts' },
    { id: 4, name: 'Trousers' },
    { id: 5, name: 'Other Accessories' },
  ],
};
