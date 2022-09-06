import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import format from 'date-format';
import { withLayout } from '../../layout/Layout';
import axios from '../../utils/axios';
import ReactMarkdown from 'react-markdown';

import styles from './SinglePost.module.css';
import { Button } from '../../components';

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

  const {
    title,
    username,
    createdAt,
    text,
    views,
    comments,
    photo,
    categories,
    author,
  } = post;
  return (
    <main className={styles.single}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.img}>
            <img src={`${process.env.REACT_APP_API_URL}${photo}`} alt="" />
          </div>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.meta}>
            <p className={styles.author}>
              <Link to={`/users/${author}`}>Author: {username}</Link>
            </p>
            <p className={styles.metadata}>
              {format('dd - MM - yyyy', new Date(createdAt))} | Views({views})
            </p>
          </div>

          <div className={styles.body}>
            <ReactMarkdown children={text} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.comment}>
            <div className={styles.comments}>
              <div className={styles.container}>
                <p>fssf sddfs</p>
                <p>fssf sddfs</p>
                <p>fssf sddfs</p>
                <p>fssf sddfs</p>
                <p>fssf sddfs</p>
              </div>
            </div>
            <div className={styles.add}>
              <div className={styles.textarea}>
                <textarea type="text" placeholder="Write a comment"></textarea>
              </div>
              <Button>Add Comment</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default withLayout(SinglePost);
