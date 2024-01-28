import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.togggle());
  };

  const incrementby2Handler = () => {
    dispatch(counterActions.incrementby2(2));
  };

  const decrementby2Handler = () => {
    dispatch(counterActions.decrementby2(2));
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementby2Handler}>Increment by 2</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementby2Handler}>Decrement by 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
