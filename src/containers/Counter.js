import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOne, minusOne } from "../store/actions";

class Counter extends Component {

	//   addOne = () => {
	//     this.props.dispatch(addOne());
	//   }

  // 1st way
  minusOne = () => {
    this.props.dispatch(minusOne());
  }

  render() {
    return (
      <div >
        <header>
          <h1>{this.props.apple}</h1>
          <div >
            <button onClick={this.minusOne} type="button">-</button> {/* 1st way */}
            <button onClick={this.props.dispatch(addOne())} type="button">+</button> {/* 2nd way */}
            <button onClick={this.props.anything()} type="button">-</button> {/* 3rd way */}
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apple: state.number,
  };
}

// 3rd way
const mapDispatchToProps = (dispatch) => {
    return {
        anything: () => dispatch(minusOne())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
