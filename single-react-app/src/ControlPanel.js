import React, { Component } from 'react';
import Counter from './components/Counter';
import './ControlPanel.css';

export default class ControlPanel extends Component {
  state = {
    count: 0
  }

  handleCount = updateType => {
    const { count } = this.state;

    switch(updateType) {
      case 'increment':
        this.setState({
          count: count + 1
        });
        return;
      case 'decrement':
        this.setState({
          count: count - 1
        });
        return;
      default: 
        return;
    }
  }

  render() {
    return (
      <div className="control-wrapper">
        <Counter name="First count" updateCount={this.handleCount} />
        <Counter name="Second count" updateCount={this.handleCount} />
        <Counter name="Third count" updateCount={this.handleCount} />
        <div className="total">Total Count: {this.state.count}</div>
      </div>
    )
  }
}