/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../components/Home.jsx";
import Banner from "../components/Banner.jsx";
import Services from "../components/Services.jsx";
import ServiceDetail from "../Pages/ServiceDetail.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import Error from "../Pages/Error.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import CategoryNav from "../components/CategoryNav.jsx";
import About from "../Pages/About.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error/>,
        children:[
            {
                path: '',
                element: <Home/>,
                children:[
                    // {
                    //     path: '',
                    //     element: <div>
                            
                    //     </div>
                    // },
                   
                    {
                        path: "/serviceDetail/:id",
                        element: <PrivateRoutes><ServiceDetail/></PrivateRoutes>
                    },
                    
                ]
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/about',
                element: <About/>
            }
            
        ]
    }
])