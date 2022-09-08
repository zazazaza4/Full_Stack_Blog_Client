import styles from './Announcement.module.css';

const Announcement = ({ children }) => {
  return (
    <section className={styles.announcement}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h1 className={styles.title}>{children}</h1>
        </div>
      </div>
    </section>
  );
};
export default Announcement;
