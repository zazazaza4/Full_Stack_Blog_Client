import axios from '../../utils/axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../components/post/Post';
import { withLayout } from '../../layout/Layout';

import styles from './Home.module.css';
import { setPopularPosts, setPosts } from '../../redux/slices/post/postSlice';
import Widget from '../../components/widget/Widget';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, popularPosts } = useSelector((state) => state.post);

  const getAllPosts = async () => {
    const { data } = await axios.get('posts').catch((e) => console.log(e));
    console.log(data);
    dispatch(setPosts(data.posts));
    dispatch(setPopularPosts(data.popularPosts));
  };

  useEffect(() => {
    getAllPosts();
  }, [dispatch]);

  if (posts && posts.length === 0) {
    return (
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Empty</h2>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <ul className={styles.list}>
            {posts &&
              posts.map((post) => {
                return (
                  <li key={post._id}>
                    <Post {...post} />
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles.right}>
          <Widget title="The most popular" icon="" list={popularPosts} />
        </div>
      </div>
    </main>
  );
};
export default withLayout(Home);
