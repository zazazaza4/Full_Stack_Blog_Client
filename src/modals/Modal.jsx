import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react';

import styles from './Modal.module.css';

const Modal = ({ handleClose, show, children }) => {
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
      {children}
    </motion.div>
  );
};

export const withModal = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <Modal {...props}>
        <Component {...props} />
      </Modal>
    );
  };
};
