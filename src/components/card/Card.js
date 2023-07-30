import React from "react";
import styles from "./Card.module.css";
import Util from "./Util";
import Link from "next/link";
import BackgroundName from "./BackgroundName";
import CardUtil from "./CardUtil";
import { useAppContext } from "@/context/appContext";

const Card = (randomPhoto) => {
  const {mode} = useAppContext()

  return (
    <section>
      <div className={styles.BackgroundName1}>
        <BackgroundName
          name={
            randomPhoto.randomPhoto.user.first_name +
            " " +
            randomPhoto.randomPhoto.user.last_name
          }
        />
      </div>

      <Util
        name={
          randomPhoto.randomPhoto.user.first_name +
          " " +
          randomPhoto.randomPhoto.user.last_name
        }
      />
      <div className={styles.BackgroundName2}>
        <BackgroundName
          name={
            randomPhoto.randomPhoto.user.first_name +
            " " +
            randomPhoto.randomPhoto.user.last_name
          }
        />
      </div>
      <Link
        href={`/profile/${randomPhoto.randomPhoto.user.username}`}
        className={styles.myLink}
      >
        <div className={mode==='dark'?`${styles.viewProfileBTN}`:`${styles.viewProfileBTN1}`}>
          <div>View Profile</div>
        </div>
      </Link>
      <CardUtil
        username={randomPhoto.randomPhoto.user.username}
        profileImg={randomPhoto.randomPhoto.user.profile_image.medium}
        location={randomPhoto.randomPhoto.user.location}
        createdAt={randomPhoto.randomPhoto.created_at}
        img={randomPhoto.randomPhoto.urls.regular}
        likes={randomPhoto.randomPhoto.likes}
        dis={randomPhoto.randomPhoto.alt_description}
      />
    </section>
  );
};

export default Card;
