import { withModal } from './Modal';

import styles from './Modal.module.css';

const Search = ({ handleClose }) => {
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
