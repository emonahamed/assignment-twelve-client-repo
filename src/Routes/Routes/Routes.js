import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import Blogs from "../../Pages/Blogs/Blogs";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import FourOFour from "../../Pages/FourOFour/FourOFour";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ManageProducts from "../../Pages/ManageProducts/ManageProducts";
import SignUp from "../../Pages/SIgnUp/SignUp";
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
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element: <AllProducts></AllProducts>,
                // loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute> <AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/manageproducts',
                element: <SellerRoute><ManageProducts></ManageProducts></SellerRoute>
            }
        ]
    },
    {
        path: '*',
        element: <FourOFour></FourOFour>
    }

])

export default router;