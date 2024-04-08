import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/AboutUs/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Layout/NotFound";



const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);
export default routes