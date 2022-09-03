import styles from './Announcement.module.css';

const Announcement = ({ children }) => {
  return (
    <section className={styles.announcement}>
      <h1 className={styles.title}>{children}</h1>
    </section>
  );
};
export default Announcement;
