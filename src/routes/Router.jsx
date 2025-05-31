import { createBrowserRouter } from "react-router-dom"
import { BlankLayout } from "../layouts/BlankLayout"
import { Login } from "../pages/login/Login"
import { Register } from "../pages/register/Register"
import { Home } from "../pages/home/Home"
import { NavBar } from "../components/NavBar"

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
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])