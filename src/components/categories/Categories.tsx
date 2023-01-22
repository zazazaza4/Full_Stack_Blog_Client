import { useEffect, useRef, useState, FC } from "react";
import { motion } from "framer-motion";
import { CategorySceleton } from "../skeletons/Skeletons";
import axios from "../../utils/axios";

import { CategoriesProps } from "./Categories.props";
import { ICategory } from "../../types/Category.interface";

import styles from "./Categories.module.css";

type GetCategoriesResponse = ICategory[];

const Categories: FC<CategoriesProps> = ({
  selectCategory,
  className = "",
}) => {
  const itemRefs = useRef<HTMLLIElement[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const getAllCategories = async () => {
    const response = await axios
      .get<GetCategoriesResponse>("categories")
      .catch((e) => console.log(e));

    if (response && response.data) {
      setCategories([...response.data]);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const focusOnItem = (id: number) => {
    itemRefs.current.forEach((element) => {
      element.classList.remove(styles.selected);
    });

    itemRefs.current[id].classList.add(styles.selected);
    itemRefs.current[id].focus();
  };

  const selectCategoryById = (id: number) => {
    focusOnItem(id);
    selectCategory(categories[id]?.name);
  };

  const renderPosts = (categories: ICategory[]) => {
    if (categories.length === 0) {
      return [...Array(5)].map((_, index) => {
        return (
          <li key={index} className={styles.category}>
            <CategorySceleton />
          </li>
        );
      });
    }

    return categories.map(({ name }, index) => {
      return (
        <li
          ref={(elem) => (itemRefs.current[index] = elem as HTMLLIElement)}
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
      transition={{ ease: "easeOut", duration: 1 }}
      className={`${styles.categories} ${className}`}
    >
      {categoriesEl}
    </motion.ul>
  );
};
export default Categories;
