import { FC } from "react";
import { motion } from "framer-motion";

import { AnnouncementProps } from "./Announcement.props";

import styles from "./Announcement.module.css";

const Announcement: FC<AnnouncementProps> = ({ children }) => {
  return (
    <motion.section
      animate={{ opacity: [0, 0.5, 1], x: [-100, 0] }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={styles.announcement}
    >
      <div className={styles.container}>
        <div className={styles.row}>
          <h1 className={styles.title}>{children}</h1>
        </div>
      </div>
    </motion.section>
  );
};
export default Announcement;
