import {FC} from 'react';
import { withModal } from './Modal';

import { SearchProps } from './Modal.props';

import styles from './Modal.module.css';

const Search: FC<SearchProps> = ({ handleClose }) => {
  return (
    <div className={`${styles.modal} ${styles.search}`}>
      <div className={styles.wrapper}>
        <span tabIndex={0} className={styles.close} onClick={handleClose}>
          &times;
        </span>
        <div className={styles.wrapper}>
          <form className={styles.form}>
            <input type="text" placeholder="Search here...." />
          </form>
        </div>
      </div>
    </div>
  );
};
export default withModal(Search);
