import axios from '../../utils/axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../components/post/Post';
import { withLayout } from '../../layout/Layout';

import styles from './Home.module.css';
import { setPopularPosts, setPosts } from '../../redux/slices/post/postSlice';
import Widget from '../../components/widget/Widget';
import Announcement from '../../components/announcement/Announcement';

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

  const renderPosts = (posts) => {
    if (!posts || posts.length === 0) {
      return <h2 className={styles.title}>Empty</h2>;
    }

    return posts.map((post) => {
      return (
        <li key={post._id}>
          <Post {...post} />
        </li>
      );
    });
  };

  const postsEl = renderPosts(posts);
  return (
    <main className={styles.main}>
      <Announcement>Hello, It is the best blog in the world</Announcement>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <ul className={styles.list}>{postsEl}</ul>
        </div>
        <div className={styles.right}>
          <Widget title="The most popular" list={popularPosts} />
        </div>
      </div>
    </main>
  );
};
export default withLayout(Home);
