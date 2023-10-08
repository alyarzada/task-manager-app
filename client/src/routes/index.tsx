import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { PrivateRoute } from "./PrivateRouter";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute element={<Home/>} />,
    },
    // {
    //     path: "/home",
    //     element: <Home />,
    // },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);