import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import format from "date-format";

import styles from "./Post.module.css";
import { IPost } from "../../types/Post.interface";

const Post: FC<IPost> = ({ title, photo, category = "", createdAt, _id }) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(photo);

  const onError = () => setImgSrc("default.jpg");

  const trunc = (str: string, length: number) => {
    if (typeof str !== "string" || typeof length !== "number") {
      return "Error";
    }

    if (str.length > length) {
      return str.slice(0, length) + "...";
    }
    return str;
  };

  return (
    <motion.article
      animate={{ opacity: [0, 0.5, 1] }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={styles.post}
    >
      <Link to={`posts/${_id}`}>
        <div className={styles.img}>
          <img
            src={`${process.env.REACT_APP_API_URL}${
              imgSrc ? imgSrc : "default.jpg"
            }`}
            onError={onError}
            alt={title}
          />
        </div>
        <div className={styles.text}>
          <h4 className={styles.category}>{trunc(category, 50)}</h4>
          <h3 className={styles.title}>{trunc(title, 50)}</h3>
          <p className={styles.metadata}>
            {format(`ddft MM yyyy`, new Date(createdAt))}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};
export default Post;
