import React, {useState} from 'react';
import { Button } from 'antd';
import './styles/general.scss'

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
    <h1>{num} daslp[kdasop kdasop'd kop'aks op'skao dkas pask opaskdo</h1>
    <Button onClick={add} className='button'>add</Button>
    <Button onClick={remove}>remove</Button>
    </>
  );
}

export default App;
