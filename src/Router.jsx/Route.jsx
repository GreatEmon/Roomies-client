import { Children, Component } from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import Contact from '../pages/Contact'
import PrivacyPolicy from '../pages/Privacy'
import TermsOfService from '../pages/Terms'
import Error from "../pages/Error";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Add from "../pages/Add";
import PrivateRoute from "../Context/PrivateRoute";
import Browse from "../pages/Browse";
import ListDetails from "../pages/ListDetails";
import MyListing from "../pages/myListing";

export const router = createBrowserRouter([
    {
        path : '/',
        Component : HomeLayout,
        children : [
            {
                index : true,
                Component: Home
            },
            {
                path : 'privacy',
                Component : PrivacyPolicy
            },
            {
                path : 'terms',
                Component : TermsOfService
            },
            {
                path : 'contact',
                Component : Contact
            },
            {
                path : 'register',
                Component : Register
            },
            {
                path : 'login',
                Component : Login
            },
            {
                path : 'logout',
                Component : Logout
            },
            {
                path : 'details/:id',
                element : <PrivateRoute>
                    <ListDetails></ListDetails>
                </PrivateRoute>
            },
            {
                path : 'add',
                element : <PrivateRoute>
                    <Add></Add>
                </PrivateRoute>
            },
            {
                path : 'browse',
                element : <PrivateRoute>
                    <Browse></Browse>
                </PrivateRoute>
            },
            {
                path : 'mylist',
                element : <PrivateRoute>
                    <MyListing></MyListing>
                </PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        Component: Error
    }
])