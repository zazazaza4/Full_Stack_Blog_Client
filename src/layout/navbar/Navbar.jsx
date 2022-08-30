import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <a className={styles.link}> 
              <span>HOME</span>
            </a>
          </li>
          <li className={styles.menu__item}>ABOUT</li>
          <li className={styles.menu__item}>HOME</li>
          <li className={styles.menu__item}>HOME</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
