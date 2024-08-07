import { renderOrderSummary } from "../scripts/checkout/ordersummary.js"; 
import { renderPaymentSummary } from "../scripts/checkout/paymentsummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
import '../data/backend-prac.js';

// with the help of promise we can wait for each step to finish and then resolve to move to next step using then.
// thats why we use promises to keep our code flat intead using callbacks.
// Async await is shortcut for promises.
// Async just make a function return its promise.
// throw 'error'; it manually throws error.
// reject which is used to create an error in the future.


async function loadPage() {
  try {
    await loadProductsFetch();
    await new Promise((resolve, reject) => {
      loadCart((err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
    renderOrderSummary();
    renderPaymentSummary();
  } catch (error) {
    console.error('Error loading page:', error);
    // Handle the error appropriately, e.g., show an error message to the user
  }
}

loadPage();


// Promise.all([
//   loadProductsFetch(),

// ]).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });