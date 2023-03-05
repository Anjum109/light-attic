import { createBrowserRouter } from "react-router-dom";
import DashBoardLayOut from "../../layout/DashBoardLayOut";
import Main from "../../layout/Main";
import Connect from "../../Pages/Home/Contact/Connect";

import Home from "../../Pages/Home/Home/Home";
import PetsCollections from "../../Pages/Home/PetsCollection/PetsCollections";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../Shared/Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
                element: <PrivateRoute><PetsCollections></PetsCollections></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.category_id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayOut></DashBoardLayOut></PrivateRoute>,
        children: [
            {}
            // {
            //     path: '/dashboard/myorders',
            //     element: <MyOrder></MyOrder>
            // },

            // {
            //     path: '/dashboard/allsellers',
            //     element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            // },
            // {
            //     path: '/dashboard/allbuyers',
            //     element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            // },
            // {
            //     path: '/dashboard/addproducts',
            //     element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            // },
            // {
            //     path: '/dashboard/myproducts',
            //     element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            // },
            // {
            //     path: '/dashboard/reportitems',
            //     element: <AdminRoute><ReportItems></ReportItems></AdminRoute>
            // },
            // {

            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://sweet-repeates-server.vercel.app/bookings/${params.id}`)
            // }

        ]
    }
]);

export default router; 