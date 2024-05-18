import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './actions';

function App() {
  const count = useSelector((state) => state.incDecCounter);
  const dispatch = useDispatch();

  return (
    <>
      <h2>React Redux practical</h2>
      <h4>{count}</h4>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}

export default App
