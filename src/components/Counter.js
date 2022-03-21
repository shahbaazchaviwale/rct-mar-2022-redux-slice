import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counters';
import classes from './Counter.module.css';

const Counter = () => {
  // this "state.counter" will call from store index.js after  use state values
  const value = useSelector((state) => state.counter.value); 
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };
  const increase = () => {
    // dispatch(counterActions.increase({payload_1: 10, payload_2: 20}))
    dispatch(counterActions.increase(10))
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{value}</div>}
      <button className={classes.btn_mar_10} onClick={increment}>Incremet</button>
      <button className={classes.btn_mar_10}  onClick={decrement}>Decrement</button>
      <button className={classes.btn_mar_10}  onClick={increase}>Increse by 10</button>
      <button className={classes.btn_mar_10}  onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
