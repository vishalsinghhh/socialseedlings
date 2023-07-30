import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Util from "./Util";
import Link from "next/link";
import BackgroundName from "./BackgroundName";

const Card = (randomPhoto) => {
  console.log(randomPhoto.randomPhoto);
  const month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

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
      <div className={styles.container}>
        <div className={styles.userProfile}>
          <div className={styles.userProfileMain}>
            <Link
              href={`/profile/${randomPhoto.randomPhoto.user.username}`}
              className={styles.myLink}
            >
              <Image
                src={randomPhoto.randomPhoto.user.profile_image.medium}
                width={50}
                height={50}
                alt="logo"
                className={styles.profileImage}
              />
            </Link>

            <div className={styles.profileImageUser}>
              <Link href={`/profile/${randomPhoto.randomPhoto.user.username}`}>
                <div className={styles.userName}>
                  {randomPhoto.randomPhoto.user.username}
                </div>
              </Link>

              <div className={styles.location}>
                {randomPhoto.randomPhoto.user.location}
              </div>
            </div>

            <div className={styles.date}>
              {randomPhoto.randomPhoto.created_at.split("T")[0].split("-")[2]}
              <span> </span>
              {
                month[
                  parseInt(
                    randomPhoto.randomPhoto.created_at
                      .split("T")[0]
                      .split("-")[1]
                  ) - 1
                ]
              }
              <span>, </span>
              {randomPhoto.randomPhoto.created_at.split("T")[0].split("-")[0]}
            </div>
          </div>

          <div>
            <Image
              src={randomPhoto.randomPhoto.urls.regular}
              width={350}
              height={400}
              alt="logo"
              className={styles.imageMain}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
