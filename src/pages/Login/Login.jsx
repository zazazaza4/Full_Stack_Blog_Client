import { useState } from 'react';

import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {};

  return (
    <main className={styles.login}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Blog</h1>
        <h2 className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          quisquam?
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="">
            <p className="">username</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="">
            <p className="">password</p>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};
export default Login;
