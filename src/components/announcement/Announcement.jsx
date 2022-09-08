import { motion } from 'framer-motion';

import styles from './Announcement.module.css';

const Announcement = ({ children }) => {
  return (
    <motion.section
      animate={{ opacity: [0, 0.5, 1], x: [-100, 0] }}
      transition={{ ease: 'easeOut', duration: 1 }}
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
