import styles from './Modal.module.css';

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.close}></div>
      <form className={styles.form}>
        <input type="text" placeholder="Search here...." />
      </form>
    </div>
  );
};
export default Search;
