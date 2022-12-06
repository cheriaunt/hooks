import { createRoot } from 'react-dom/client';
import { useState } from 'react';

const App = ()=> {
  return(<div>
    <Hookswitcher />
  </div>)
};

const Hookswitcher = () => {

  const [color,setColor] = useState('black');
  const [fontSize, setFontSize] = useState(14);

  return (
    <div style={{padding:'10px', backgroundColor:color, fontSize:`${fontSize}px`}}>
      Hello
      <button onClick={()=> {setColor('black')}}>Dark</button>
      <button onClick={()=> {setColor('white')}}>Light</button>
      <button onClick={()=> {setFontSize((s)=>s+2)}}>+</button>
    </div>
  )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

