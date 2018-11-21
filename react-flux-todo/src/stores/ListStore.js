const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

let _id = 0;

export default assign({}, EventEmitter.prototype, {
  // 存储所有的 item 数据
  items: [],

  // 获取所有的 item 数据
  getAllItems() {
    return this.items;
  },

  // 添加 item 数据
  addNewItem(text) {
    this.items.push({
      id: ++_id,
      text,
      status: ''
    });
  },

  // 根据 id 移除 item 数据
  removeItem(removeId) {
    this.items = this.items.filter(({id}) => id !== removeId);
  },

  // 根据 ID 改变 item 状态
  changeItemStatus(changeId, status) {
    this.items.some((item, index) => {
      if(changeId === item.id) {
        this.items[index] = {
          ...item,
          status
        }
        return true;
      }
      return false;
    })
  },

  // 添加数据变化监听事件
  addChangeListener(callback) {
    this.on('change', callback);
  },

  // 移除数据变化监听事件
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },

  // 触发数据变化监听事件
  emitChange() {
    this.emit('change');
  }
});