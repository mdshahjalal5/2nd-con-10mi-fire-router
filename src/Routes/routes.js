import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Home from "../components/Home";
import Inventory from "../components/Inventory";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Wallet from "../components/Wallet";
import Main from "../layout/Main";

export  const routes = createBrowserRouter([
    {
        path:'/', 
        element:<Main></Main>, 
        errorElement:<Error></Error>,
        children:[
            {
                path:'/', 
                element:<Home/>
            },
            {
                path:'/home', 
                element:<Home></Home>
            }, 
            {
                path:'/login', 
                element:<Login></Login>
            }, 
            {
                path:'/register', 
                element:<Register></Register>
            }, 
            {
                path:'/profile', 
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }, 
            {
                path:'/wallet', 
                element: <PrivateRoute><Wallet></Wallet></PrivateRoute>
            },
            {
                path:'/inventory', 
                element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
            }
           
        ]
    },
    
])