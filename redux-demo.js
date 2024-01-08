const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + action.value,
      };
    case "decrement":
      return {
        counter: state.counter - action.value,
      };
    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment", value: 5 });
store.dispatch({ type: "increment", value: 5 });
store.dispatch({ type: "increment", value: 5 });
store.dispatch({ type: "decrement", value: 5 });
