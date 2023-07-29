import React from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className={styles.logoMain}>
        <Link href={"/"} className={styles.myLink}>
          <div className={styles.mainLogo}>
            <Image src={logo} alt="logo" />
            <div>SocialSeedlings</div>
          </div>
        </Link>

        <div className={styles.midTagLine}>
          Fostering Societal Change
          <div>
            <DarkModeToggle />
          </div>
        </div>
        <div className={styles.endTagLine}>
          Eat. Socialize. Sleep <br />
          xRepeat
        </div>
      </div>
    </div>
  );
};

export default Navbar;
