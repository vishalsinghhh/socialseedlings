import React, { useState } from "react";
import Image from "next/image";
import styles from "./photoGrid.module.css";
import { RxCross1 } from "react-icons/rx";
import CardUtil from "../card/CardUtil";

const PhotosGrid = (item) => {
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
            dis={item?.photo?.alt_description}
          />
        </div>
      )}
      <div className={styles.mainPhotos} onClick={() => setModalOpen(true)}>
        <Image className={styles.mainImage} src={item?.photo?.urls.regular} width={280} height={300} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8Ww8AAj8BXkQ+xPEAAAAASUVORK5CYII="/>
        <div className={styles.block}>{item?.photo.alt_description}</div>
      </div>
    </div>
  );
};

export default PhotosGrid;
