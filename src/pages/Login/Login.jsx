import axios from '../../utils/axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, Spinner } from '../../components';
import { logIn } from '../../redux/slices/auth/authSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import icon from '../../assets/logo.webp';

import styles from './Login.module.css';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setError(null);
    const { username, password } = data;
    if (!username || !password) {
      return;
    }
    setLoading(true);
    try {
      const { data: res } = await axios.post('auth/login', {
        username,
        password,
      });
      if (res.token) {
        window.localStorage.setItem('token', JSON.stringify(res.token));
      }
      dispatch(logIn(res));
    } catch (error) {
      setError(error.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  const registerOptions = {
    username: {
      required: 'Username is required',
      minLength: {
        value: 4,
        message: 'Username must have at least 4 characters',
      },
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
    },
  };

  return (
    <main className={styles.login}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.icon}>
          <img src={icon} alt="" />
        </Link>
        <h1 className={styles.title}>LOGIN</h1>
        <h2 className={styles.subtitle}>
          For users who want to add their posts
        </h2>
        <hr className={styles.hr} />
        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.input}>
              <label className={styles.label}>
                Username
                <input
                  placeholder="Bill"
                  name="username"
                  {...register('username', registerOptions.username)}
                />
              </label>
              <p className={styles.error}>{errors.username?.message}</p>
            </div>
            <div className={styles.input}>
              <label className={styles.label}>
                Password
                <input
                  placeholder="Password"
                  name="password"
                  type="password"
                  {...register('password', registerOptions.password)}
                />
              </label>
              <p className={styles.error}>{errors.password?.message}</p>
            </div>
            <Button type="submit">Submit</Button>
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
