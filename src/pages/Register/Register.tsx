import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/slices/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import iconUpload from "../../assets/upload.png";

import styles from "./Register.module.css";
import { useForm } from "react-hook-form";
import { regExpEmail } from "../../utils/consts";
import { Button, Spinner } from "../../components";

const registerOptions = {
  username: {
    required: "Username is required",
    minLength: {
      value: 4,
      message: "Username must have at least 4 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: regExpEmail,
      message: "It is not an email",
    },
  },
  image: {
    required: "Image is required",
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
  email: string;
  image?: string;
}

const Register = () => {
  const [image, setImage] = useState<string | Blob>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const dispatch = useDispatch();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    const { username, password, email } = data;
    if (!username || !password || !email) {
      return;
    }
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      formData.append("email", email);
      formData.append("image", image);

      const { data: res } = await axios.post("auth/register", formData);

      if (res.token) {
        window.localStorage.setItem("token", JSON.stringify(res.token));
      }

      dispatch(logIn(res));
      setImage("");
      navigate("/login");
    } catch (error) {
      setError(error.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.register}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>REGISTER</h1>
        <hr className={styles.hr} />
        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <p className={styles.error}>{errors.image?.message}</p>

            <div className={styles.attach}>
              <label className={styles.file}>
                <img src={iconUpload} alt="" />
                Attach an image
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  className={styles.hidden}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (e && e.target && e.target.files) {
                      setImage(e.target.files[0]);
                    }
                  }}
                />
              </label>
              <div className={styles.img}>
                {image && (
                  <img src={URL.createObjectURL(image as Blob)} alt={'avatar profile'} />
                )}
              </div>
            </div>

            <label className={styles.label}>
              <input
                className={styles.input}
                placeholder="email@example.com"
                type="email"
                {...register("email", registerOptions.email)}
              />
            </label>
            <p className={styles.error}>{errors.email?.message}</p>

            <label className={styles.label}>
              <input
                className={styles.input}
                placeholder="Username"
                {...register("username", registerOptions.username)}
              />
            </label>
            <p className={styles.error}>{errors.username?.message}</p>

            <label className={styles.label}>
              <input
                className={styles.input}
                placeholder="Password"
                type="password"
                {...register("password", registerOptions.password)}
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
          <Link to="/login">Login</Link>
        </div>
      </div>
    </main>
  );
};
export default Register;
