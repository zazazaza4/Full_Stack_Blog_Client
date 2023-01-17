import { FC, HTMLAttributes } from "react";

import Footer from './footer/Footer';
import Header from './header/Header';

import { LayoutProps } from "./Layout.props";

import styles from './Layout.module.css';

const Layout: FC<LayoutProps> = ({ children }): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export function withLayout<T extends HTMLAttributes<HTMLElement>>(Component: React.ComponentType<T>) {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
