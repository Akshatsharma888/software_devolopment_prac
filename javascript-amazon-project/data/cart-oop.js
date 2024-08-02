// cart.oops.js

function Cart(storageKey) {
  const cart = {
    cartItems: undefined,

    // Load items from local storage specific to this cart instance
    loadFromStorage: function () {
      const storedItems = JSON.parse(localStorage.getItem(storageKey));
      this.cartItems = storedItems || [
        // Default items if nothing is in storage
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
    },

    // Save items to local storage specific to this cart instance
    saveToStorage: function () {
      localStorage.setItem(storageKey, JSON.stringify(this.cartItems));
    },

    addToCart: function (productId) {
      // Find the matching item in the cart
      const matchingItem = this.cartItems.find(
        (cartItem) => cartItem.productId === productId
      );

      // Select the quantity input element
      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
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
        this.cartItems.push({
          productId: productId,
          quantity: quantity,
          deliveryOptionsId: "1",
        });
      }

      // Save the updated cart to localStorage
      this.saveToStorage();
    },

    removeCart: function (productId) {
      this.cartItems = this.cartItems.filter(
        (cartItem) => cartItem.productId !== productId
      );
      this.saveToStorage();
    },

    updateDeliveryOption: function (productId, deliveryOptionId) {
      const matchingItem = this.cartItems.find(
        (cartItem) => cartItem.productId === productId
      );
      if (matchingItem) {
        matchingItem.deliveryOptionsId = deliveryOptionId;
        this.saveToStorage();
      } else {
        console.error(`Product ID ${productId} not found in cart.`);
      }
    },
  };

  // Load the cart items from storage upon creation
  cart.loadFromStorage();

  return cart;
}

// Create separate cart instances with unique storage keys
const cart = Cart("cart-oop");
const businessCart = Cart("business-cart-oop");

// Add a product to the cart, updating quantity if it already exists
cart.addToCart("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
console.log("Cart: ", cart);

// Function to update the quantity of a product in the cart
export function updateQuantity(productId, newQuantity) {
  const cartItem = cart.cartItems.find((item) => item.productId === productId);
  if (cartItem) {
    cartItem.quantity = newQuantity;
    cart.saveToStorage();
  } else {
    console.error(`Product ID ${productId} not found in cart.`);
  }
}

// Add a product to the business cart
businessCart.addToCart("cdef2345-0f35-48f5-b7a3-1ea210004f2e");
console.log("Business Cart: ", businessCart);
