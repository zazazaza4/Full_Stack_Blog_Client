import Footer from './footer/Footer';
import Header from './header/Header';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
