import { Link, useNavigate } from 'react-router-dom';
import icon from '../../assets/logo.png';
import notificationIcon from '../../assets/bell.svg';
import addIcon from '../../assets/add.svg';
import infoIcon from '../../assets/info.svg';
import accountIcon from '../../assets/account.svg';

import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div
          className={styles.icon}
          onClick={() => {
            navigate('/');
          }}
        >
          <img src={icon} alt="" />
        </div>
        <nav className="">
          <ul className={styles.menu}>
            <li className={styles.item}>
              <div className={styles.item__icon}>
                <img src={notificationIcon} alt="" />
              </div>
            </li>
            <li className={styles.item}>
              <Link to="/posts/new">
                <div className={styles.item__icon}>
                  <img src={addIcon} alt="" />
                </div>
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/about">
                <div className={styles.item__icon}>
                  <img src={infoIcon} alt="" />
                </div>
              </Link>
            </li>
            <li className={styles.item}>
              <div className={styles.item__icon}>
                <img src={accountIcon} alt="" />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
