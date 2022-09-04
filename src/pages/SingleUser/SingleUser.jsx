import { useCallback, useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { withLayout } from '../../layout/Layout';

import styles from './SingleUser.module.css';
import { Link, useParams } from 'react-router-dom';
import { Error } from '../../components';

const SingleUser = () => {
  const [user, setUser] = useState(null);
  const params = useParams();

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setUser(data);
  }, [params.id]);

  useEffect(() => {
    fetchPost();
  }, [params.id]);

  return (
    <main className={styles.profile}>
      <div className={styles.wrapper}>
        <div className={styles.user}>
          <div className={styles.img}>
            <img src="" alt="PHOTO" />
          </div>
          <h2 className={styles.username}>Username</h2>
        </div>
        <h2 className={styles.email}>Email</h2>
        <h2 className={styles.password}>ChangePassword</h2>
        Posts
      </div>
    </main>
  );
};

export default withLayout(SingleUser);
