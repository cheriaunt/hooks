import React,{ useContext } from "react";
import { createRoot } from 'react-dom/client';



const MyContext = React.createContext();

const App =()=>{
    return (<MyContext.Provider value="Hello word 123">
        <Child/>
    </MyContext.Provider>
    );

};

const Child = ()=>{
    const value = useContext(MyContext);
    return(<p>{value}</p>)
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);