import React from 'react';
import CarCard from '../components/CarCard';
import Cart from '../components/Cart';
import data from '../utils/data';
export default class Cars extends React.Component {
  state = {
    cars: data,
    cart: [],
  };

  addToCart = (carId) => {
    const index = this.state.cart.findIndex((car) => car.id === carId); // find if the car already exists in the cart
    let updatedCart = [...this.state.cart]; // make a copy of cart
    if (index >= 0) {
      // case when car already exists in the cart
      const updatedCarInCart = { ...updatedCart[index] }; // the car which already exists
      updatedCarInCart.count++; // increasing the count of that pre-existing car in the cart, changing only one property 'count'
      updatedCart[index] = updatedCarInCart; // add the car details with updated count back into the cart-copy
    } else {
      // adding a new car in the cart with count 1
      const carIndex = this.state.cars.findIndex((car) => car.id === carId); // find the car in the cars list which is this.state.cars
      updatedCart.push({
        ...this.state.cars[carIndex],
        count: 1,
      });
    }
    this.setState({
      cart: updatedCart, // put the cart copy (which has the updated details) into the state.
    });
  };

  removeFromCart = (carId) => {
    const index = this.state.cart.findIndex((car) => car.id === carId);
    let updatedCart = [...this.state.cart];
    if (index >= 0) {
      const updatedCarInCart = { ...updatedCart[index] };
      updatedCarInCart.count--;
      updatedCart[index] = updatedCarInCart;
      this.setState({
        cart: updatedCart,
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <h3>Cart</h3>
        {this.state.cart.map((car) => (
          <Cart {...car} />
        ))}
        <h3>ALL CARS</h3>
        {this.state.cars.map((car) => (
          <CarCard addToCart={this.addToCart} removeFromCart={this.removeFromCart} {...car} />
        ))}
      </>
    );
  }
}
