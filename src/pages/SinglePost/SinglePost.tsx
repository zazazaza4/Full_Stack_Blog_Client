import { FC, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import format from "date-format";
import {
  Announcement,
  Button,
  Comment,
  Spinner,
  Widget,
} from "../../components";
import { useSelector } from "react-redux";
import iconView from "../../assets/view.svg";
import { withLayout } from "../../layout/Layout";
import axios from "../../utils/axios";
import ReactMarkdown from "react-markdown";

import { RootState } from "../../redux/store";
import { IPost } from "../../types/Post.interface";

import styles from "./SinglePost.module.css";

const SinglePost: FC = () => {
  const [post, setPost] = useState<null | IPost>(null);

  const { popularPosts } = useSelector((state: RootState) => state.post);

  const params = useParams();

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setPost(data);
  }, [params.id]);

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (!post) {
    return (
      <div className={styles.spinner}>
        <Spinner />
      </div>
    );
  }

  const {
    title,
    username,
    createdAt,
    text,
    views,
    comments,
    photo,
    category,
    author,
  } = post;
  return (
    <main className={styles.single}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <motion.div
            animate={{ opacity: [0, 0.5, 1], scale: [0, 1] }}
            transition={{ ease: "easeOut", duration: 1 }}
            className={styles.left}
          >
            <article className={styles.article}>
              <div className={styles.category}>{category}</div>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.date}>
                {format(`ddft MM yyyy`, new Date(createdAt))}
              </div>
              <div className={styles.img}>
                <img
                  src={`${process.env.REACT_APP_API_URL}${
                    photo || "default.jpg"
                  }`}
                  alt=""
                  className=""
                />
              </div>
              <ReactMarkdown children={text} />
              <footer className={styles.footer}>
                <div className={styles.row_meta}>
                  <p className={styles.author}>
                    Author:{" "}
                    <Link className={styles.link} to={`/?userId=${author}`}>
                      {username}
                    </Link>
                  </p>
                  <p className={styles.views}>
                    <img src={iconView} alt="Views:" /> {views}
                  </p>
                </div>
              </footer>
            </article>
            <div className={styles.comments}>
              <h4 className={styles.h4}>COMMENTS</h4>
              <ul className={styles.list_commnets}>
                {comments?.length > 0 ? (
                  comments?.map((comment) => {
                    return <Comment comment={comment} />;
                  })
                ) : (
                  <Announcement>No Comments yet</Announcement>
                )}
              </ul>
            </div>
            <div className={styles.comment__leave}>
              <h4 className={styles.h4}>LEAVE A COMMENT</h4>
              <form>
                <textarea
                  placeholder="Messages"
                  className={styles.textarea}
                ></textarea>
                <Button className={styles.button}>SEND MESSAGE</Button>
              </form>
            </div>
          </motion.div>
          <div className={styles.right}>
            <Widget title="POPULAR POSTS" list={popularPosts} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default withLayout(SinglePost);
