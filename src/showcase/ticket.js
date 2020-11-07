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
      size: