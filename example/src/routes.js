import HomePage from "./containers/Home";
import AboutPage from "./containers/About";
import { Login, ForgotPassword } from "adux";
import logo from "./assets/logo.png";
import Image from "./assets/bg2.jpg";

const config = {
  authConfig: {
    name: "Yunus Emre",
    login: {
      path: "/api/login/",
      redirect: "/",
      field: "email"
    },
    forgotPassword: {
      path: "/auth/forgot-password/",
      redirect: "/auth/login",
      field: "email"
    },
    logo: logo,
    width: 150
  },
  theme: true,
  bgImage: Image,
  isForgotPassword: true,
  isLogin: true,
  isLabel: true
};

export default [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/about",
    component: AboutPage
  },
  {
    path: "/auth/login",
    component: Login,
    config: config
  },
  {
    path: "/auth/forgot-password",
    component: ForgotPassword,
    config: config
  }
];
