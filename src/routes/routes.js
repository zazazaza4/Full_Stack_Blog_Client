import { lazy } from 'react';
// import About from '../pages/About/About';
// import AddPost from '../pages/AddPost/AddPost';
// import Contact from '../pages/Contact/Contact';
// import Home from '../pages/Home/Home';
// import Login from '../pages/Login/Login';
// import Register from '../pages/Register/Register';
// import SinglePost from '../pages/SinglePost/SinglePost';

import {
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  HOME_ROUTE,
  ABOUT_ROUTE,
  ADD_POST_ROUTE,
  POST_ROUTE,
  CONTACT_ROUTE,
} from '../utils/consts';

const About = lazy(() => import('../pages/About/About'));
const Home = lazy(() => import('../pages/Home/Home'));
const AddPost = lazy(() => import('../pages/AddPost/AddPost'));
const SinglePost = lazy(() => import('../pages/SinglePost/SinglePost'));
const Contact = lazy(() => import('../pages/Contact/Contact'));

const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTER_ROUTE,
    Component: Register,
  },
];

export const privateRoutes = [
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
