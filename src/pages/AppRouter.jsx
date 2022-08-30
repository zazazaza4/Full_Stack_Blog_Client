import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { checkIsAuth } from '../redux/slices/auth/authSlice';

const AppRouter = () => {
  const isAuth = useSelector(checkIsAuth);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isAuth ? (
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
