import { Login } from "../../pages";

export const publicRoutes = [
  {
    path: "/",
    exact: true,
    component: Login,
  },
  {
    path: "/register",
    exact: true,
    component: Login,
  },
  {
    path: "/forgotPassword",
    exact: true,
    component: Login,
  },
];
