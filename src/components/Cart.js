import React from 'react';

export default function (props) {
  return (
    <div class='card'>
      <div class='container'>
        <h4>
          <b>Car Name: {props.name}</b>
        </h4>
        <p>In cart: {props.count}</p>
      </div>
    </div>
  );
}
