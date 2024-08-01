// cart.js
export let cart;
loadFromStoarage();
export function loadFromStoarage(){
  cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionsId: "1",
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionsId: "2",
      },
    ];
  }

}

// Save the current state of the cart to localStorage
function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add a product to the cart, updating quantity if it already exists
export function addToCart(productId) {
  // Find the matching item in the cart
  const matchingItem = cart.find(cartItem => cartItem.productId === productId);

  // Select the quantity input element
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantity = quantitySelector ? Number(quantitySelector.value) : 1; // Default to 1 if not found

  // Check if the quantity is a valid number
  if (isNaN(quantity) || quantity <= 0) {
    console.error(`Invalid quantity for product ID ${productId}`);
    return;
  }

  // Update the cart
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
      deliveryOptionsId: "1",
    });
  }

  // Save the updated cart to localStorage
  saveToStorage();
}

// Remove a product from the cart
export function removeCart(productId) {
  cart = cart.filter((cartItem) => cartItem.productId !== productId);
  saveToStorage();
}

// Update the quantity of a product in the cart
export function updateQuantity(productId, newQuantity) {
  const cartItem = cart.find((item) => item.productId === productId);
  if (cartItem) {
    cartItem.quantity = newQuantity;
    saveToStorage();
  } else {
    console.error(`Product ID ${productId} not found in cart.`);
  }
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  const matchingItem = cart.find((cartItem) => cartItem.productId === productId);
  if (matchingItem) {
    matchingItem.deliveryOptionsId = deliveryOptionId;
    saveToStorage();
  } else {
    console.error(`Product ID ${productId} not found in cart.`);
  }
}
