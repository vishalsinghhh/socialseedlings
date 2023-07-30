import React from "react";
import Image from "next/image";
import styles from "./photoGrid.module.css";

const PhotosGrid = (item) => {
  console.log(item.photo.blur_hash);
  return (
    <div className={styles.mainPhotos}>
      <Image src={item?.photo?.urls.regular} width={280} height={300} />
      <div className={styles.block}>{item?.photo.alt_description}</div>
    </div>
  );
};

export default PhotosGrid;
