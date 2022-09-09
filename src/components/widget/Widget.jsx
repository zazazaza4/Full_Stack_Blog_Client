import { Link } from 'react-router-dom';
import styles from './Widget.module.css';

const Widget = ({ title, list }) => {
  return (
    <section className={styles.widget}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.list}>
          {list?.map((item) => {
            return (
              <li key={item._id} className={styles.item}>
                <Link className={styles.link} to={`posts/${item._id}`}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Widget;
