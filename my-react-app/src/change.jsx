import { useState } from "react";

function ChangeComponent() {
  const [name, setName] = useState("Guest"); //for <input>
  const [quantity, setQuantity] = useState(1); // for <input>
  const [comment, setComment] = useState(""); // for <textarea>.
  const [payment, setPayment] = useState("visa"); // for <select>
  const [shipping,setShipping] = useState(''); // for <radio></radio>

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleQuantity(event) {
    setQuantity(event.target.value);
  }
  function handleComment(event) {
    setComment(event.target.value);
  }
  function handlePayment(event) {
    setPayment(event.target.value);
  }
  function handleShipping(event) {
    setShipping(event.target.value);
  }

  return (
    <>
      <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>
        <input value={quantity} onChange={handleQuantity} type="number" />
        <p>Quantity: {quantity}</p>
        <textarea value={comment} onChange={handleComment} placeholder="leave package instructions"></textarea>
        <p>Comment: {comment}</p>
        <select name="" id="" value={payment} onChange={handlePayment}>
          <option value=""> select an option</option>
          <option value="visa"> select for visa</option>
          <option value="paypal"> select for recharge</option>
          <option value="mastercard"> select an card</option>
        </select>
        <p>payment: {payment}</p>

        <label>
          <input type="radio" value='pick up' checked= {shipping == 'pick up'}  onChange={handleShipping}/>
          Pick up
        </label><br/>
        <label>
        <input type="radio" value='Delivery' checked= {shipping == 'Delivery'}  onChange={handleShipping}/>
          Delivery
        </label>
        <p>shipping: {shipping}</p>
      </div>
    </>
  );
}

export default ChangeComponent;