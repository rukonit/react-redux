import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch()

const counter =  useSelector(state => 
    state.counter.counter
  )

  const toggleCounterHandler = () => {};

  const incrementHandler = ()=> {
    dispatch(counterActions.increment())
  }

  const decrementHandler =()=> {
    dispatch(counterActions.decrement())
  }

  const increaseHandler =()=> {
    dispatch(counterActions.increase({value: 10}))
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
