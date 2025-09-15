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
        path: "coverage",
        element: <Coverage />  // ✅
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
         path:'payment/:parcelId',
         Component:Payment
      },
      {
        path:'paymentHistory',
        Component:paymentHistory
      }
    ]
  }
]);
