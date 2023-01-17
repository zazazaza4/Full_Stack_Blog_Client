import { FC } from "react";
import { Announcement, Banner, GoogleMap } from "../../components";
import { withLayout } from "../../layout/Layout";

import  styles from "./About.module.css";

const About: FC = () => {
  return (
    <main className={styles.about}>
      <Banner>About this project</Banner>
      <div className={styles.wrapper}>
        <Announcement>
          Blogging app using mern stack technologies with the complete
          authentication system.
        </Announcement>
        <section className={styles.body}>
          <div className={styles.content}>
            <p className={styles.text}>
              MERN is one of several variations of the MEAN stack (MongoDB
              Express Angular Node), where the traditional Angular.js front-end
              framework is replaced with React.js. Other variants include MEVN
              (MongoDB, Express, Vue, Node), and really any front-end JavaScript
              framework can work.
            </p>
            <p className={styles.text}>
              I was using the following plugins and tools to create the MERN
              Stack app: NodeJS, MoongoDB, ReactJS, Mongoose JS, Redux
            </p>
          </div>
        </section>
        <section className={styles.location}>
          <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.date}>
                <h2 className={styles.h2}>LOCATION</h2>
                <p className={styles.p__contact}>
                  Get directions to our event center
                </p>
                <div className={styles.info}>
                  <h3 className={styles.h3}>Address:</h3>
                  <p className={styles.text}>
                    Sumska St, Kharkiv, Kharkivs'ka oblast, 61000
                  </p>
                </div>
                <div className={styles.row}>
                  <div className={styles.info}>
                    <h3 className={styles.h3}>PHONE:</h3>
                    <p className={styles.text}>+123 4567 8910</p>
                  </div>
                  <div className={styles.info}>
                    <h3 className={styles.h3}>EMAIL:</h3>
                    <p className={styles.text}>Colorlib.info@gmail.com</p>
                  </div>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.h3}>WORKING HOURS:</h3>
                  <p className={styles.text}>08.00am - 21.00pm Weekdays</p>
                </div>
              </div>
            </div>
            <GoogleMap className={styles.map} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default withLayout(About);
