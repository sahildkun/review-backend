import { createContext } from "react";


export const AuthContext = createContext({
    islogged: false,
    logIn: () => {},
    logOut : () => {}
})


