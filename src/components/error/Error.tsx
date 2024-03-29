import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import styles from './Error.module.css';

const Error: FC = () => {
  const navigate = useNavigate();

  const onClick = (): void => {
    navigate('/');
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.error}>
        <div>
          <h2 className={styles.title404}>404</h2>
          <h3 className={styles.title}>Oops, page not found</h3>
          <p className={styles.text}>
            Sorry, page you requested does not exist or was deleted
          </p>
          <Button onClick={onClick}>Return to home</Button>
        </div>
      </div>
    </main>
  );
};
export default Error;
