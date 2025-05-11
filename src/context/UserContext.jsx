import { createContext, useContext, useState } from "react"

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState(null)

    return(
        <UserContext.Provider value = {{loggedUser, setLoggedUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}