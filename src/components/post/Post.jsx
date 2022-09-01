import styles from './Post.module.css';

const Post = ({ title, date, img, comments }) => {
  return (
    <article className={styles.post}>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.metadata}>
          {date} | Comments({comments})
        </p>
      </div>
    </article>
  );
};
export default Post;
