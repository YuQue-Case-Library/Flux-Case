import React, { Component } from 'react';
import './index.css';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.num !== this.state.num;
  }

  handleIncrement = () => {
    this.handleUpdateNum('increment');
  }

  handleDecrement = () => {
    this.handleUpdateNum('decrement');
  }

  handleUpdateNum = updateType => {
    const { num } = this.state;

    switch(updateType) {
      case 'increment':
        this.setState({
          num: num + 1
        });

        this.props.updateCount(updateType);
        return;
      case 'decrement':
        this.setState({
          num: num - 1
        });

        this.props.updateCount(updateType);
        return;
      default: 
        return;
    }
  }

  render() {
    const { name } = this.props;
    const { num } = this.state;

    return (
      <div className="wrapper">
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <div>{name}: {num}</div>
      </div>
    )
  }
}