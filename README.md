
# line-flex-ui

## Installation

```sh
npm install line-flex-ui
```

```sh
yarn add line-flex-ui
```

## Usage

### Components

#### impressionTracker

```js
const { impressionTracker } = require('line-flex-ui/components');

impressionTracker({
  url: 'https://www.google-analytics.com/collect?...',
})
```

- `url`: string.

#### buttonsTemplate

```js
const { buttonsTemplate } = require('line-flex-ui/components');

buttonsTemplate({
  text: 'Please select', 
  actions: [
    {
      type: 'postback',
      label: 'Buy',
      data: 'action=buy&itemid=123'
    },
    {
      type: 'postback',
      label: 'Add to cart',
      data: 'action=add&itemid=123'
    },
    {
      type: 'uri',
      label: 'View detail',
      uri: 'http://example.com/page/123'
    },
  ],
})
```

In [Bottender](https://github.com/Yoctol/bottender):

```js
await context.sendFlex(
  'Basic Buttons Template',
  buttonsTemplate({
    text: 'Please select', 
    actions: [
      {
        type: 'postback',
        label: 'Buy',
        data: 'action=buy&itemid=123'
      },
      {
        type: 'postback',
        label: 'Add to cart',
        data: 'action=add&itemid=123'
      },
      {
        type: 'uri',
        label: 'View detail',
        uri: 'http://example.com/page/123'
      },
    ],
  })
);
```

- `text`: string.
- `actions`: array of actions.

### Showcase

#### apparel

```js
const { apparel } = require('line-flex-ui/showcase');

apparel({
  image:
    'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg',
  name: "Brown's T-shirts",
  originalPrice: '¥75,000',
  discountedPrice: '¥35,800',
  maskColor: '#03303acc',
})
```

In [Bottender](https://github.com/Yoctol/bottender):

```js
await context.sendFlex(
  'Basic Apparel',
  apparel({
    image:
      'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg',
    name: "Brown's T-shirts",
    originalPrice: '¥75,000',
    discountedPrice: '¥35,800',
    maskColor: '#03303acc',
  })
);
```

- `image`: string.
- `name`: string.
- `originalPrice`: string.
- `discountedPrice`: string.
- `maskColor`: string. Default to `#03303acc`.

#### hotel

```js
const { hotel } = require('line-flex-ui/showcase');

hotel({
  image:
    'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg',
  name: 'Brown Grand Hotel',
  rating: 4.0,
  originalPrice: '¥82,000',
  discountedPrice: '¥62,000',
})
```

In [Bottender](https://github.com/Yoctol/bottender):

```js
await context.sendFlex(
  'Basic Hotel',
  hotel({
    image:
      'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg',
    name: 'Brown Grand Hotel',
    rating: 4.0,
    originalPrice: '¥82,000',
    discountedPrice: '¥62,000',
  })
);
```

- `image`: string.
- `name`: string.
- `rating`: number.
- `originalPrice`: string.
- `discountedPrice`: string.

#### localSearch

```js
const { localSearch } = require('line-flex-ui/showcase');

localSearch({
  image:
    'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg',
  name: 'Brown Cafe',
  rating: 4.0,
  description: '東京旅行',
})
```

In [Bottender](https://github.com/Yoctol/bottender):

```js
await context.sendFlex(
  'Basic Local Search',
  localSearch({
    image:
      'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg',
    name: 'Brown Cafe',
    rating: 4.0,
    description: '東京旅行',
  })
);
```

- `image`: string.
- `name`: string.
- `rating`: number.
- `description`: string. Optional.

#### menu

```js
const { menu } = require('line-flex-ui/showcase');

menu({
  image:
    'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png',
  name: "Brown's Burger",
  priceRegular: '$10.5',
  kcalRegular: 400,
  priceLarge: '$15.5',
  kcalLarge: 550,
  description: 'Sauce, Onions, Pickles, Lettuce & Cheese',
})
```

In [Bottender](https://github.com/Yoctol/bottender):

```js
await context.sendFlex(
  'Basic Menu',
  menu({
    image:
      'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png',
    name: "Brown's Burger",
    priceRegular: '$10.5',
    kcalRegular: 400,
    priceLarge: '$15.5',
    kcalLarge: 550,
    description: 'Sauce, Onions, Pickles, Lettuce & Cheese',
  })
);
```

- `image`: string.
- `name`: string.
- `priceRegular`: string.
- `kcalRegular`: number.
- `priceLarge`: string.
- `kcalLarge`: number.
- `description`: string. Optional.

#### realEstate

```js
const { realEstate } = require('line-flex-ui/showcase');

realEstate({
  images: [
    'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip4.jpg',
    'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip5.jpg',
    'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip6.jpg',
  ],
  isNew: true,
  name: 'Cony Residence',
  numOfBedrooms: 3,
  price: '¥35,000',
  description:
    'Private Pool, Delivery box, Floor heating, Private Cinema',
})
```

In [Bottender](https://github.com/Yoctol/bottender):

```js
await context.sendFlex(
  'Basic Real Estate',
  realEstate({
    images: [
      'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip4.jpg',
      'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip5.jpg',
      'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip6.jpg',
    ],
    isNew: true,
    name: 'Cony Residence',
    numOfBedrooms: 3,
    price: '¥35,000',
    description:
      'Private Pool, Delivery box, Floor heating, Private Cinema',
  })
);
```

- `images`: string[].
- `isNew`: boolean. Default to `true`.
- `name`: string.
- `numOfBedrooms`: number.
- `price`: string.
- `description`: string. Optional.

#### receipt

```js
const { receipt } = require('line-flex-ui/showcase');

receipt({
  name: 'Brown Store',
  address: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
  items: [
    { name: 'Energy Drink', price: 2.99 },
    { name: 'Chewing Gum', price: 0.99 },
    { name: 'Bottled Water', price: 3.33 },
  ],
  cash: 8.0,
  paymentId: '#743289384279',
})
```

In [Bottender](https://github.com/Yoctol/bottender):

```js
await context.sendFlex(
  'Basic Receipt',
  receipt({
    name: 'Brown Store',
    address: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
    items: [
      { name: 'Energy Drink', price: 2.99 },
      { name: 'Chewing Gum', price: 0.99 },
      { name: 'Bottled Water', price: 3.33 },
    ],
    cash: 8.0,
    paymentId: '#743289384279',
  })
);
```

- `title`: string. Default to `RECEIPT`.
- `name`: string.
- `address`: string.
- `items`: { name: string, price: number }[].
- `cash`: number.
- `paymentId`: string. Optional.
- `formatPrice:`: string. Optional.

#### restaurant

```js
const { restaurant } = require('line-flex-ui/showcase');

restaurant({
  name: 'Brown Cafe',
  image:
    'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
  place: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
  time: '10:00 - 23:00',
  rating: 4.0,
  phone: '+886912345678',
  website: 'https://linecorp.com',
})
```

In [Bottender](https://github.com/Yoctol/bottender):

```js
await context.sendFlex(
  'Basic Restaurant',
  restaurant({
    name: 'Brown Cafe',
    image:
      'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
    place: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
    time: '10:00 - 23:00',
    rating: 4.0,
    phone: '+886912345678',
    website: 'https://linecorp.com',
  })
);
```

- `name`: string.
- `image`: string.
- `place`: string.
- `time`: string.
- `rating`: number.
- `phone`: string. Optional.
- `website`: string. Optional.

#### shopping

```js
const { shopping } = require('line-flex-ui/showcase');

shopping({
  image:
    'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_c.png',
  name: 'Arm Chair, White',
  price: '$49.99',
  isAvailable: true,
})
```

In [Bottender](https://github.com/Yoctol/bottender):

```js