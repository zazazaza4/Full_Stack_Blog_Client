import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withLayout } from '../../layout/Layout';
import { setPopularPosts, setPosts } from '../../redux/slices/post/postSlice';
import {
  Announcement,
  Button,
  Categories,
  Post,
  PostSceleton,
} from '../../components';

import styles from './Home.module.css';

const Home = () => {
  const [page, setPage] = useState(1);
  const [postsEnded, setPostsEnded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  const navigate = useNavigate();

  const getPosts = async (oldPosts) => {
    setLoading(true);
    const params = {};
    if (category && category !== 'ALL') {
      params['category'] = category;
    }

    try {
      const { data } = await axios
        .get('posts', {
          params,
          page,
          limit: 1,
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });

      dispatch(setPosts([...oldPosts, ...data.posts]));
      dispatch(setPopularPosts(data.popularPosts));
      onPostsLoaded(data.posts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onPostsLoaded = (newPosts) => {
    let ended = false;
    if (newPosts.length < 9) {
      ended = true;
    }

    setPostsEnded(() => ended);
    setPage((page) => page + 1);
  };

  useEffect(() => {
    const oldPosts = [];
    getPosts(oldPosts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, category]);

  const selectCategory = (name) => {
    setCategory(() => name);
    navigate(`?category=${name}`);
  };

  const renderPosts = (posts) => {
    if (true) {
      return [...Array(9)].map((_, index) => {
        return (
          <li key={index} className={styles.item}>
            <PostSceleton />
          </li>
        );
      });
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
        <Button
          disabled={loading}
          style={{ display: postsEnded ? 'none' : 'inline-block' }}
          onClick={() => getPosts(posts)}
          className={`${loading ? styles.button : ''}`}
        >
          {' '}
          More Posts
        </Button>
      </div>
    </main>
  );
};
export default withLayout(Home);
