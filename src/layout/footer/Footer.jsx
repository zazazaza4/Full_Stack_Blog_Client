import { Link } from 'react-router-dom';

import icon from '../../assets/logo-white.webp';
import github from '../../assets/github.svg';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <Link to="/">
            <img src={icon} alt="" />
          </Link>
        </div>
        <div className={styles.center}>
          © 2022 Zazazaza4 Inc. All Right Reserved.
        </div>
        <div className={styles.github}>
          <a href="https://github.com/zazazaza4/Full_Stack_Blog_Client">
            <img src={github} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
