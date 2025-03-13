import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Error Page</h2>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            

        ]
    }
])

export default router