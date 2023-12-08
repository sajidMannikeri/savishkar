import React from "react";
import { useState } from "react";
import styles from "./style";
import { AboutSavishkar, Events, Footer, Hero, Navbar } from "./components";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-main-gradient w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}><Navbar toggle = {toggle} setToggle = {setToggle} /></div>
      </div>

      <div className={`h-[100vh] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}><Hero toggle = {toggle} /></div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          </div>
      </div>
    </div>
  );
};

export default App;
