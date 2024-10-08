import { addToCart,cart,loadFromStoarage, updateDeliveryOption} from "../../data/cart.js";

// unit tests

describe('test suite addtocart',()=>{
  it('adds an existing product to cart',()=>{
    spyOn(localStorage,'setItem');
    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        DeliveryOptionId: '1'
      }]);
    });
    loadFromStoarage();
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
  });

  it('adds new product to cart',()=>{
    spyOn(localStorage,'setItem');
    // this method replaces the given function with a fake function so we can do whatever we want.
    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    });
    loadFromStoarage();
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
  })
  
});