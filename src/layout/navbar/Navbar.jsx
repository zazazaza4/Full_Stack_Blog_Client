import { NavLink } from 'react-router-dom';
import { navData } from '../../utils/data';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {navData.map(({ title, route }) => {
            return (
              <li key={title} className={styles.menu__item}>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? 'var(--primary)' : '',
                    };
                  }}
                  to={route}
                  className={styles.link}
                >
                  <span>{title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
