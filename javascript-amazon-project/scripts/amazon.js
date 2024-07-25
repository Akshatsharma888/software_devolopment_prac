import { cart ,addToCart } from "../data/cart.js";
import { products } from "../data/products.js";

let addedMessageTimeoutId;
let productHtml = "";

products.forEach((product) => {
  productHtml += `<div class="product-container">
                  <div class="product-image-container">
                    <img class="product-image"
                      src="${product.image}">
                  </div>

                  <div class="product-name limit-text-to-2-lines">
                    ${product.name}
                  </div>

                  <div class="product-rating-container">
                    <img class="product-rating-stars"
                      src="images/ratings/rating-${
                        product.rating.stars * 10
                      }.png">
                    <div class="product-rating-count link-primary">
                      ${product.rating.count}
                    </div>
                  </div>

                  <div class="product-price">
                    $${(product.priceCents / 100).toFixed(2)}
                  </div>

                  <div class="product-quantity-container">
                    <select class= "js-quantity-selector-${product.id}">
                      <option selected value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <div class="product-spacer"></div>

                  <div class="added-to-cart js-added-to-cart-${product.id}">
                    <img src="images/icons/checkmark.png">
                    Added
                  </div>

                  <button class="add-to-cart-button button-primary js-addto-cart" data-product-id= "${
                    product.id
                  }">
                    Add to Cart
                  </button>
                </div>`;
});

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".js-cartquantity").innerHTML = cartQuantity;
}
document.querySelector(".js-products-grid").innerHTML = productHtml;
document.querySelectorAll(".js-addto-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();
    const addedMessage = document.querySelector(
      `.js-added-to-cart-${productId}`
    );
    addedMessage.classList.add("add-visible");
    setTimeout(() => {
      // Check if a previous timeoutId exists. If it does,
      // we will stop it.
      if (addedMessageTimeoutId) {
        clearTimeout(addedMessageTimeoutId);
      }

      const timeoutId = setTimeout(() => {
        addedMessage.classList.remove("add-visible");
      }, 2000);

      // Save the timeoutId so we can stop it later.
      addedMessageTimeoutId = timeoutId;
    }, 0);
  });
});
