import { useEffect, useState, FC, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setPopularPosts, setPosts } from "../../redux/slices/post/postSlice";

import { withLayout } from "../../layout/Layout";
import {
  Announcement,
  Button,
  Categories,
  Post,
  PostSceleton,
} from "../../components";

import axios from "../../utils/axios";

import styles from "./Home.module.css";
import { IPost } from "../../types/Post.interface";
import { RootState } from "../../redux/store";

interface GetPostsResponse {
  posts: IPost[];
  popularPosts: IPost[];
}

const Home: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [postsEnded, setPostsEnded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("ALL");

  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.post);

  const navigate = useNavigate();

  const getPosts = async (oldPosts: IPost[]) => {
    setLoading(true);
    let categoryParams = category;
    if (categoryParams === "ALL") {
      categoryParams = "";
    }

    try {
      const { data } = await axios.get<GetPostsResponse>("posts", {
        params: {
          category: categoryParams,
          page,
          limit: 1,
        },
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

  const onPostsLoaded = (newPosts: IPost[]) => {
    let ended = false;
    if (newPosts.length < 9) {
      ended = true;
    }

    setPostsEnded(() => ended);
    setPage((page) => page + 1);
  };

  useEffect(() => {
    const oldPosts: IPost[] = [];
    getPosts(oldPosts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, category]);

  const selectCategory = (name: string) => {
    if (name) {
      setCategory(name);
      navigate(`?category=${name}`);
    }
  };
  const renderPosts = useCallback(
    (posts: IPost[]) => {
      if (loading) {
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
    },
    [loading]
  );

  const postsEl = useMemo(() => renderPosts(posts), [posts, renderPosts]);
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
          style={{ display: postsEnded ? "none" : "inline-block" }}
          onClick={() => getPosts(posts)}
          className={`${loading ? styles.button : ""}`}
        >
          More Posts
        </Button>
      </div>
    </main>
  );
};
export default withLayout(Home);
