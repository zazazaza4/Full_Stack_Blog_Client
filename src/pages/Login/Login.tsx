import { FC, useState } from "react";
import axios from "../../utils/axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Spinner } from "../../components";
import { logIn } from "../../redux/slices/auth/authSlice";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const loginOptions = {
  username: {
    required: "Username is required",
    minLength: {
      value: 4,
      message: "Username must have at least 4 characters",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters",
    },
  },
};

interface FormData {
  username: string;
  password: string;
}

const Login: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const dispatch = useDispatch();

  const onSubmit = async (data: FormData) => {
    setError(null);
    const { username, password } = data;
    if (!username || !password) {
      return;
    }
    setLoading(true);
    try {
      const { data: res } = await axios.post("auth/login", {
        username,
        password,
      });
      if (res.token) {
        window.localStorage.setItem("token", JSON.stringify(res.token));
      }
      dispatch(logIn(res));
    } catch (error) {
        setError(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.login}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>LOGIN</h1>
        <hr className={styles.hr} />
        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <label className={styles.label}>
              <input
                className={styles.input}
                placeholder="Username"
                {...register("username", loginOptions.username)}
              />
            </label>
            <p className={styles.error}>{errors.username?.message}</p>

            <label className={styles.label}>
              <input
                className={styles.input}
                placeholder="Password"
                type="password"
                {...register("password", loginOptions.password)}
              />
            </label>
            <p className={styles.error}>{errors.password?.message}</p>

            <Button className={styles.button} type="submit">
              Submit
            </Button>
          </form>
        )}
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.links}>
          <Link to="/lostpassword">Lost your password?</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </main>
  );
};
export default Login;
