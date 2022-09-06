import axios from '../../utils/axios';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/slices/auth/authSlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import icon from '../../assets/logo.png';

import styles from './Register.module.css';
import { useForm } from 'react-hook-form';
import { regExpEmail } from '../../utils/consts';
import { Button, Spinner } from '../../components';

const Register = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    const { username, password, email } = data;
    if (!username || !password || !email) {
      return;
    }
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('email', email);
      formData.append('image', image);

      const { data: res } = await axios.post('auth/register', formData);

      if (res.token) {
        window.localStorage.setItem('token', JSON.stringify(res.token));
      }

      dispatch(logIn(res));
      setImage('');
      navigate('/login');
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
    email: {
      required: 'Email is required',
      pattern: {
        value: regExpEmail,
        message: 'It is not an email',
      },
    },
    image: {
      required: 'Image is required',
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
        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <p className={styles.error}>{errors.image?.message}</p>

            <div
              className={`${styles.picture} ${
                errors.image?.message ? styles.error__img : ''
              }`}
            >
              <label className={styles.label}>
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  name="image"
                  {...register('image', registerOptions.image)}
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
                  placeholder="email@example.com"
                  type="email"
                  name="email"
                  {...register('email', registerOptions.email)}
                />
              </label>
              <p className={styles.error}>{errors.email?.message}</p>
            </div>
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
          <Link to="/login">Login</Link>
        </div>
      </div>
    </main>
  );
};
export default Register;
