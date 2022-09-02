import axios from '../../utils/axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../components/post/Post';
import { withLayout } from '../../layout/Layout';

import styles from './Home.module.css';
import { setPopularPosts, setPosts } from '../../redux/slices/post/postSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  const getAllPosts = async () => {
    const { data } = await axios.get('posts').catch((e) => console.log(e));
    dispatch(setPosts(data.posts));
    dispatch(setPopularPosts(data.popuslarPosts));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.posts}>
          <ul className={styles.list}>
            {posts.map((post) => {
              return (
                <li key={post._id}>
                  <Post {...post} />
                </li>
              );
            })}
            {posts.map((post) => {
              return (
                <li key={post._id}>
                  <Post {...post} />
                </li>
              );
            })}
            {posts.map((post) => {
              return (
                <li key={post._id}>
                  <Post {...post} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.popularPost}>Popular</div>
      </div>
    </main>
  );
};
export default withLayout(Home);
