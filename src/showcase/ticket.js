/**
 * @example
 *
 * ```js
 * ticket({
 *   image: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_3_movie.png',
 *   name: "BROWN'S ADVENTURE\nIN MOVIE",
 *   rating: 4.0,
 *   date: 'Monday 25, 9:00PM',
 *   place: '7 Floor, No.3',
 *   seat: 'C Row, 18 Seat',
 *   qrcode: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png'
 * })
 * ```
 */
function ticket({ image, name, rating, date, place, seat, qrcode }) {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: image,
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'http://linecorp.com/',
      },
    },
    body: {
      type: 'box',
      layout: 'vertical',
      spacing: 'md',
      contents: [
        {
          type: 'text',
          text: name,
          wrap: true,
          weight: 'bold',
          gravity: 'center',
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
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Date',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1,
                },
                {
                  type: 'text',
                  text: date,
                  wrap: true,
                  size: 'sm',
                  color: '#666666',
                  flex: 4,
                },
              ],
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Place',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1,
                },
                {
                  type: 'text',
                  text: place,
                  wrap: true,
                  color: '#666666',
       