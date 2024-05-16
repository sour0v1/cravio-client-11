import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/home/Home";
import AvailableFoods from "../pages/AvailableFoods";
import LogIn from "../form/LogIn";
import SignUp from "../form/SignUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'available-foods',
                element : <AvailableFoods></AvailableFoods>
            },
            {
                path : '/login',
                element : <LogIn></LogIn>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            }
        ]
    },
]);

export default router
