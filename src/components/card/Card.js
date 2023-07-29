import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

const Card = (randomPhoto) => {
  console.log(randomPhoto.randomPhoto);
  return (
    <div className={styles.container}>
      <div className={styles.userProfile}>
        <Image
          src={randomPhoto.randomPhoto.user.profile_image.medium}
          width={50}
          height={50}
          alt="logo"
        />
        <div>{randomPhoto.randomPhoto.user.instagram_username}</div>
        <div>{randomPhoto.randomPhoto.user.location}</div>
        <div>{randomPhoto.randomPhoto.created_at}</div>
        <div className={styles.imageMain}>
          <Image
            src={randomPhoto.randomPhoto.urls.regular}
            width={350}
            height={380}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
