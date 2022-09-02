import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className="d">Icon</div>
        <nav className="">
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link to="/notification">Notification</Link>
            </li>
            <li className={styles.item}>
              <Link to="/posts/new">Add a post</Link>
            </li>
            <li className={styles.item}>
              <Link to="/about">About</Link>
            </li>
            <li className={styles.item}>
              <Link to="/log-out">Log Out</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
