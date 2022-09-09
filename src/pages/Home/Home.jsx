import axios from '../../utils/axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withLayout } from '../../layout/Layout';
import { setPopularPosts, setPosts } from '../../redux/slices/post/postSlice';
import {
  Announcement,
  Button,
  Categories,
  Post,
  Widget,
} from '../../components';

import styles from './Home.module.css';

const Home = () => {
  const [category, setCategory] = useState('all');

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  const getAllPosts = async () => {
    const { data } = await axios.get('posts').catch((e) => console.log(e));
    dispatch(setPosts(data.posts));
    dispatch(setPopularPosts(data.popularPosts));
  };

  useEffect(() => {
    getAllPosts();
  }, [dispatch]);

  const selectCategory = (name) => {
    setCategory(() => name);
  };

  const renderPosts = (posts) => {
    const filtredPosts = posts.filter((post) => {
      if (category.toLowerCase() === 'all' || !post?.category) {
        return true;
      } else if (category.toLowerCase() === post.category.toLowerCase()) {
        return true;
      }
      return false;
    });

    return filtredPosts.map((post) => {
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
      <Announcement>HELLO! WELCOME TO OUR BLOG</Announcement>
      <Categories selectCategory={selectCategory} />
      <div className={styles.wrapper}>
        {postsEl.length === 0 ? (
          <Announcement>No Posts Yet</Announcement>
        ) : (
          <ul className={styles.list}>{postsEl}</ul>
        )}
      </div>
      <div className={styles.more}>
        <Button>More Posts</Button>
      </div>
    </main>
  );
};
export default withLayout(Home);
