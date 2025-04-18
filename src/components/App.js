
import React from "react";
import './../styles/App.css';
import { useProvider } from "../context/AuthContext";

const App = () => {

  const {val,setVal} = useProvider();

  return (
    <div>
        {/* Do not remove the main div */}
        
          <h1>Click on the checkbox to get authenticated</h1>
          {val ? (<p className="authText">You are now authenticated, you can proceed</p>):(<p>you are not authenticated</p>)}
          <input type="checkbox" name="checkbox" onClick={()=>setVal(true)} />
          <label htmlFor="checkbox">I'm not a robot</label>
    </div>
  )
}

export default App
