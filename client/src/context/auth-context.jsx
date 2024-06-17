import { createContext, useContext } from "react";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const storeTokenInLocalStorage = (token) => {
        return localStorage.setItem('token', token)
    }

    return <AuthContext.Provider value={{ storeTokenInLocalStorage }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {  
 const authContextValue = useContext(AuthContext);
 console.log(authContextValue)

 if (!authContextValue) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return authContextValue;
}


