// create a store
export function createStore(reducer) {
  let state;
  let listeners = []; // to store your listeners

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);

    // return the unsubscribe function
    return function unsubscribe(listener) {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1); // removing the listener from the list
    };
  }

  function dispatch(action) {
    state = reducer(state, action); // get the new state

    // call all the listener registered
    // each listener would get the updated state inside it's call back implementation
    listeners.forEach(listener => listener());
  }

  dispatch({}); // to start with

  return { dispatch, getState, subscribe };
}

// let's try to use this simple store
// create your counter reducer
export function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case 'Increment':
      return { ...state, count: state.count + 1 };
    case 'Decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
