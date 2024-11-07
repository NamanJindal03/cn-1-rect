import React, {useState} from "react";

export const MyContext = React.createContext();

const ProviderSample = ({children})=>{
    const [count, setCount] = useState(10);
    return (
        <MyContext.Provider value={count}>
            {children}
        </MyContext.Provider>
    )
}
export default ProviderSample