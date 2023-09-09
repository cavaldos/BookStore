import React from "react";
import PrivateLayout from "~/components/layout/private.layout";
import PublicLayout from "~/components/layout/public.layout";

import Home from "~/pages/public/home";
import DashBoard from "~/pages/private/dashboard";
import Signin from "~/components/auth/signin";
import Signup from "~/components/auth/signup";
interface Route {
  path: string;
  component: React.ComponentType<any> | React.FC<any>;
  Layout?: React.ComponentType<any> | React.FC<any> | null;
}

const PublicRoute: Array<Route> = [
  {
    path: "/signin",
    component: Signin,
    Layout: null,
  },
  {
    path: "/signup",
    component: Signup,
    Layout: null,
  },
  {
    path: "/",
    component: Home,
    Layout: PublicLayout,
  },

];

const PrivateRoute: Array<Route> = [
  {
    path: "/dashboard",
    component: DashBoard,
    Layout: PrivateLayout,
  },
];

export { PublicRoute, PrivateRoute };
