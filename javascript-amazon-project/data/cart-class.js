// cart.oops.js

// a class is basically an object genreator.
class Cart {
  // Declare properties
  // without hash it is public property.
  cartItems;
  // with # it is a private classifier
  #storageKey;

  // Constructor to initialize the cart with a storage key
  constructor(storageKey) {
    this.#storageKey = storageKey;
    this.#loadFromStorage(); // Load items when creating the cart instance
  }

  // Load items from local storage specific to this cart instance
  #loadFromStorage() {
    const storedItems = JSON.parse(localStorage.getItem(this.#storageKey));
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
  }

  // Save items to local storage specific to this cart instance
  saveToStorage() {
    localStorage.setItem(this.#storageKey, JSON.stringify(this.cartItems));
  }

  // Add a product to the cart
  addToCart(productId) {
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
  }

  // Remove a product from the cart
  removeCart(productId) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.productId !== productId
    );
    this.saveToStorage();
  }

  // Update delivery option for a product in the cart
  updateDeliveryOption(productId, deliveryOptionId) {
    const matchingItem = this.cartItems.find(
      (cartItem) => cartItem.productId === productId
    );
    if (matchingItem) {
      matchingItem.deliveryOptionsId = deliveryOptionId;
      this.saveToStorage();
    } else {
      console.error(`Product ID ${productId} not found in cart.`);
    }
  }
}

// Create separate cart instances with unique storage keys
// each object that we genreate from the class is called an instance of the class.

const cart = new Cart('cart-oop');
const businessCart = new Cart('business-cart-oop');
console.log(businessCart instanceof Cart);

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
