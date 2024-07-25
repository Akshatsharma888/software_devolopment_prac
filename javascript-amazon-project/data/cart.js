// cart.js

// Initialize the cart from localStorage or use a default cart
export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
    },
  ];
}

// Save the current state of the cart to localStorage
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add a product to the cart, updating quantity if it already exists
export function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  const quantity = Number(quantitySelector.value);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
    });
  }
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
