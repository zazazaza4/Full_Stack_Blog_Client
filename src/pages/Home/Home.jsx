import Post from '../../components/post/Post';
import Widget from '../../components/widget/Widget';
import { withLayout } from '../../layout/Layout';

import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.posts}>Posts</div>
        <div className={styles.popularPost}>Popular</div>
      </div>
    </main>
  );
};
export default withLayout(Home);
