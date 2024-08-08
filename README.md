# Online shop simulation

## Description:
1. checkInventory() expects an order argument and returns a promise. If enough items are in stock to fill the order, the promise will be resolved in an array. The first element in the resolved value array will be the same order and the second element will be the total cost of the order as a number.

2. processPayment() expects an array argument with the order as the first element and the purchase total as the second. This function returns a promise. If there is a large enough balance on the giftcard associated with the order, it will resolve to an array. The first element in the resolved value array will be the same order and the second element will be a tracking number.

3. shipOrder() expects an array argument with the order as the first element and a tracking number as the second. It returns a promise which resolves to a string confirming the order has shipped.
