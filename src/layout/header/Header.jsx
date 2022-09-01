import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className="d">Icon</div>
        <nav className="">
          <ul className={styles.menu}>
            <li className="item">Notification</li>
            <li className="item">Blog</li>
            <li className="item">About</li>
            <li className="item">LogIn</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
