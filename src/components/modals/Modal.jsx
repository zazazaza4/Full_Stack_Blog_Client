import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Button from '../button/Button';
import styles from './Modal.module.css';

const Modal = ({ handleClose, show, children, onConfirm }) => {
  const ref = useRef(null);
  const showHideClassName = show
    ? `${styles.modal} ${styles.block}`
    : `${styles.modal} ${styles.none}`;

  const controls = useAnimationControls();

  useEffect(() => {
    ref.current.focus();
    controls.start({ scale: [0, 1], transition: { duration: 0.5 } });
  }, []);

  return (
    <motion.div
      tabIndex={-1}
      ref={ref}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      }}
      animate={controls}
      className={showHideClassName}
    >
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
    </motion.div>
  );
};

export default Modal;
