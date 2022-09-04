import axios from '../../utils/axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withLayout } from '../../layout/Layout';
import { setPopularPosts, setPosts } from '../../redux/slices/post/postSlice';
import { Announcement, Post, Widget } from '../../components';

import styles from './Home.module.css';

const Home = () => {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const { posts, popularPosts } = useSelector((state) => state.post);

  const getAllPosts = async () => {
    const { data } = await axios.get('posts').catch((e) => console.log(e));
    dispatch(setPosts(data.posts));
    dispatch(setPopularPosts(data.popularPosts));
  };

  const getAllCategories = async () => {
    const { data } = await axios.get('categories').catch((e) => console.log(e));
    console.log(data);
  };

  useEffect(() => {
    getAllPosts();
  }, [dispatch]);

  useEffect(() => {
    getAllCategories();
  }, [categories]);

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
          <Widget title="The most popular posts" list={popularPosts} />
          <Widget title="Categories" list={categories} />
        </div>
      </div>
    </main>
  );
};
export default withLayout(Home);
