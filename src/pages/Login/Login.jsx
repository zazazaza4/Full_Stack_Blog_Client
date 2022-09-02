import axios from '../../utils/axios';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/slices/auth/authSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import icon from '../../assets/logo.png';

import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post('auth/login', {
        username,
        password,
      });

      if (data.token) {
        window.localStorage.setItem('token', JSON.stringify(data.token));
      }

      dispatch(logIn(data));

      setUsername('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
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
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <div className={styles.input}>
            <label className={styles.label}>
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.input}>
            <label className={styles.label}>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button
            className={styles.button}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <div className={styles.links}>
          <Link to="/lostpassword">Lost your password?</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </main>
  );
};
export default Login;
