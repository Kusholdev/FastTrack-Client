import { createBrowserRouter } from "react-router-dom"; // should be react-router-dom
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import PrivateRoutes from "../routes/PrivateRoutes";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashBoardLayout from "../layout/DashBoardLayout";
import myParcels from "../pages/Dashboard/myParcels/myParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import paymentHistory from "../pages/Dashboard/paymentHistory/paymentHistory";
import BeARider from "../pages/Dashboard/BeARider/BeARider";
import PendingRiders from "../pages/Dashboard/PendingRiders/PendingRiders";
import ActiveRiders from "../pages/Dashboard/ActiveRiders/ActiveRiders";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import Forbidden from "../pages/Forbidden/Forbidden";
import AdminRoute from "../routes/AdminRoute";
import AssignRider from "../pages/Dashboard/AssignRider/AssignRider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,   // ✅ use element, not Component:<>
    children: [
      {
        index: true,
        element: <Home />      // ✅
      },
      {
        path: 'forbidden',
        Component: Forbidden
      },
      {
        path: "coverage",
        element: <Coverage />  // ✅
      },
      {
        path: 'beARider',
        element: <PrivateRoutes><BeARider /></PrivateRoutes>,
        loader: () => fetch('/serviceCenter.json')
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRoutes>
            <SendParcel />
          </PrivateRoutes>
        ),
        loader: async () => {
          const res = await fetch("/serviceCenter.json"); // put json in /public folder
          return res.json();
        },
      }

    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes>
      <DashBoardLayout></DashBoardLayout>
    </PrivateRoutes>,
    children: [
      {
        path: 'myParcels',
        Component: myParcels
      },
      {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {
        path: 'paymentHistory',
        Component: paymentHistory
      },
      {
        path: 'pending-riders',
        element: <AdminRoute><PendingRiders></PendingRiders></AdminRoute>
      },
      {
        path: 'assign-rider',
        element: <AdminRoute><AssignRider></AssignRider></AdminRoute>
      },
      {
        path: 'active-riders',
        element: <AdminRoute><ActiveRiders></ActiveRiders></AdminRoute>
      },
      {
        path: 'makeAdmin',
        element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
      }
    ]
  }
]);
