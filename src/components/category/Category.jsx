import { Link } from 'react-router-dom';

const Category = ({ name }) => {
  return (
    <li>
      <Link to="posts/">{name}</Link>
    </li>
  );
};
export default Category;
