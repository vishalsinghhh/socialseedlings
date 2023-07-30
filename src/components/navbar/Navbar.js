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
            <Image src={logo} alt="logo" className={styles.logo} />
            <div>SocialSeedlings</div>
          </div>
        </Link>
        <div className={styles.midTagLine}>
          Fostering Societal Change
          <div>
            <DarkModeToggle className={styles.toggle} />
          </div>
        </div>
        <div className={styles.endTagLine}>
          Eat. Socialize. Sleep <br />
          xRepeat
        </div>
        <div className={styles.mobile}>
          <div className={styles.midTagLine1}>Fostering Societal Change</div>
          <div className={styles.endTagLine1}>
            Eat. Socialize. Sleep <br />
            xRepeat
            
          </div>
          <div className={styles.toggle}>
              <DarkModeToggle />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;