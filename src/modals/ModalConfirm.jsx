import { Button } from '../components/index';
import { withModal } from './Modal';

import styles from './Modal.module.css';

const ModalConfirm = ({ handleClose, children, onConfirm }) => {
  return (
    <section className={styles.main}>
      <span tabIndex={0} className={styles.close} onClick={handleClose}>
        &times;
      </span>
      <div className={styles.body}>{children}</div>
      <div className={styles.buttons}>
        <Button type="button" onClick={onConfirm}>
          Ok
        </Button>
        <Button type="button" onClick={handleClose}>
          Close
        </Button>
      </div>
    </section>
  );
};

export default withModal(ModalConfirm);
