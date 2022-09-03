import { Link } from 'react-router-dom';
import format from 'date-format';
import styles from './Post.module.css';

const Post = ({
  title,
  text,
  photo = 'default.jpg',
  categories,
  createdAt,
  _id,
  views,
}) => {
  return (
    <article className={styles.post}>
      <Link to={`posts/${_id}`}>
        <div className={styles.img}>
          <img src={`http://localhost:5000/default.jpg`} alt={title} />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.disc}>{text}</p>
          <p className={styles.metadata}>
            {format('dd/MM/yyyy', new Date(createdAt))} | Views({views})
          </p>
        </div>
      </Link>
    </article>
  );
};
export default Post;
