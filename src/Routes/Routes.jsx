import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/AboutUs/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Layout/NotFound";
// import GoogleLogin from "../Pages/GoogleLogin/GoogleLogin";
import Github from "../Pages/Login/Github";
import EmailLogin from "../Pages/Login/EmailLogin";
import CardDetails from "../Pages/CardDetails";
import PrivetRoutes from "./PrivetRoutes";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Welcome from "../Pages/Welcome";
import Reviews from "../Pages/Reviews";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";



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
                path:'/cards/:id',
                element:<PrivetRoutes><CardDetails></CardDetails></PrivetRoutes>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
               path:'/contact',
               element:<PrivetRoutes><ContactUs></ContactUs></PrivetRoutes>
            },
            {
                path:'/updateProfile',
                element:<PrivetRoutes><UpdateProfile></UpdateProfile></PrivetRoutes>
            },
            {
                path:'/review',
                element:<PrivetRoutes><Reviews></Reviews></PrivetRoutes>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
               path:'/emailLogin',
               element:<EmailLogin></EmailLogin>
            },
            {
                path:'/githubLogin',
                element:<Github></Github>

            },
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path:'/welcome',
                element:<Welcome></Welcome>
            }
        ]
    }
]);
export default routes