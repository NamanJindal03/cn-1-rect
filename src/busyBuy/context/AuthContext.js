import React, { useState } from "react";
export const AuthContext = React.createContext();

const AuthProvider = (props)=>{
    const [user, setUser] = useState({name: 'naman', email: 'namanjindal@gmail.com'});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <AuthContext.Provider
                value={{user, isLoggedIn}}
            >  
                {props.children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider;