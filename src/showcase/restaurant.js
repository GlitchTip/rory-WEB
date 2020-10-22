
/**
 * @example
 *
 * ```js
 * restaurant({
 *   name: 'Brown Cafe',
 *   image: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
 *   place: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
 *   time: '10:00 - 23:00',
 *   rating: 4.0,
 *   phone: '+886912345678',
 *   webiste: 'https://linecorp.com',
 * })
 * ```
 */
function restaurant({ name, image, place, time, rating, phone, website }) {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: image,
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      ...(website
        ? {
            action: {
              type: 'uri',
              uri: website,
            },
          }
        : {}),
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: name,
          weight: 'bold',
          size: 'xl',
        },
        {
          type: 'box',
          layout: 'baseline',
          margin: 'md',
          contents: getRatingContent(rating),
        },
        {
          type: 'box',