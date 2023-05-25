import React, {useState} from 'react';

function App() {
  const [num,setNum] = useState(0);

  const add = () => {
    setNum(num +1)
  }

  const remove = () => {
    setNum(num-1)
  }

  return (
    <>
    <h1>{num}</h1>
    <button onClick={add}>add</button>
    <button onClick={remove}>remove</button>
    </>
  );
}

export default App;
