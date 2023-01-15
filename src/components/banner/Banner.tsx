import { FC } from 'react';
import { motion } from 'framer-motion';

import { BannerProps } from './Banner.props';

import styles from './Banner.module.css';

const Banner: FC<BannerProps> = ({ children }) => {
  return (
    <motion.div
      animate={{ scale: [0, 1] }}
      transition={{ ease: 'easeOut', duration: 1 }}
      className={styles.banner}
    >
      <div className={styles.text}>
        <h2 className={styles.title}>{children}</h2>
      </div>
    </motion.div>
  );
};
export default Banner;
