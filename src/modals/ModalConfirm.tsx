import { FC } from "react";

import { Button } from "../components/index";
import { withModal } from "./Modal";

import { ModalConfirmProps } from "./Modal.props";

import styles from "./Modal.module.css";

const ModalConfirm: FC<ModalConfirmProps> = ({
  handleClose,
  children,
  onConfirm,
}) => {
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
