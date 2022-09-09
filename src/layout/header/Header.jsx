import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import icon from '../../assets/logo.webp';
import logout from '../../assets/logout.svg';
import search from '../../assets/search.svg';

import styles from './Header.module.css';

const Header = () => {
  const [sticky, setSticky] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.selected : ''}`
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                  to="/posts/new"
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.selected : ''}`
                  }
                >
                  CREATE
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.selected : ''}`
                  }
                >
                  CONTACT
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.selected : ''}`
                  }
                >
                  ABOUT
                </NavLink>
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
              <img src={logout} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
