import { withLayout } from '../../layout/Layout';

import styles from './About.module.css';

const About = () => {
  return (
    <main className={styles.about}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Blog(MERN Stack)</h2>
        <div className={styles.body}>
          <div className={styles.content}>
            <h3 className={styles.subtitle}>Client</h3>
            <ul className={styles.list}>
              <li className={styles.item}>React</li>
              <li className={styles.item}>CSS modules</li>
              <li className={styles.item}>React Router</li>
              <li className={styles.item}>Redux Toolkit</li>
              <li className={styles.item}>axios</li>
            </ul>
          </div>
          <div className={styles.content}>
            <h3 className={styles.subtitle}>Server</h3>
            <ul className={styles.list}>
              <li className={styles.item}>Express.js</li>
              <li className={styles.item}>MongoDB</li>
              <li className={styles.item}>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
export default withLayout(About);
