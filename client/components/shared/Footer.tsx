import React from "react";
import Image from "next/image";
import styles from "../../styles/css/footer.module.scss";

const Footer = () => {
  return (
    <footer>
      {/* <div className={`${styles.wpb_column} ${styles.col_md_12}`}>
        <h2
          className={`${styles.section_title} ${styles.align_center} ${styles.mb_70}`}
        >
          FIND US
        </h2>
      </div>
      <div className={styles.footer}>
        <div className={styles.imageContainer}>
          <Image src="/images/BG1.jpeg" alt="BG1" width={400} height={400} />
          <p>Text below BG1 image</p>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/images/BG2.jpeg" alt="BG2" width={400} height={400} />
          <p>Text below BG2 image</p>
        </div>
      </div> */}
      <div className={`${styles.row}`}>
        <div className={`${styles.up_column_}`}>
          <h2 className={`${styles.section_title}`}>FIND US</h2>
        </div>
        <div className={`${styles.up_column}`}>
          <section className={`${styles.content_section}`}>
            <div className={`${styles.rowD}`}>
              <div className={`${styles.down_column}`}>
                <div className={`${styles.contact_item}`}>
                  <div>
                    <div className={`${styles.ci_icon}`}>
                      <Image
                        src="/images/icon_callB.png"
                        alt="call iconB"
                        width={18}
                        height={18}
                        className={styles.image}
                      />
                    </div>
                  </div>
                  <div>
                    <div className={`${styles.ci_title}`}>Call Us</div>
                    <div className={`${styles.ci_text}`}>01625 535 245</div>
                  </div>
                </div>
              </div>
              <div className={`${styles.down_column}`}>
                <div className={`${styles.contact_item}`}>
                  <div
                    className={`${styles.ci_icon} ${styles.ci_icon_location}`}
                  >
                    <Image
                      src="/images/icon_location.png"
                      alt="call iconB"
                      width={18}
                      height={18}
                      className={styles.image}
                    />
                  </div>
                  <div>
                    <div className={`${styles.ci_title}`}>ADDRESS</div>
                    <div
                      className={`${styles.ci_text}`}
                      style={{ fontSize: "15px" }}
                    >
                      121 Wilmslow Road
                      <br />
                      Handforth
                      <br />
                      Cheshire
                      <br />
                      SK9 3HX
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.down_column}`}>
                <div className={`${styles.contact_item}`}>
                  <div className={` ${styles.ci_icon_email}`}>
                    <Image
                      src="/images/icon_email.png"
                      alt="call iconB"
                      width={25}
                      height={25}
                      className={styles.image}
                    />
                  </div>
                  <div>
                    <div className={`${styles.ci_title}`}>EMAIL</div>
                    <div className={`${styles.ci_text}`}>
                      bookings@giulianorestaurant.co.uk
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.footer}>
          <div className={styles.imageContainer}>
            <Image src="/images/BG1.jpeg" alt="BG1" width={400} height={400} />
            {/* <p>Text below BG1 image</p> */}
            <div className={`${styles.ci_text}`} style={{ fontSize: "15px" }}>
              121 Wilmslow Road
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/images/BG2.jpeg" alt="BG2" width={400} height={400} />
            {/* <p>Text below BG2 image</p> */}
            <div className={`${styles.ci_text}`} style={{ fontSize: "15px" }}>
              344 lmslow Road
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
