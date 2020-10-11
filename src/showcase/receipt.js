/**
 * @example
 *
 * ```js
 * receipt({
 *   name: 'Brown Store',
 *   address: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
 *   items: [
 *     { name: 'Energy Drink', price: 2.99 },
 *     { name: 'Chewing Gum', price: 0.99 },
 *     { name: 'Bottled Water', price: 3.33 },
 *   ],
 *   cash: 8.0,
 *   paymentId: '#743289384279',
 * })
 * ```
 */
function receipt({
  title = 'RECEIPT',
  name,
  address,
  items,
  cash,
  paymentId,
  formatPrice = defaultFormatPrice,
} = {}) {
  const itemContents = items.map(item => ({
    type: 'box',
    layout: 'horizontal',
    contents: [
      {
        type: 'text',
        text: item.name,
        size: 'sm',
        color: '#555555',
        flex: 0,
      },
      {
        type: 'text',
        text: formatPrice(item.price),
        size: 'sm',
        color: '#111111',
     