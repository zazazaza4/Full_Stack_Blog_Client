//Routes
export const LOGIN_ROUTE = '/login';
export const REGISTER_ROUTE = '/register';

export const HOME_ROUTE = '/';
export const PROFILE_ROUTE = '/profile';

export const USER_ROUTE = '/users/:id';

export const POST_ROUTE = '/posts/:id';
export const ADD_POST_ROUTE = '/posts/new';

export const ABOUT_ROUTE = '/about';

//General Email Regex
export const regExpEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
