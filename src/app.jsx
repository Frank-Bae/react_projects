import React from 'react';
import { useSelector } from 'react-redux';

export default function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  return (
    <div>
      <h1>Counter {counter}</h1>

      {isLogged ? <h3>the secret is true</h3> : <h3>the secret is false</h3>}
    </div>
  );

}
