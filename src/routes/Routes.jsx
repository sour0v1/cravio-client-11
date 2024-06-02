import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/home/Home";
import AvailableFoods from "../pages/AvailableFoods";
import LogIn from "../form/LogIn";
import SignUp from "../form/SignUp";
import AddFood from "../pages/AddFood";
import ManageFood from "../pages/ManageFood";
import FoodRequest from "../pages/FoodRequest";
import PrivateRoute from "./PrivateRoute";
import SingleFood from "../pages/SingleFood";
import UpdateAddedFood from "../pages/UpdateAddedFood";
import ErrorPage from "../ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/available-foods',
                element : <PrivateRoute><AvailableFoods></AvailableFoods></PrivateRoute>
            },
            {
                path : '/login',
                element : <LogIn></LogIn>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
            {
                path : '/add-food',
                element : <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path : '/manage-food',
                element : <PrivateRoute><ManageFood></ManageFood></PrivateRoute>
            },
            {
                path : '/food-request',
                element : <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>,
                // loader : () => fetch('https://cravio-server.vercel.app/requested-food')
            },
            {
                path : '/food/:id',
                element : <SingleFood></SingleFood>,
                loader : ({params}) => fetch(`https://cravio-server.vercel.app/food/${params.id}`)
            },
            {
                path : '/update/:id',
                element : <UpdateAddedFood></UpdateAddedFood>,
                loader : ({params}) => fetch(`https://cravio-server.vercel.app/food/${params.id}`)
            }
        ]
    },
]);

export default router
