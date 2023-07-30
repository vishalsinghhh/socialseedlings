import React from "react";
import Image from "next/image";
import styles from "./UserInfo.module.css";
import { BsInstagram, BsLink45Deg } from "react-icons/bs";
import { RxTwitterLogo } from "react-icons/rx";

const UserInfo = (userInfo) => {
  console.log(userInfo);
  return (
    <div>
      <div className={styles.mainProfile}>
        <Image
          src={userInfo?.user?.profile_image?.large}
          width={200}
          height={200}
          className={styles.profileImg}
        />
        <div className={styles.profileDetails}>
          <div>{userInfo?.user?.username}</div>
          <div className={styles.photosDetails}>
            <div>{userInfo?.user?.total_likes} likes</div>
            <div>{userInfo?.user?.total_photos} photos</div>
            <div>{userInfo?.user?.total_collections} collections</div>
          </div>
          <div>{userInfo?.user?.name}</div>
          <div>{userInfo?.user?.location}</div>
          <div>{userInfo?.user?.bio}</div>
          <div className={styles.links}>
            <div>
              <a href={`https://www.instagram.com/${userInfo?.user?.social?.instagram_username}/`} target="_">
                <BsInstagram />
              </a>
            </div>
            <div>
              <a href={`https://twitter.com/${userInfo?.user?.social?.twitter_username}`} target="_">
                <RxTwitterLogo />
              </a>
            </div>
            <div>
              <a href={userInfo?.user?.social?.portfolio_url} target="_">
                <BsLink45Deg />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
