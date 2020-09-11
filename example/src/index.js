
const { router, line, text } = require('bottender/router');

const {
  apparel,
  hotel,
  localSearch,
  menu,
  realEstate,
  receipt,
  shopping,
  restaurant,
  social,
  ticket,
  todoApp,
  transit,
} = require('line-flex-ui/showcase');

const options = {
  quickReply: {
    items: [
      'apparel',
      'hotel',
      'localsearch',
      'menu',
      'realestate',
      'receipt',
      'restaurant',
      'shopping',
      'social',
      'ticket',
      'todoapp',
      'transit',
    ].map(type => ({
      type: 'action',
      action: {
        type: 'message',
        label: type,
        text: type,
      },
    })),
  },
};

async function Welcome(context) {
  await context.sendText('Welcome to Flex UI', options);
}

module.exports = async function App() {
  return router([
    line.follow(Welcome),
    line.join(Welcome),

    text(/apparel/i, async context => {
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

      await context.sendFlex(
        "With `maskColor: '#9c8e7ecc'`",
        apparel({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg',
          name: "Brown's T-shirts",
          originalPrice: '¥75,000',
          discountedPrice: '¥35,800',
          maskColor: '#9c8e7ecc',
        })
      );

      await context.sendFlex(
        'With Other Image',
        apparel({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip2.jpg',
          name: "Cony's T-shirts",
          originalPrice: '¥75,000',
          discountedPrice: '¥35,800',
          maskColor: '#9c8e7ecc',
        })
      );

      await context.sendFlex(
        'Carousel',
        {
          type: 'carousel',
          contents: [
            apparel({
              image:
                'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg',
              name: "Brown's T-shirts",
              originalPrice: '¥75,000',
              discountedPrice: '¥35,800',
              maskColor: '#03303acc',
            }),
            apparel({
              image:
                'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip2.jpg',
              name: "Cony's T-shirts",
              originalPrice: '¥75,000',
              discountedPrice: '¥35,800',
              maskColor: '#9c8e7ecc',
            }),
          ],
        },
        options
      );
    }),
    text(/hotel/i, async context => {
      await context.sendFlex(
        'Basic Hotel',
        hotel({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg',
          name: 'Brown Grand Hotel',
          rating: 4.0,
          originalPrice: '¥82,000',
          discountedPrice: '¥62,000',
        }),
        options
      );
    }),
    text(/localsearch/i, async context => {
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

      await context.sendFlex(
        'Without `description`',
        localSearch({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg',
          name: 'Brown Cafe',