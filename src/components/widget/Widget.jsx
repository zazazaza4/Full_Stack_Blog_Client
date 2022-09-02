import { Link } from 'react-router-dom';
import styles from './Widget.module.css';

const Widget = ({ title, icon, list }) => {
  return (
    <section className={styles.post}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <img src={icon} alt="" />
          <span>{title}</span>
        </h1>
        <ul className="">
          {list.map((item) => {
            return (
              <li className={styles.item}>
                <Link to={`posts/${item._id}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Widget;
