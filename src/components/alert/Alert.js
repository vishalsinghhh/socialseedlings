import React from "react";
import { useAppContext } from "@/context/appContext";
import alertLogo from "../../images/warning.png";
import Image from "next/image";
import styles from "./alert.module.css"

const Alert = () => {
  const { alertMsg } = useAppContext();
  return (
    <div>
      <div className={styles.Alert}>
        <div>
          <Image src={alertLogo} width={200} height={200} />
        </div>
        {alertMsg}
      </div>
    </div>
  );
};

export default Alert;
