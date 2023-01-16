import { FC } from 'react';

import { GoogleMapProps } from './GoogleMap.props';

import styles from './GoogleMap.module.css';

const GoogleMap: FC<GoogleMapProps> = ({ className }) => {
  return (
    <section className={`${styles.map} ${className}`}>
      <iframe
        title='google-map'
        className={styles.frame}
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
