import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import Button from '../button/Button';
import styles from './Modal.module.css';

const Modal = ({ handleClose, show, children, onConfirm }) => {
  const showHideClassName = show
    ? `${styles.modal} ${styles.block}`
    : `${styles.modal} ${styles.none}`;

  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({ scale: [0, 1], transition: { duration: 0.5 } });
  }, []);

  return (
    <motion.div animate={controls} className={showHideClassName}>
      <section className={styles.main}>
        <span class={styles.close} onClick={handleClose}>
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
    </motion.div>
  );
};

export default Modal;
