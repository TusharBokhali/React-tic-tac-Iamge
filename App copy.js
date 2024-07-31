import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [value,setValue] = useState(Array(9).fill(""))
  // const print = (el) =>{
  //   // console.log();
  //   change("A");
  // }
  function print(el){
    // console.log(el);
    let sort = [...value];
     sort[el] = "A";
    setValue(sort)
  }
  
  return (
    <>
      <div className="container">
        <button onClick={()=>print(0)}>{value[0]}</button>
        <button onClick={()=>print(1)}>{value[1]}</button>
        <button onClick={()=>print(2)}>{value[2]}</button>
        <button onClick={()=>print(3)}>{value[3]}</button>
        <button onClick={()=>print(4)}>{value[4]}</button>
        <button onClick={()=>print(5)}>{value[5]}</button>
        <button onClick={()=>print(6)}>{value[6]}</button>
        <button onClick={()=>print(7)}>{value[7]}</button>
        <button onClick={()=>print(8)}>{value[8]}</button>
      </div>
    </>
  );
}

export default App;
