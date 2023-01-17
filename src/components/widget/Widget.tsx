import { FC } from 'react';
import { Link } from 'react-router-dom';
import format from 'date-format';

import { WidgetProps } from './Widget.props';

import styles from './Widget.module.css';

const Widget: FC<WidgetProps> = ({ title, list }) => {
  return (
    <section className={styles.widget}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.list}>
          {list?.map((item) => {
            return (
              <li key={item._id} className={styles.item}>
                <Link className={styles.link} to={`posts/${item._id}`}>
                  <div className={styles.category}>{item.category}</div>
                  <h5 className={styles.h5}>{item.title}</h5>
                  <div className={styles.date}>
                    {format(`ddft MM yyyy`, new Date(item.createdAt))}
                  </div>
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
