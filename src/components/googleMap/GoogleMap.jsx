import styles from './GoogleMap.module.css';

const GoogleMap = ({ className }) => {
  return (
    <section className={`${styles.map} ${className}`}>
      <iframe
        className={styles.frame}
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Kharkiv+(Blog%20Location)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/distance-area-calculator.html">
          area maps
        </a>
      </iframe>
    </section>
  );
};
export default GoogleMap;
