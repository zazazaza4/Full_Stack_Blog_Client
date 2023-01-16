import { FC } from 'react';

import { CommentProps } from './Comment.props';

import styles from './Comment.module.css';

const Comment:FC<CommentProps> = ({comment}) => {
  return (
    <div className={styles.comment}>
      <div className={styles.img}>
        <img src={``} alt="" className="" />
      </div>
      <div className={styles.text}>
        <div className={styles.date}>Something</div>
        <h6 className={styles.title}>Something</h6>
        <p>Something</p>
      </div>
    </div>
  );
};
export default Comment;
