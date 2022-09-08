import axios from '../../utils/axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withLayout } from '../../layout/Layout';
import { setPopularPosts, setPosts } from '../../redux/slices/post/postSlice';
import { Announcement, Categories, Post, Widget } from '../../components';

import styles from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, popularPosts } = useSelector((state) => state.post);

  const getAllPosts = async () => {
    const { data } = await axios.get('posts').catch((e) => console.log(e));
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
        <li className={styles.item} key={post._id}>
          <Post {...post} />
        </li>
      );
    });
  };

  const postsEl = renderPosts(posts);
  return (
    <main className={styles.main}>
      <Announcement>
        HELLO! WELCOME TO SUNZINE PHOTO GALLERY WITH CREATIVE & UNIQUE STYLE
      </Announcement>
      <Categories />
      <div className={styles.wrapper}>
        <ul className={styles.list}>{postsEl}</ul>
      </div>
    </main>
  );
};
export default withLayout(Home);
