// main.js

import { cart, removeCart, updateQuantity ,updateDeliveryOption} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions } from "../data/deliveryoptions.js";

let cartSummaryHtml = "";
cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;
  products.forEach((product) => {
    if (productId === product.id) {
      matchingProduct = product;
    }
  });
  const deliveryOptionId = cartItem.deliveryOptionsId;
  let deliveryOption;
  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });
  const today = dayjs();
  const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
  const daysString = deliveryDate.format("dddd,MMMM D");
  cartSummaryHtml += `<div class="cart-item-container js-cart-item-container-${
    matchingProduct.id
  }">
            <div class="delivery-date">
              ${daysString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span class="quantity-info">
                    Quantity: <span class="quantity-label">${
                      cartItem.quantity
                    }</span>
                  </span>
                  <span class="update-quantity-link link-primary link-summary" data-product-id="${
                    matchingProduct.id
                  }">
                    Update
                  </span>
                  <input class="quantity-input" type="number" value="${
                    cartItem.quantity
                  }">
                  <span class="save-quantity-link link-primary" data-product-id="${
                    matchingProduct.id
                  }">Save</span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
                    matchingProduct.id
                  }">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionsHtml(matchingProduct, cartItem)}
              </div>
            </div>
          </div>`;
});

function deliveryOptionsHtml(matchingProduct, cartItem) {
  let Html = "";
  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const daysString = deliveryDate.format("dddd,MMMM D");
    const priceString =
      deliveryOption.priceCents === 0
        ? "Free"
        : `$${formatCurrency(deliveryOption.priceCents)} -`;
    const isChecked = deliveryOption.id === cartItem.deliveryOptionsId;
    Html += `<div class="delivery-option js-delivery-option data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
                  <input type="radio"
                    ${isChecked ? "checked" : ""}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${daysString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString} - Shipping
                    </div>
                  </div>
                </div>`;
  });
  return Html;
}

document.querySelector(".js-order-summary").innerHTML = cartSummaryHtml;

// Add event listeners for the "Update" button to switch to editing mode
document.querySelectorAll(".update-quantity-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const productId = link.dataset.productId;
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.classList.add("is-editing-quantity");
  });
});

// Add event listeners for the "Save" button to update quantities
document.querySelectorAll(".save-quantity-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const productId = link.dataset.productId;
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    const inputElement = container.querySelector(".quantity-input");

    // Get the new quantity value from the input
    const newQuantity = parseInt(inputElement.value, 10);

    // Validate the quantity before updating
    if (newQuantity >= 0 && newQuantity < 1000) {
      // Update the quantity in the cart using updateQuantity function
      updateQuantity(productId, newQuantity);

      // Update the quantity label to reflect the new quantity
      const quantityLabel = container.querySelector(".quantity-label");
      quantityLabel.textContent = newQuantity;

      // Remove editing class to switch back to non-editing mode
      container.classList.remove("is-editing-quantity");

      // Update the total quantity in the header
      updateCartQuantity();
    } else {
      alert("Quantity must be between 0 and 999.");
    }
  });
});

// Delete functionality
document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    removeCart(productId);
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    if (container) {
      container.remove();
      updateCartQuantity();
    } else {
      console.error(`Container for product ID ${productId} not found.`);
    }
  });
});

document.querySelectorAll('.js-delivery-option').forEach((Element) =>{
  Element.addEventListener('click',()=>{
    const {productId,deliveryOptionId} = Element.dataset;
    updateDeliveryOption(productId,deliveryOptionId)
  })
})

// Update the total cart quantity in the header
function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".checkout-items").innerHTML = `${cartQuantity} items`;
}

updateCartQuantity();
