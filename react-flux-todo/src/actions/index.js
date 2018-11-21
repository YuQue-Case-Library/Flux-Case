import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
  addNewItem(text) {
    AppDispatcher.dispatch({
      type: 'ADD_ITEM',
      text,
    })
  },

  removeItem(id) {
    AppDispatcher.dispatch({
      type: 'REMOVE_ITEM',
      id,
    })
  },

  changeStatus(id, status) {
    AppDispatcher.dispatch({
      type: 'CHANGE_STATUS',
      id,
      status,
    })
  }
}