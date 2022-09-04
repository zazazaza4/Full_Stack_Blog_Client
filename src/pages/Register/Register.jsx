import axios from '../../utils/axios';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/slices/auth/authSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import icon from '../../assets/logo.png';

import styles from './Register.module.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('email', email);
      formData.append('image', image);

      const { data } = await axios.post('auth/register', formData);

      if (data.token) {
        window.localStorage.setItem('token', JSON.stringify(data.token));
      }

      dispatch(logIn(data));

      setUsername('');
      setPassword('');
      setImage('');
      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.register}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.icon}>
          <img src={icon} alt="" />
        </Link>
        <h1 className={styles.title}>REGISTER</h1>
        <h2 className={styles.subtitle}>
          For users who want to add their posts
        </h2>
        <hr className={styles.hr} />
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <div className={styles.picture}>
            <label className={styles.label}>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                className={styles.hidden}
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
              {image && (
                <img src={URL.createObjectURL(image)} alt={image.name} />
              )}
            </label>
          </div>
          <div className={styles.input}>
            <label className={styles.label}>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
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
          <Link to="/login">Login</Link>
        </div>
      </div>
    </main>
  );
};
export default Register;
