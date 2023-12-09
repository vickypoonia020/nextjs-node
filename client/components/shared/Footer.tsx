import React from "react";
import Image from "next/image";
import styles from "../../styles/css/footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/BG1.jpeg"
            alt="BG1"
            width={400}
            height={400}
          />
          <p>Text below BG1 image</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/BG2.jpeg"
            alt="BG2"
            width={400}
            height={400}
          />
          <p>Text below BG2 image</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
