import axios from '../../utils/axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import styles from './Login.module.css';
import { logIn } from '../../redux/slices/auth/authSlice';

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
        <h1 className={styles.title}>Blog</h1>
        <h2 className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          quisquam?
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.input}>
            <p className="">username</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <p className="">password</p>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className={styles.button}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};
export default Login;
