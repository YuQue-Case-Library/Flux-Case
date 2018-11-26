import actions from '../actions';
import ListStore from '../stores/ListStore';

it('run once action with text', () => {
  actions.addNewItem('lane');
  const allItems = ListStore.getAllItems();

  expect(allItems[0].text).toEqual('lane');
  expect(allItems.length).toEqual(1);

  actions.removeAll();
});

it('run once action without text', () => {
  actions.addNewItem();
  const allItems = ListStore.getAllItems();

  expect(allItems[0].text).toEqual(undefined);
  expect(allItems.length).toEqual(1);

  actions.removeAll();
});

it('run once and after remove all', () => {
  actions.addNewItem('lane');
  actions.removeAll();
  const allItems = ListStore.getAllItems();

  expect(allItems.length).toEqual(0);
});

it('run times action with text', () => {
  actions.addNewItem('lane1');
  actions.addNewItem('lane2');
  const allItems = ListStore.getAllItems();

  expect(allItems.length).toEqual(2);

  actions.removeAll();
});