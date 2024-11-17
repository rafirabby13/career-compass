import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../components/Home.jsx";
import Banner from "../components/Banner.jsx";
import Services from "../components/Services.jsx";
import ServiceDetail from "../Pages/ServiceDetail.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '',
                element: <Home/>,
                children:[
                    {
                        path: '',
                        element: <div>
                            <Banner/>
                            <Services/>
                        </div>
                    },
                   
                    {
                        path: "/serviceDetail/:id",
                        element: <ServiceDetail/>
                    }
                ]
            }
        ]
    }
])