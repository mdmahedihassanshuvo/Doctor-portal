import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Appointment from "../components/Pages/Appointment/Appointment";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Checklist from "../components/Pages/Checklist/Checklist";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/appointment',
          element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <SignUp></SignUp>
        },
        {
          path: '/checklist',
          element: <Checklist></Checklist>
        }
      ]
    },
  ]);

  export default router;