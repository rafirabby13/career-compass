import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../components/Home.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '',
                element: <Home/>
            }
        ]
    }
])