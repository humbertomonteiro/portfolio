
import { useState, createContext } from "react";

export const UserContext = createContext({})

export default function UserProvider({children}) {

    const [ name, setName ] = useState('Humberto')

    return (
    <UserContext.Provider value={{name, setName}}>
        {children}
    </UserContext.Provider>
   )
}


