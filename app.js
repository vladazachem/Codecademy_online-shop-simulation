const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 10]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
 return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});
