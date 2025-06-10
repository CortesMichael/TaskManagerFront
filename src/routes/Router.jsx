import { createBrowserRouter } from "react-router-dom"
import { BlankLayout } from "../layouts/BlankLayout"
import { Login } from "../pages/login/Login"
import { Register } from "../pages/register/Register"
import { Home } from "../pages/home/Home"
import { Teams } from "../pages/teams/Teams"
import { Tasks } from "../pages/tasks/Tasks"
import { NavBar } from "../components/NavBarProject"

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
            },
            {
                path: "/teams",
                element: <Teams />
            },
            {
                path: "/tasks",
                element: <Tasks />
            }
        ]
    }
])