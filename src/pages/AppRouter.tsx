import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../config/routes";
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, logIn } from "../redux/slices/auth/authSlice";
import { Suspense, useEffect, FC, useCallback } from "react";
import axios from "../utils/axios";
import { Spinner } from "../components";

import styles from "./AppRouter.module.css";
import { IUser } from "../types/User.interface";

interface GetAuthsResponse {
  message: string;
  user?: IUser;
  token?: string;
}

const AppRouter: FC = () => {
  const isAuth = useSelector(checkIsAuth);

  const dispatch = useDispatch();

  const getMe = useCallback(async () => {
    try {
      const { data } = await axios.get<GetAuthsResponse>("auth/me");
      dispatch(logIn(data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getMe();
  }, [getMe]);

  return (
    <Suspense
      fallback={
        <div className={styles.spinner}>
          <Spinner />
        </div>
      }
    >
      {isAuth ? (
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
      )}{" "}
    </Suspense>
  );
};

export default AppRouter;
