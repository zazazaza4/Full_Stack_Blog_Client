import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

import styles from './Categories.module.css';

const Categories = ({ className }) => {
  const [categories, setCategories] = useState([
    {
      name: 'all',
    },
    {
      name: 'PHOTOGRAPHY',
    },
    {
      name: 'TRAVEL',
    },
    {
      name: 'NATURE',
    },
    {
      name: 'FASHION',
    },
    {
      name: 'STYLE',
    },
  ]);

  const getAllCategories = async () => {
    const { data } = await axios.get('categories').catch((e) => console.log(e));
    console.log(data);
  };

  useEffect(() => {
    getAllCategories();
  });

  return (
    <ul className={`${styles.categories} ${className}`}>
      {categories.map(({ name }) => {
        return (
          <li className={styles.category} key={name}>
            {name}
          </li>
        );
      })}
    </ul>
  );
};
export default Categories;
