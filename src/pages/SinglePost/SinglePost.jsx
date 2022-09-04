import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import format from 'date-format';
import { withLayout } from '../../layout/Layout';
import axios from '../../utils/axios';
import ReactMarkdown from 'react-markdown';

import styles from './SinglePost.module.css';
import { Error } from '../../components';

const SinglePost = () => {
  const [post, setPost] = useState(null);

  const params = useParams();

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setPost(data);
  }, [params.id]);

  useEffect(() => {
    fetchPost();
  }, [params.id]);

  if (!post) {
    return;
  }

  const { title, createdAt, text, views, comments, photo, categories, author } =
    post;
  return (
    <main className={styles.single}>
      <div className={styles.navigate}>
        <button className={styles.button}></button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img src={`http://localhost:5000/${photo}`} alt="" />
        </div>

        <div className={styles.meta}>
          <p className={styles.author}>
            <Link to={`users/${author}`}>username</Link>
          </p>
          <p className={styles.metadata}>
            {format('dd/MM/yyyy', new Date(createdAt))} | Views({views})
          </p>
        </div>

        <h2 className={styles.title}>{title}</h2>

        <div className={styles.body}>
          <ReactMarkdown children={text} />
        </div>

        <div className={styles.comments}></div>
      </div>
    </main>
  );
};
export default withLayout(SinglePost);
