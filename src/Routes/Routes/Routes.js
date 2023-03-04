import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Connect from "../../Pages/Home/Contact/Connect";

import Home from "../../Pages/Home/Home/Home";
import PetsCollections from "../../Pages/Home/PetsCollection/PetsCollections";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../Shared/Blog/Blog";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/connectus',
                element: <Connect></Connect>
            },
            {
                path: '/categories/:category_id',
                element: <PetsCollections></PetsCollections>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.category_id}`)
            },
        ]
    }
]);

export default router; 