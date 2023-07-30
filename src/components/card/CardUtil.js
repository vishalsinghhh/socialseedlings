import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

const CardUtil = (props) => {
    console.log(props);
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
    <div>
      <div className={styles.container}>
        <div className={styles.userProfile}>
          <div className={styles.userProfileMain}>
            <Link
              href={`/profile/${props?.username}`}
              className={styles.myLink}
            >
              <Image
                src={props?.profileImg}
                width={50}
                height={50}
                alt="logo"
                className={styles.profileImage}
              />
            </Link>

            <div className={styles.profileImageUser}>
              <Link href={`/profile/${props.username}`}>
                <div className={styles.userName}>
                  {props?.username}
                </div>
              </Link>

              <div className={styles.location}>
                {props?.location}
              </div>
            </div>

            <div className={styles.date}>
              {props?.createdAt.split("T")[0].split("-")[2]}
              <span> </span>
              {
                month[
                  parseInt(
                    props?.createdAt
                      .split("T")[0]
                      .split("-")[1]
                  ) - 1
                ]
              }
              <span>, </span>
              {props?.createdAt.split("T")[0].split("-")[0]}
            </div>
          </div>

          <div>
            <Image
              src={props?.img}
              width={350}
              height={400}
              alt="logo"
              className={styles.imageMain}
            />
          </div>
          <div className={styles.likesBTN}>
            <AiOutlineHeart className={styles.like} />
            <div>{props?.likes} likes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUtil;
