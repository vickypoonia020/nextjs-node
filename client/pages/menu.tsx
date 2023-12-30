import React from "react";
import { useState } from "react";
import styles from "../styles/css/menu.module.scss";
import Image from "next/image";

const menu = () => {
  const [activeTab, setActiveTab] = useState("Main");
  const changeTab = (type: string) => {
    setActiveTab(type);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Main":
        return <div>Main Menu Tab</div>;
      case "Lunch":
        return <div>Lunch Tab</div>;
      case "Specials":
        return <div>Specials Tab</div>;
      case "catering":
        return <div>catering Tab</div>;
      default:
        return null;
    }
  };
  return (
    <>
      <div className={`${styles.menu}`}>
        <section>
          <div className={`${styles.menu_title}`}>
            <h1>Menus</h1>
            {/* <p>
              A culinary tour of BBQ traditions from around this great nation
              and this beautiful planet. 1.8 million years ago, humans first
              began cooking meat with fire. For some reason, this hasn’t led to
              world peace, but we’re pretty sure if we fire up enough BBQ, it
              will.
            </p> */}
            <div>
              <button onClick={() => changeTab("Main")}>Main Menu</button>
              <button onClick={() => changeTab("Lunch")}>
                Lunch Happy Hour
              </button>
              <button onClick={() => changeTab("Specials")}>Specials</button>
              <button onClick={() => changeTab("catering")}>catering</button>
            </div>
          </div>
        </section>
      </div>
      <div className={`${styles.menuCategory}`}>{renderContent()}</div>
    </>
  );
};

export default menu;
