//Routes
export const LOGIN_ROUTE: string = '/login';
export const REGISTER_ROUTE: string = '/register';

export const HOME_ROUTE: string = '/';
export const PROFILE_ROUTE: string = '/profile';

export const USER_ROUTE: string = '/users/:id';

export const POST_ROUTE: string = '/posts/:id';
export const ADD_POST_ROUTE: string = '/posts/new';

export const ABOUT_ROUTE: string = '/about';
export const CONTACT_ROUTE: string = '/contact';

//General Email Regex
export const regExpEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
