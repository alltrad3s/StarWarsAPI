///Context is used to share data between components
import { createContext } from "react"; 

export const UserContext = createContext(null);

export const MyProvider = ({children}) => {


    return(
        <UserContext.Provider value="" >
            {children}
        </UserContext.Provider>
    )
}