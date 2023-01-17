import { motion } from "framer-motion";
import { Button, GoogleMap } from "../../components";
import { FC } from "react";
import { withLayout } from "../../layout/Layout";

import icon from "../../assets/logo.webp";

import styles from "./Contact.module.css";

const Contact: FC = () => {
  return (
    <main className={styles.main}>
      {<GoogleMap className={styles.map} />}
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src={icon} alt="" />
            </div>
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
          <motion.div
            animate={{ scale: [0, 0.5, 1] }}
            transition={{ ease: "easeOut", duration: 1 }}
            className={styles.right}
          >
            <div className={styles.contact}>
              <h2 className={styles.title}>CONTACT FORM</h2>
              <form className={styles.form}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Your name"
                />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Your Messages"
                />
                <textarea className={styles.input} placeholder="Your Email" />
                <Button className={styles.button}>SEND MESSAGES</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
export default withLayout(Contact);
