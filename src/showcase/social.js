/**
 * @example
 *
 * ```js
 * social({
 *   images: [
 *     'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip7.jpg',
 *     'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip8.jpg',
 *     'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip9.jpg',
 *   ],
 *   profile: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip13.jpg',
 *   username: 'brown_05',
 *   text: 'I went to the Brown&Cony cafe in Tokyo and took a picture',
 *   likeCount: 1140753,
 * })
 * ```
 */
function social({ images, profile, username, text, likeCount }) {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'image',
              url: images[0],
              size: '5xl',
              aspectMode: 'cover',
              aspectRatio: '150:196',
              gravity: 'center',
  