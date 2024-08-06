import { renderOrderSummary } from "../scripts/checkout/ordersummary.js"; 
import { renderPaymentSummary } from "../scripts/checkout/paymentsummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
import '../data/backend-prac.js';

// with the help of promise we can wait for each step to finish and then resolve to move to next step using then.
// thats why we use promises to keep our code flat intead using callbacks.

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve();
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});