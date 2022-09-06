import { Link } from 'react-router-dom';
import format from 'date-format';
import styles from './Post.module.css';

const Post = ({ title, text, photo, categories, createdAt, _id, views }) => {
  const trunc = (str, length) => {
    if (typeof str !== 'string' && typeof length !== 'number') {
      return 'Error';
    }

    if (str.length > length) {
      return str.slice(0, length) + '...';
    }
    return str;
  };

  return (
    <article className={styles.post}>
      <Link to={`posts/${_id}`}>
        <div className={styles.img}>
          <img
            src={`${process.env.REACT_APP_API_URL}${photo || 'default.jpg'}`}
            alt={title}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{trunc(title, 50)}</h3>
          <p className={styles.disc}>{trunc(text, 226)}</p>
          <p className={styles.metadata}>
            {format('dd/MM/yyyy', new Date(createdAt))} | Views({views})
          </p>
        </div>
      </Link>
    </article>
  );
};
export default Post;
