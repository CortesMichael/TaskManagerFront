import { createContext, useContext, useState } from "react"

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState(null) //armazena se usuário esta logado

    return(
        <UserContext.Provider value = {{loggedUser, setLoggedUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}