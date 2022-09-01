import styles from './Widget.module.css';

const Widget = ({ name, img, total, url }) => {
  return (
    <section className={styles.post}>
      <div className={styles.wrapper}>
        <a href={url} className={styles.link}>
          <div className={styles.img}>
            <img src={img} alt={name} />
          </div>
          <h4 className={styles.title}>{total}</h4>
          <p className={styles.name}></p>
        </a>
      </div>
    </section>
  );
};
export default Widget;
