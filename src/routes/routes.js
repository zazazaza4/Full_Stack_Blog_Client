import About from '../pages/About/About';
import AddPost from '../pages/AddPost/AddPost';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import SinglePost from '../pages/SinglePost/SinglePost';

import {
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  HOME_ROUTE,
  ABOUT_ROUTE,
  ADD_POST_ROUTE,
  PROFILE_ROUTE,
  USER_ROUTE,
  POST_ROUTE,
} from '../utils/consts';

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
    path: PROFILE_ROUTE,
    Component: About,
  },
  {
    path: ADD_POST_ROUTE,
    Component: AddPost,
  },
  {
    path: USER_ROUTE,
    Component: AddPost,
  },
  {
    path: POST_ROUTE,
    Component: SinglePost,
  },
];
