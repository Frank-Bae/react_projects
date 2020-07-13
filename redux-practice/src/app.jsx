import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions/index';

export default function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  // if (counter === 5) {
  //   dispatch({ type: 'SIGN_IN' });
  // }

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(5))}>+</button>

      {isLogged ? <h3>the secret is true</h3> : <h3>the secret is false</h3>}
      <button onClick={() => dispatch(signIn())}>Click</button>
    </div>
  );
}
