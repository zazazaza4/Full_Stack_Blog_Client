import styles from './Comment.module.css';

const Comment = ({comment}) => {
  return (
    <div className={styles.comment}>
      <div className={styles.img}>
        <img src={``} alt="" className="" />
      </div>
      <div className={styles.text}>
        <div className={styles.date}></div>
        <h6 className={styles.title}></h6>
        <p></p>
      </div>
    </div>
  );
};
export default Comment;
