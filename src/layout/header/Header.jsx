import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import icon from '../../assets/logo.webp';
import logout from '../../assets/logout.svg';
import search from '../../assets/search.svg';
import { logOut } from '../../redux/slices/auth/authSlice';

import styles from './Header.module.css';
import Search from '../../modals/Search';
import ModalConfirm from '../../modals/ModalConfirm';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [sticky, setSticky] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 840) {
      document.body.style.overflow = !isOpen ? 'visible' : 'hidden';
    }
  }, [isOpen]);

  const openMenu = () => {
    if (window.innerWidth < 840) {
      document.body.style.overflow = isOpen ? 'visible' : 'hidden';
    }
    setIsOpen((isOpen) => !isOpen);
  };

  const handleModule = () => {
    setIsOpenModal(!isOpenModal);
    document.body.style.overflow = isOpenModal ? 'visible' : 'hidden';
  };

  const logOutFromAccount = () => {
    window.localStorage.clear();
    dispatch(logOut());
    document.body.style.overflow = 'visible';
  };

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = !!(scrollTop >= 150);
    setSticky(stickyClass);
  };

  return (
    <>
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
          <div className={`${styles.right} ${isOpen && styles.active}`}>
            <nav className={`${styles.menu}`}>
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
              <div onClick={openMenu} className={styles.hamburger}>
                <span className={`${styles.line} ${styles.line1}`}></span>
                <span className={`${styles.line} ${styles.line2}`}></span>
                <span className={`${styles.line} ${styles.line3}`}></span>
              </div>
              <div onClick={handleModule} className={styles.switches_icon}>
                <img src={logout} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {isOpenModal && (
        <ModalConfirm
          handleClose={handleModule}
          onConfirm={logOutFromAccount}
          show={isOpenModal}
        >
          Do you really want to log out?
        </ModalConfirm>
      )}
    </>
  );
};
export default Header;
