import Post from '../../components/post/Post';
import Widget from '../../components/widget/Widget';
import { withLayout } from '../../layout/Layout';

const Home = () => {
  return (
    <main>
      <Post />
      <Widget />
    </main>
  );
};
export default withLayout(Home);
