"use client"
import React from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Link from "next/link";
import { useAppContext } from "@/context/appContext";

const Navbar = () => {
  const {mode} = useAppContext()
  return (
    <div>
      <div className={styles.logoMain}>
        <Link href={"/"} className={styles.myLink}>
          <div className={mode==='dark'?`${styles.mainLogo}`:`${styles.mainLogo} ${styles.mainLogo1}`}>
            <Image src={logo} alt="logo" className={styles.logo} />
            <div>SocialSeedlings</div>
          </div>
        </Link>
        <div className={mode==='dark'?`${styles.midTagLine}`:`${styles.midTagLine} ${styles.midTagLine2}`}>
          Fostering Societal Change
          <div>
            <DarkModeToggle className={styles.toggle} />
          </div>
        </div>
        <div className={mode==='dark'?`${styles.endTagLine}`:`${styles.endTagLine} ${styles.endTagLine2}`}>
          Eat. Socialize. Sleep <br />
          xRepeat
        </div>
        <div className={mode==='dark'?`${styles.mobile}`:`${styles.mobile} ${styles.mobile1}`}>
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