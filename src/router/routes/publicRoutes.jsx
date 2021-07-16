import { ForgotPassword, Login, Register } from "../../pages";

export const publicRoutes = [
  {
    path: "/",
    exact: true,
    component: Login,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
  },
  {
    path: "/forgotPassword",
    exact: true,
    component: ForgotPassword,
  },
];
