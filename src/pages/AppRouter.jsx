import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, logIn } from '../redux/slices/auth/authSlice';
import { useEffect } from 'react';
import axios from '../utils/axios';

const AppRouter = () => {
  const isAuth = useSelector(checkIsAuth);

  const dispatch = useDispatch();

  const getMe = async () => {
    try {
      const { data } = await axios.get('auth/me');
      dispatch(logIn(data));
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getMe();
  }, []);

  return false ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
      <Route path="*" element={<Navigate replace to={HOME_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => {
        return <Route path={path} key={path} element={<Component />} />;
      })}
      <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
