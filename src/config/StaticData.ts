export const STATIC_DATA = {
  ENGLISH: {
    Navbar: {
      SEARCH_PLACEHOLDER: 'Search for products...',
      SIGN_IN_CREATE_ACCOUNT: 'Sign In or Create Account',
      USER_MENU_ITEMS: [
        { name: 'My Account', path: '/profile' },
        { name: 'My Orders', path: '/orders' },
        { name: 'Logout', path: '/logout' },
      ],
    },
    UserProfile: {
      USERNAME_PLACEHOLDER: 'Enter your name',
      USEREMAIL_PLACEHOLDER: 'Enter your email',
      USERMOBILE_PLACEHOLDER: 'Enter your mobile',
      AVATAR_ALT_TAG: 'User Profile',
    },
    Footer: {
      FOOTER_CONTACT_INFO_HEADING: 'Contact Info',
      FOOTER_CONTACT_INFO:
        ' Phone : (+91) 134567890 Address : 80A MG Road, Udayan Building, Kolkata West Bengal - 700415, India',
      FOOTER_CATEGORY_HEADING: 'ONLINE SHOPPING',
      FOOTER_SUBSCRIPTION_HEADING: "Let's stay in touch",
      FOOTER_SUBSCRIPTION_INFO:
        'Keep up to date with our latest news and special offer',
    },
    ShoppingCart: {
      SHOPPINGCART_HEADING: 'SHOPPING CART',
      SHOPPINGCART_ITEM_HEADING: 'Item',
      SHOPPINGCART_ITEM_COST: 'Item Cost',
      SHOPPINGCART_PRICE_HEADING: 'Price',
      SHOPPINGCART_SUMMERY_HEADING: 'Summary',
      SHOPPINGCART_ITEM_TAX: 'Tax @12.5%',
      SHOPPINGCART_ITEM_DELIVERY: 'Delivery',
      SHOPPINGCART_ORDER_TOTAL: 'Order Total',
      SHOPPINGCART_CHECKOUT_BUTTON: 'Proceed to Checkout',
    },
    Login: {
      LOGIN_HEADING: 'Login',
      LOGIN_MOBILE_TEXT: 'Mobile No.',
      LOGIN_MOBILE_PLACEHOLDER: 'Enter the Mobile No.',
      LOGIN_SENDOTP_BUTTON_TEXT: 'Send OTP',
      LOGIN_INFO_TEXT: 'By signin to agree the terms and conditions',
      LOGIN_OTP_TEXT: 'OTP',
      LOGIN_OTP_PLACEHOLDER: 'Enter the OTP',
      LOGIN_BUTTON_TEXT: 'Login',
      LOGIN_NAME_TEXT: 'Name',
      LOGIN_NAME_PLACEHOLDER: 'Enter the Name',
      LOGIN_PROFILE_BUTTON_TEXT: 'Submit',
      LOGIN_SIGN_WITH_TEXT: 'Or sign in with',
      LOGIN_MOBILE_VALIDATION_TEXT: 'Please enter the mobile no.',
      LOGIN_OTP_VALIDATION_TEXT: 'Please enter the OTP',
      LOGIN_NAME_VALIDATION_TEXT: 'Please enter the name',
    },
    DeliveryAddress: {
      DELIVERYADDRESS_HEADING: 'SELECT DELIVERY ADDRESS',
      DELIVERYADDRESS_PAYMENT_BUTTON: 'Proceed to Payment',
      DELIVERYADDRESS_Add: 'Add New Address',
      ADD_DELIVERYADDRESS_HEADING: 'ADD DELIVERY ADDRESS',
      FIRSTNAME_TEXT: 'First Name',
      FIRSTNAME_PLACEHOLDER: 'Enter first name',
      LASTNAME_TEXT: 'Last Name',
      LASTNAME_PLACEHOLDER: 'Enter last name',
      EMAIL_TEXT: 'Email',
      EMAIL_PLACEHOLDER: 'Enter email address',
      MOBILE_TEXT: 'Mobile Number',
      MOBILE_PLACEHOLDER: 'Enter mobile number',
      ADDRESS_LINE1_TEXT: 'Address Line 1',
      ADDRESS_LINE1_PLACEHOLDER: 'Enter address line 1',
      ADDRESS_LINE2_TEXT: 'Address Line 2',
      ADDRESS_LINE2_PLACEHOLDER: 'Enter address line 2',
      STATE_TEXT: 'State',
      STATE_PLACEHOLDER: 'Select State',
      PINCODE_TEXT: 'Pin Code',
      PINCODE_PLACEHOLDER: 'Enter pin code',
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
    ProductDetails: {
      CATEGORY_PRODUCT_SIZES: {
        1: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        2: ['7', '8', '9', '10'],
        3: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        4: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        5: [],
      },
    },
    NO_IMAGE_FOUND: 'No Image Found',
    TAX_PERCENTAGE: 12.5,
    DELIVERY_AMOUNT: 40,
    DELIVERY_AMOUNT_LIMIT: 500,
    STAR_RATING: [1, 2, 3, 4, 5],
  },
};

export const SessionKeys = {
  USERNAME: 'username',
};

export const TEST_DATA = {
  PRODUCTS_DATA: [
    {
      id: 1,
      name: 'Printed Polo Collar T-shirt',
      category: 'T-Shirts',
      categoryId: 1,
      price: 531,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2521204/2018/2/26/11519626464547-na-8991519626464330-1.jpg',
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2521204/2018/2/26/11519626464462-na-8991519626464330-5.jpg',
      ],
    },
    {
      id: 2,
      name: 'Printed Round Neck T-shirt',
      category: 'T-Shirts',
      categoryId: 1,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2388031/2020/2/26/b8563035-e4fb-4814-ba4a-1b371133f6901582699904522-Kook-N-Keech-Men-Peach-Coloured-Printed-Round-Neck-T-shirt-4-1.jpg',
      ],
    },
    {
      id: 3,
      name: 'Men Gel Rocket 9 Volleyball',
      category: 'Shoes',
      categoryId: 2,
      price: 1000,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11873212/2020/7/20/ca92cb3b-f955-468c-a369-6cd412552e001595246752625-ASICS-Men-Sports-Shoes-8151595246751387-1.jpg',
      ],
    },
    {
      id: 4,
      name: 'Regular Fit Checked Shirt',
      category: 'Shirts',
      categoryId: 3,
      price: 629,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11327046/2020/2/5/ee4dbaa6-0765-40bc-848c-1dcc56dbb2101580901998633-Roadster-Men-Shirts-2221580901996569-5.jpg',
      ],
    },
    {
      id: 6,
      name: 'Men Tapered Fit Chinos',
      category: 'Trousers',
      categoryId: 4,
      price: 1000,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290040/2018/2/7/11517998926396-HIGHLANDER-Men-Grey-Tapered-Fit-Solid-Chinos-5971517998926206-1.jpg',
      ],
    },
    {
      id: 7,
      name: 'Women Analogue Watch',
      category: 'Other Accessories',
      categoryId: 5,
      price: 1000,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2278227/2018/4/5/11522921945738-DressBerry-Women-Watches-5181522921945628-1.jpg',
      ],
    },
    {
      id: 8,
      name: 'Printed Athleisure T-shirt',
      category: 'T-Shirts',
      categoryId: 1,
      price: 400,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6825458/2018/9/24/35fce325-de30-4c53-9f9e-226601f27ac01537788226072-HRX-by-Hrithik-Roshan-Men-Tshirts-2271537788225288-1.jpg',
      ],
    },
    {
      id: 9,
      name: 'Men Printed Round Neck T-shirt',
      category: 'T-Shirts',
      categoryId: 1,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg',
      ],
    },
    {
      id: 10,
      name: 'Printed Round Neck T-shirt',
      category: 'T-Shirts',
      categoryId: 1,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg',
      ],
    },
    {
      id: 11,
      name: 'Printed Round Neck T-shirt',
      category: 'T-Shirts',
      categoryId: 1,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11687264/2020/6/9/6fe28196-ea0a-4ea9-b132-8fdf8bbd9e4f1591703233064-Roadster-Men-Tshirts-4241591703231327-1.jpg',
      ],
    },
    {
      id: 12,
      name: 'Printed Round Neck T-shirt',
      category: 'T-Shirts',
      categoryId: 1,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg',
      ],
    },
    {
      id: 13,
      name: 'Printed Round Neck T-shirt',
      category: 'T-Shirts',
      categoryId: 1,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7546902/2019/2/11/be44366c-a232-47ec-a7b4-c4bea24f04e71549886561293-HERENOW-Men-Teal-Solid-Polo-Collar-T-shirt-7371549886559966-1.jpg',
      ],
    },
    {
      id: 14,
      name: 'Men Gel Rocket 9 Volleyball',
      category: 'Shoes',
      categoryId: 2,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2446351/2018/7/17/9f99ecec-8479-4688-9dc7-a5f3ebe574ee1531831039560-HRX-by-Hrithik-Roshan-Men-White-Sneakers-1281531831039406-1.jpg',
      ],
    },
    {
      id: 15,
      name: 'Men Gel Rocket 9 Volleyball',
      category: 'Shoes',
      categoryId: 2,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11979672/2021/1/4/be55d570-ea5e-41ac-b92a-ba01120831dc1609754255757-Nike-Air-Max-270-React-SEMens-Shoe-7171609754253758-1.jpg',
      ],
    },
    {
      id: 16,
      name: 'Men Gel Rocket 9 Volleyball',
      category: 'Shoes',
      categoryId: 2,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12067988/2021/3/18/58c8a10e-1945-49e1-b516-62fbc3ace64e1616076286404-HIGHLANDER-Men-White-Sneakers-8681616076285810-1.jpg',
      ],
    },
    {
      id: 17,
      name: 'Men Gel Rocket 9 Volleyball',
      category: 'Shoes',
      categoryId: 2,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/7/b6de1537-9234-4f8c-9657-f1f2860a65c71602021717638-1.jpg',
      ],
    },
    {
      id: 18,
      name: 'Men Gel Rocket 9 Volleyball',
      category: 'Shoes',
      categoryId: 2,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/31/f5b9bd0d-9b2b-42e5-ad5b-f53d15806c2b1617183958847-1.jpg',
      ],
    },
    {
      id: 19,
      name: 'Men Gel Rocket 9 Volleyball',
      category: 'Shoes',
      categoryId: 2,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/3/7/11bc12ae-27de-442c-ab25-96ab18cf53781551905038221-1.jpg',
      ],
    },
    {
      id: 20,
      name: 'Men Gel Rocket 9 Volleyball',
      category: 'Shoes',
      categoryId: 2,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/6/cc0dce3f-c31d-4f32-bd0b-a68169b6d1871601943317721-1.jpg',
      ],
    },

    {
      id: 21,
      name: 'Regular Fit Checked Shirt',
      category: 'Shirts',
      categoryId: 3,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1758578/2017/5/12/11494569522819-WROGN-Men-Shirts-8521494569522516-1.jpg',
      ],
    },
    {
      id: 22,
      name: 'Regular Fit Checked Shirt',
      category: 'Shirts',
      categoryId: 3,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1675355/2019/3/15/b27eff4e-2af7-43d4-a91d-15a8a8a97b401552634775287-HIGHLANDER-Men-Maroon-Slim-Fit-Printed-Casual-Shirt-14815526-1.jpg',
      ],
    },
    {
      id: 23,
      name: 'Regular Fit Checked Shirt',
      category: 'Shirts',
      categoryId: 3,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/15/00548a2b-01c4-4ba5-a797-19a8ca979b0b1610687644372-1.jpg',
      ],
    },
    {
      id: 24,
      name: 'Regular Fit Checked Shirt',
      category: 'Shirts',
      categoryId: 3,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9295491/2019/5/24/1b6a5482-facd-4d97-adbc-f9793a2a983e1558692707196-Taavi-Men-Multicoloured-Block-Print-Legacy-Casual-Shirt-with-1.jpg',
      ],
    },
    {
      id: 25,
      name: 'Regular Fit Checked Shirt',
      category: 'Shirts',
      categoryId: 3,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11207492/2020/3/17/176ef3ff-e2fd-4fa6-b0a4-e82ba1e9b36d1584445045811-Jack--Jones-Men-Shirts-8451584445044441-2.jpg',
      ],
    },
    {
      id: 26,
      name: 'Regular Fit Checked Shirt',
      category: 'Shirts',
      categoryId: 3,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/18/14ed4c4d-4a58-4980-a8ba-4dfcccaa0ea31574065137148-1.jpg',
      ],
    },
    {
      id: 27,
      name: 'Regular Fit Checked Shirt',
      category: 'Shirts',
      categoryId: 3,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8198869/2019/2/26/6b239567-e9c8-401a-861f-8e67b4c326551551180936756-Levis-Men-Blue-Slim-Fit-Solid-Casual-Shirt-5041551180935707-1.jpg',
      ],
    },
    {
      id: 28,
      name: 'Men Tapered Fit Chinos',
      category: 'Trousers',
      categoryId: 4,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5415202/2018/5/23/7a32e5c1-6ac6-4219-984e-63cb68497fa21527075068613-Roadster-Men-Trousers-6171527075067295-1.jpg',
      ],
    },
    {
      id: 29,
      name: 'Men Tapered Fit Chinos',
      category: 'Trousers',
      categoryId: 4,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9089099/2019/5/28/2ef64167-722c-427d-afa2-214777c46a911559042979355-HERENOW-Men-Trousers-4841559042978604-1.jpg',
      ],
    },
    {
      id: 30,
      name: 'Men Tapered Fit Chinos',
      category: 'Trousers',
      categoryId: 4,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12543008/2021/1/7/9603ed9b-08e8-4e45-9731-ad3f0b68d4bc1610004356990-US-Polo-Assn-Men-Trousers-9711610004353927-1.jpg',
      ],
    },
    {
      id: 31,
      name: 'Men Tapered Fit Chinos',
      category: 'Trousers',
      categoryId: 4,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290044/2019/3/15/640293e1-c177-4c05-86c9-bff2d359f6a21552640215770-HIGHLANDER-Men-Olive-Green-Tapered-Fit-Solid-Chinos-18615526-1.jpg',
      ],
    },
    {
      id: 32,
      name: 'Men Tapered Fit Chinos',
      category: 'Trousers',
      categoryId: 4,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13257826/2021/3/10/55e9eeb7-ad35-4c1c-a430-3587d14b11b01615368343493-Mast--Harbour-Men-Grey-Regular-Fit-Solid-Regular-Trousers-69-1.jpg',
      ],
    },
    {
      id: 33,
      name: 'Men Tapered Fit Chinos',
      category: 'Trousers',
      categoryId: 4,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290971/2018/4/12/11523513268633-Roadster-Men-Navy-Blue-Slim-Fit-Solid-Chinos-3301523513268378-1.jpg',
      ],
    },
    {
      id: 34,
      name: 'Men Tapered Fit Chinos',
      category: 'Trousers',
      categoryId: 4,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8375547/2019/4/5/23429892-0df2-4045-bff8-68dd52afc4e61554458740813-HIGHLANDER-Men-Navy-Blue-Slim-Fit-Checked-Chinos-10015544587-1.jpg',
      ],
    },
    {
      id: 35,
      name: 'Women Analogue Watch',
      category: 'Other Accessories',
      categoryId: 5,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9897265/2019/6/8/4d552fb2-f231-4284-9f25-5a615d4609af1559975024148-Marie-Claire-Women-Watches-9381559975023254-1.jpg',
      ],
    },
    {
      id: 36,
      name: 'Women Analogue Watch',
      category: 'Other Accessories',
      categoryId: 5,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7286311/2020/4/20/150b51d8-cfb2-49f8-ac91-2d414b4b83b31587384162699-French-Connection-Women-Silver-Toned-Analogue-Watch-FC1318RG-1.jpg',
      ],
    },
    {
      id: 37,
      name: 'Women Analogue Watch',
      category: 'Other Accessories',
      categoryId: 5,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2211583/2018/4/3/11522759404189-DressBerry-Women-Black-Analogue-Watch-MFB-PN-WTH-6183L-1-8951522759404039-1.jpg',
      ],
    },
    {
      id: 38,
      name: 'Women Analogue Watch',
      category: 'Other Accessories',
      categoryId: 5,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8076639/2018/12/20/e637f7ed-e580-41f0-807f-bfa795adeb7b1545307701806-French-Connection-Analog-Grey-Dial-Womens-Watch-FC1317RGM-19-1.jpg',
      ],
    },
    {
      id: 39,
      name: 'Women Analogue Watch',
      category: 'Other Accessories',
      categoryId: 5,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2111141/2020/3/11/fd4b4ba5-6667-4c98-b32e-3cc0b11eca761583926229712FossilTAILORWomenGoldAnalogueWatchES42641.jpg',
      ],
    },
    {
      id: 40,
      name: 'Women Analogue Watch',
      category: 'Other Accessories',
      categoryId: 5,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10974260/2020/1/20/4574f24a-5f58-404b-8298-ca44ef3d1f901579515535303-Daniel-Wellington-Women-Rose-Gold--Black-Iconic-Link-32-Anal-1.jpg',
      ],
    },
    {
      id: 41,
      name: 'Women Analogue Watch',
      category: 'Other Accessories',
      categoryId: 5,
      price: 319,
      rating: 4.2,
      quantity: 6,
      images: [
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2211587/2018/5/28/7d6edb63-8219-4d33-b02a-7d860a4d11711527489620300-DressBerry-Women-Brown-Analogue-Watch-8741527489620072-1.jpg',
      ],
    },
  ],
  CATEGORIES_DATA: [
    { id: 1, name: 'T-Shirts' },
    { id: 2, name: 'Shoes' },
    { id: 3, name: 'Shirts' },
    { id: 4, name: 'Trousers' },
    { id: 5, name: 'Other Accessories' },
  ],
  DELIVERY_ADDRESS_DATA: [
    {
      id: 1,
      name: 'Pitam Saha',
      address: '78 MG ROAD, KOLKATA - 722056',
      isDefault: true,
    },
    {
      id: 2,
      name: 'Sa Saha',
      address: '78 MG ROAD, KOLKATA - 722056',
      isDefault: false,
    },
  ],
  STATE_DATA: [
    { id: 1, name: 'Assam' },
    { id: 2, name: 'Andrapadesh' },
    { id: 3, name: 'Bihar' },
    { id: 4, name: 'Delhi' },
    { id: 5, name: 'Gujrat' },
  ],
};
