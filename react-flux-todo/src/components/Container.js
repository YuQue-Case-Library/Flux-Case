import React, { Component } from 'react';
import actions from '../actions';
import ListStore from '../stores/ListStore';
import Form from './Form';
import List from './List';
import './index.css';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ListStore.getAllItems(),
    };
  }

  componentDidMount() {
    ListStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState({
      items: ListStore.getAllItems(),
    })
  }

  addNewItem = (e, text) => {
    actions.addNewItem(text);
  }

  render() {
    const { items } = this.state;

    return (
      <div className="container">
        <div className="btn-wrapper">
          <button onClick>全部</button>
          <button>已完成</button>
          <button>未完成</button>
        </div>
        <Form addNewItem={this.addNewItem} />
        <List items={items} />
      </div>
    )
  }
}