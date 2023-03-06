import { createBrowserRouter } from "react-router-dom";
import DashBoardLayOut from "../../layout/DashBoardLayOut";
import Main from "../../layout/Main";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import MyOrders from "../../Pages/AddProducts/MyOrders";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import AllPets from "../../Pages/AllPets/AllPets";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import Connect from "../../Pages/Home/Contact/Connect";

import Home from "../../Pages/Home/Home/Home";
import PetsCollections from "../../Pages/Home/PetsCollection/PetsCollections";
import Login from "../../Pages/Login/Login";
import MyPets from "../../Pages/MyPets/MyPets";
import ReportItems from "../../Pages/ReportItems/ReportItems";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../Shared/Blog/Blog";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";


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
                path: '/allpets',
                element: <AllPets></AllPets>
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

            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },

            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyPets></MyPets></SellerRoute>
            },
            {
                path: '/dashboard/reportitems',
                element: <AdminRoute><ReportItems></ReportItems></AdminRoute>
            },
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