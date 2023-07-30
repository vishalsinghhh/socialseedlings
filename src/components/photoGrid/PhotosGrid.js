import React, { useState } from "react";
import Image from "next/image";
import styles from "./photoGrid.module.css";
import { RxCross1 } from "react-icons/rx";
import CardUtil from "../card/CardUtil";

const PhotosGrid = (item) => {
  console.log(item.photo.blur_hash);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div
            className={styles.cross}
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <RxCross1 />
          </div>
          <CardUtil
            username={item?.photo?.user.username}
            profileImg={item?.photo?.user.profile_image.medium}
            location={item?.photo?.user.location}
            createdAt={item?.photo?.created_at}
            img={item?.photo?.urls.regular}
            likes={item?.photo?.likes}
          />
        </div>
      )}
      <div className={styles.mainPhotos} onClick={() => setModalOpen(true)}>
        <Image src={item?.photo?.urls.regular} width={280} height={300} />
        <div className={styles.block}>{item?.photo.alt_description}</div>
      </div>
    </div>
  );
};

export default PhotosGrid;
