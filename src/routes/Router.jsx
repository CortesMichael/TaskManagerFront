import { createBrowserRouter } from "react-router-dom"
import { BlankLayout } from "../layouts/BlankLayout"
import { Login } from "../pages/login/Login"

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <BlankLayout />,
        children: [
            {
                path: "/",
                element: <Login />
            }
        ]
    }
])