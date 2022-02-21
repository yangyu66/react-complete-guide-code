import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  /// will set up subsriber to this state in store
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {
    console.log("hit")
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
  <div className={classes.value}>-- COUNTER VALUE -- {counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
