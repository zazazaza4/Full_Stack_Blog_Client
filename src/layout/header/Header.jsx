import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import icon from '../../assets/logo.webp';
import account from '../../assets/account.svg';
import search from '../../assets/search.svg';

import styles from './Header.module.css';

const Header = () => {
  const [sticky, setSticky] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    console.log('hello');
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = !!(scrollTop >= 150);
    setSticky(stickyClass);
  };

  return (
    <header className={`${styles.header} ${sticky && styles.sticky}`}>
      <div className={styles.wrapper}>
        <div
          className={styles.icon}
          onClick={() => {
            navigate('/');
          }}
        >
          <img src={icon} alt="SUNZINE" />
        </div>
        <div className={styles.right}>
          <nav className={styles.menu}>
            <ul>
              <li className={styles.item}>
                <Link to="/" className={styles.link}>
                  HOME
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="/posts/new" className={styles.link}>
                  CREATE
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="/contactd" className={styles.link}>
                  CONTACT
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="/about" className={styles.link}>
                  ABOUT
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.switches}>
            <div className={styles.switches_icon}>
              <img src={search} alt="" />
            </div>
            <div className={styles.hamburger}>
              <span className={`${styles.line} ${styles.line1}`}></span>
              <span className={`${styles.line} ${styles.line2}`}></span>
              <span className={`${styles.line} ${styles.line3}`}></span>
            </div>
            <div className={styles.switches_icon}>
              <img src={account} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
