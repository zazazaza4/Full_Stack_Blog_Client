import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CategorySceleton } from '../skeletons/Skeletons';
import axios from '../../utils/axios';

import styles from './Categories.module.css';

const Categories = ({ selectCategory, className = '' }) => {
  const itemRefs = useRef([]);
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const { data } = await axios.get('categories').catch((e) => console.log(e));
    setCategories([...data]);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((element) => {
      element.classList.remove(styles.selected);
    });

    itemRefs.current[id].classList.add(styles.selected);
    itemRefs.current[id].focus();
  };

  const selectCategoryById = (id) => {
    focusOnItem(id);
    selectCategory(categories[id]?.name);
  };

  const renderPosts = (categories) => {
    if (categories.length === 0) {
      return [...Array(5)].map(() => {
        return (
          <li className={styles.category}>
            <CategorySceleton />
          </li>
        );
      });
    }

    return categories.map(({ name }, index) => {
      return (
        <li
          ref={(elem) => (itemRefs.current[index] = elem)}
          tabIndex={0}
          onClick={() => selectCategoryById(index)}
          className={styles.category}
          key={name}
        >
          {name}
        </li>
      );
    });
  };

  const categoriesEl = renderPosts(categories);

  return (
    <motion.ul
      animate={{ opacity: [0, 0.5, 1], x: [-100, 0] }}
      transition={{ ease: 'easeOut', duration: 1 }}
      className={`${styles.categories} ${className}`}
    >
      {categoriesEl}
    </motion.ul>
  );
};
export default Categories;
