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
 