import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {
  
  let All = ["https://www.cdmi.in/sliders/Game-Design--Development.jpg",
              "https://www.cdmi.in/sliders/int-ext.jpg",
              "https://www.cdmi.in/sliders/Full-stack.jpg",
              "https://www.cdmi.in/sliders/Slider.jpg",
              "https://www.cdmi.in/sliders/2d-3d-Animi-19201.jpg",
              "https://www.cdmi.in/sliders/Ethicakl-Hacking.webp",
              "https://www.cdmi.in/sliders/2.webp"
  ];
  let i=0;
  let [value,setvalue] = useState(Array(All.length).fill(""))
  function next(){
    if(i<All.length){
      console.log(i);
      let y =All[i]
      setvalue(y);
      ( <img src={setvalue} alt="" />)
      i++;
    }else {
      i=0;
      next();
    }
  }
  return (
    <>

     <img src={setvalue} alt="" />
   
      <button onClick={next}>next</button>
    </>
  );
}

export default App;
