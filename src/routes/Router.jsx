import { createBrowserRouter } from "react-router-dom"
import { BlankLayout } from "../layouts/BlankLayout"
import { Login } from "../pages/login/Login"
import { Register } from "../pages/register/Register"

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <BlankLayout />,
        children: [
            {
                path: "/",
                element: <Login />
            }, 
            {
                path: "/home", 
                element: <h1>Teste</h1>
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])