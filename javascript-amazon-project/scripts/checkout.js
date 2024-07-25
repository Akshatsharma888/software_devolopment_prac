// main.js

import { cart, removeCart, updateQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let cartSummaryHtml = "";
cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;
  products.forEach((product) => {
    if (productId === product.id) {
      matchingProduct = product;
    }
  });
  cartSummaryHtml += `<div class="cart-item-container js-cart-item-container-${
    matchingProduct.id
  }">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
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
                  <input class="quantity-input" type="number" value="${cartItem.quantity}">
                  <span class="save-quantity-link link-primary" data-product-id="${matchingProduct.id}">Save</span>
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
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
});

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

// Update the total cart quantity in the header
function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".checkout-items").innerHTML = `${cartQuantity} items`;
}

updateCartQuantity();
