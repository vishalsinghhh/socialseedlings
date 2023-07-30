import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { useAppContext } from "@/context/appContext";

const CardUtil = (props) => {
    console.log(props);
    const {mode} = useAppContext()
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
      <div className={mode==='dark'?`${styles.container}`:`${styles.container1}`}>
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
                <div className={mode==='dark'?`${styles.userName}`:`${styles.userName1}`}>
                  {props?.username}
                </div>
              </Link>

              <div className={mode==='dark'?`${styles.location}`:`${styles.location1}`}>
                {props?.location}
              </div>
            </div>

            <div className={mode==='dark'?`${styles.date}`:`${styles.date1}`}>
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
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8Ww8AAj8BXkQ+xPEAAAAASUVORK5CYII="
            />
          </div>
          <div className={styles.likesBTN}>
            <AiOutlineHeart className={styles.like} />
            <div>{props?.likes} likes</div>
            
          </div>
          <div className={mode==='dark'?`${styles.dis}`:`${styles.dis1}`}>{props?.dis}</div>
        </div>
      </div>
    </div>
  );
};

export default CardUtil;
