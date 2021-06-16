import React from 'react';

export default function (props) {
  return (
    <div class='card'>
      <div class='container'>
        <h4>
          <b>Car Name: {props.name}</b>
        </h4>
        <p>Quantity: {props.quantity}</p>
        <button onClick = {() => props.addToCart(props.id)}>+</button>
        <button onClick= {() => props.removeFromCart(props.id)}>-</button>
      </div>
    </div>
  );
}
