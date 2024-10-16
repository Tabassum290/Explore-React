import { useState } from 'react'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';
import Friend from './Friend';
function App() {
  function handleClick(){
    alert('button clicked');
  }
  function handleClick2(){
    alert('button 2 clicked');
  }
const addtoFive =(num) => {
  alert(num + 5);
}
 return (
    <>
      <h3>React Core Concepts</h3>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => alert('third button clicked')}>Click Me 3</button>
     <button onClick={() => addtoFive(3)}>Click Me 4</button>
     </>

  )
}

export default App
