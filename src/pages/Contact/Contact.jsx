import { withLayout } from '../../layout/Layout';

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <main>
      <div className={styles.wrapper}>
        <h2 className={styles.item}></h2>
        <h2 className={styles.item}></h2>
        <h2 className={styles.item}></h2>
      </div>
    </main>
  );
};
export default withLayout(Contact);
