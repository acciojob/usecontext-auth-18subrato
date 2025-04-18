
import React from "react";
import './../styles/App.css';
import { useProvider } from "../context/AuthContext";

const App = () => {

  const {val,setVal} = useProvider();

  return (
    <div>
        {/* Do not remove the main div */}
        
          <h1>Click on the checkbox to get authenticated</h1>
          {val ? (<p className="authText">You are now autenticated, you can proceed</p>):(<p>you are now authenticated</p>)}
          <input type="checkbox" id='hii' onChange={()=>setVal(true)} />
          <label htmlFor="hii">I'm not a robot</label>
    </div>
  )
}

export default App
