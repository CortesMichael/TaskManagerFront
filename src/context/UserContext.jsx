import { createContext, useContext, useState } from "react"

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState(null) //armazena se usuário esta logado
    const [userRole, setUserRole] = useState(null)
    return(
        <UserContext.Provider value = {{loggedUser, setLoggedUser, userRole, setUserRole}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}