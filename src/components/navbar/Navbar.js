import React from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div>
      <div className={styles.logoMain}>
        <Image src={logo} alt="logo" />
        <div>SocialSeedlings</div>
        <div className={styles.midTagLine}>Fostering Societal Change</div>
        <div className={styles.endTagLine}>Eat. Socialize. Sleep <br/>xRepeat</div>
      </div>
    </div>
  );
};

export default Navbar;
