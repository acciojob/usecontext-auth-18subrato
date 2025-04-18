import React from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({children}){
    const [val,setVal] = useState(false);
    return (<AuthContext.Provider value={{ val, setVal }}>
      {children}
    </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useProvider =()=>{
    const use = useContext(AuthContext);
    return use;
}


