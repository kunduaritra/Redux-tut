import { createStore } from "redux";

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

const store = createStore(counterReducer);

export default store;
