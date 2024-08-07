import { renderOrderSummary } from "../scripts/checkout/ordersummary.js"; 
import { renderPaymentSummary } from "../scripts/checkout/paymentsummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
import '../data/backend-prac.js';

// with the help of promise we can wait for each step to finish and then resolve to move to next step using then.
// thats why we use promises to keep our code flat intead using callbacks.
// Async await is shortcut for promises.
// Async just make a function return its promise.

async function loadPage(){
  await loadProductsFetch();
  await  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();


// Promise.all([
//   loadProductsFetch(),

// ]).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });