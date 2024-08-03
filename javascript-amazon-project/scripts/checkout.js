import { renderOrderSummary } from "../scripts/checkout/ordersummary.js"; 
import { renderPaymentSummary } from "../scripts/checkout/paymentsummary.js"
import { loadProducts } from "../data/products.js";
// import {Car} from '../data/car.js'
// import '../data/cart-class.js';
import '../data/backend-prac.js'
loadProducts(() =>{
  renderOrderSummary();
  renderPaymentSummary();
});
