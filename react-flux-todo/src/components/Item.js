import React from 'react';
import './index.css';

export default ({item: { id, text, status }, onRemove, onChangeStatus }) => (
  <li className="item">
    <span onClick={() => onChangeStatus(id, status === 'complete' ? '' : 'complete')} style={{textDecoration: status === 'complete' ? 'line-through' : ''}}>{text}</span>
    <span className="close" onClick={() => onRemove(id)}>x</span>
  </li>
);