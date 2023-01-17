import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, FC,ComponentType } from "react";

import { ModalProps, WithModalProps } from './Modal.props';

import styles from "./Modal.module.css";

const Modal: FC<ModalProps> = ({ handleClose, show, children }) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const showHideClassName = show
    ? `${styles.modal} ${styles.block}`
    : `${styles.modal} ${styles.none}`;

  const controls = useAnimationControls();

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
    controls.start({ scale: [0, 1], transition: { duration: 0.5 } });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      tabIndex={-1}
      ref={ref}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
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

export function withModal<T extends WithModalProps>(Component: ComponentType<T>) {
  return function withLayoutComponent(props: T) {
    return (
      <Modal {...props}>
        <Component {...props} />
      </Modal>
    );
  };
};
