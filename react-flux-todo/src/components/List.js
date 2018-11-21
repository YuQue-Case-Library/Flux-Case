import React from 'react';
import Item from './Item';
import actions from '../actions';
import './index.css';

export default ({ items }) => {
  const onRemove = (id) => {
    actions.removeItem(id);
  }

  const onChangeStatus = (id, status) => {
    actions.changeStatus(id, status);
  } 

  return (
    <div className="list">
      {
        items.map((item, index) => (
          <Item key={index} item={item} onRemove={onRemove} onChangeStatus={onChangeStatus} />
        ))
      }
    </div>
  );
}