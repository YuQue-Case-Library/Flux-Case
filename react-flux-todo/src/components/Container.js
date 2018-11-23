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
      filterType: 'all'
    };
  }

  componentDidMount() {
    ListStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    const { filterType } = this.state;
    this.filterItems(filterType);
  }

  addNewItem = (e, text) => {
    actions.addNewItem(text);
  }

  filterItems = (type) => {
    const allItems = ListStore.getAllItems();
    const filteredItem = allItems.filter(({ status }) => {
      switch(type) {
        case 'all': 
          return true;
        case 'complete':
          return status === 'complete';
        case '':
          return status === '';
        default:
          throw new Error('刷选类型错误！');
      }
    });

    this.setState({
      filterType: type,
      items: filteredItem
    });
  }

  render() {
    const { items, filterType } = this.state;

    return (
      <div className="container">
        <div className="btn-wrapper">
          <a className={["filter-btn", filterType === 'all' ? "current" : ''].join(' ')} href="javascritp:;" onClick={() => this.filterItems('all')}>全部</a>
          <a className={["filter-btn", filterType === 'complete' ? "current" : ''].join(' ')} href="javascritp:;" onClick={() => this.filterItems('complete')}>已完成</a>
          <a className={["filter-btn", filterType === '' ? "current" : ''].join(' ')} href="javascritp:;" onClick={() => this.filterItems('')}>未完成</a>
        </div>
        <Form addNewItem={this.addNewItem} />
        <List items={items} />
      </div>
    )
  }
}