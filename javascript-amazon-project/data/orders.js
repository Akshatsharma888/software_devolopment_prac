export const orders =  JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
  orders.unshift(order);
  saveToStoarage();
}

function saveToStoarage(){
  localStorage.setItem('orders',JSON.stringify(orders));
}