import ListStore from '../stores/ListStore.js';

const Dispatcher = require('flux').Dispatcher;
const AppDispatcher = new Dispatcher();

// 注册回调函数处理 action
AppDispatcher.register(({ type, id, text, status }) => {
  switch(type) {
    case 'ADD_ITEM':
      ListStore.addNewItem(text);
      ListStore.emitChange();
      break;
    case 'REMOVE_ITEM':
      ListStore.removeItem(id);
      ListStore.emitChange();
      break;
    case 'REMOVE_ALL':
      ListStore.removeAll();
      ListStore.emitChange();
      break;
    case 'CHANGE_STATUS':
      ListStore.changeItemStatus(id, status);
      ListStore.emitChange();
      break;
    default: 
      break;
  }
});

export default AppDispatcher;