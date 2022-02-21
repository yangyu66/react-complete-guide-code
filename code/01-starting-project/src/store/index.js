import { createStore } from 'redux';

const init = { counter: 0, show: true }
const counterReducer = (state = init, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      show: state.show
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      show: state.show
    };
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      show: !state.show
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;