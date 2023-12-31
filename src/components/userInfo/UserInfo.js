import React from "react";
import Image from "next/image";
import styles from "./UserInfo.module.css";
import { BsInstagram, BsLink45Deg } from "react-icons/bs";
import { RxTwitterLogo } from "react-icons/rx";
import BackgroundName from "@/components/card/BackgroundName";
import { useAppContext } from "@/context/appContext";

const UserInfo = (userInfo) => {
  const {mode}= useAppContext()
  console.log(userInfo);
  return (
    <div>
      <div className={styles.BackgroundName1}>
        <BackgroundName name={userInfo?.user?.name} />
      </div>

      <div className={styles.profileSection}>
        <div className={styles.mainProfile}>
          <Image
            src={userInfo?.user?.profile_image?.large}
            width={150}
            height={150}
            className={styles.profileImg}
          />
          <div className={styles.profileDetails}>
            <div className={styles.username}>{userInfo?.user?.username}</div>
            <div className={styles.photosDetails}>
              <div className={styles.stats}>
                {userInfo?.user?.total_likes} likes
              </div>
              <div className={styles.stats}>
                {userInfo?.user?.total_photos} photos
              </div>
              <div className={styles.stats}>
                {userInfo?.user?.total_collections} collections
              </div>
            </div>
            <div className={styles.name}>{userInfo?.user?.name}</div>
            <div className={mode==='dark'?`${styles.location}`:`${styles.location} ${styles.location1}`}>{userInfo?.user?.location}</div>
            <div className={styles.bio}>{userInfo?.user?.bio}</div>
            <div className={styles.links}>
              <div className={styles.links1}>
                <a
                  href={`https://www.instagram.com/${userInfo?.user?.social?.instagram_username}/`}
                  target="_"
                >
                  <BsInstagram className={mode==='light'&&`${styles.link3}`}/>
                </a>
              </div>
              <div className={styles.links1}>
                <a
                  href={`https://twitter.com/${userInfo?.user?.social?.twitter_username}`}
                  target="_"
                >
                  <RxTwitterLogo className={mode==='light'&&`${styles.link3}`}/>
                </a>
              </div>
              <div className={styles.links1}>
                <a href={userInfo?.user?.social?.portfolio_url} target="_">
                  <BsLink45Deg className={mode==='light'&&`${styles.link3}`}/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flowBTNmain}>
          <div className={mode==='dark'?`${styles.followBTN}`:`${styles.followBTN} ${styles.followBTN1}`}>Follow</div>
          <div className={styles.followValues}>
            <div className={styles.followers}>{userInfo?.user?.followers_count} followers</div>
            <div>{userInfo?.user?.following_count} following</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
