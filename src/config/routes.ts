import { FC, lazy, LazyExoticComponent } from "react";
import {
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  HOME_ROUTE,
  ABOUT_ROUTE,
  ADD_POST_ROUTE,
  POST_ROUTE,
  CONTACT_ROUTE,
} from "../utils/consts";

const About = lazy(() => import("../pages/About/About"));
const Home = lazy(() => import("../pages/Home/Home"));
const AddPost = lazy(() => import("../pages/AddPost/AddPost"));
const SinglePost = lazy(() => import("../pages/SinglePost/SinglePost"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));

export interface RoutesInterface {
  path: string;
  Component: LazyExoticComponent<FC<{}>>;
}

export const publicRoutes: RoutesInterface[] = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTER_ROUTE,
    Component: Register,
  },
];

export const privateRoutes: RoutesInterface[] = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: ADD_POST_ROUTE,
    Component: AddPost,
  },
  {
    path: POST_ROUTE,
    Component: SinglePost,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contact,
  },
];
