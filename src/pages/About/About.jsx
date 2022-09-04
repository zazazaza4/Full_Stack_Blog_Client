import { withLayout } from '../../layout/Layout';

import styles from './About.module.css';

const About = () => {
  return (
    <main className={styles.about}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>MERN Stack</h2>
        <div className={styles.body}>
          <div className="d">
            <h3>Client</h3>
            <ul className={styles.list}>
              <ul className={styles.item}>React</ul>
              <ul className={styles.item}>CSS modules</ul>
              <ul className={styles.item}>React Router</ul>
              <ul className={styles.item}>Redux Toolkit</ul>
              <ul className={styles.item}>axios</ul>
            </ul>
          </div>
          <div className="d">
            <h3>Server</h3>
            <ul className={styles.list}>
              <ul className={styles.item}>Express.js</ul>
              <ul className={styles.item}>MongoDB</ul>
              <ul className={styles.item}>Node.js</ul>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
export default withLayout(About);
