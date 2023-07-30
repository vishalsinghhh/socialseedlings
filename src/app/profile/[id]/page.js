"use client";
import React, { useEffect } from "react";
import { useAppContext } from "@/context/appContext";
import { useParams } from "next/navigation";
import UserInfo from "@/components/userInfo/UserInfo";
import PhotosGrid from "@/components/photoGrid/PhotosGrid";

const profileDetails = () => {
  const {
    getUserInfo,
    getUserPhotos,
    userInfo,
    userPhotos,
    isUserLoading,
    isUserPhotosLoading,
  } = useAppContext();
  const params = useParams();
  useEffect(() => {
    getUserInfo(params.id);
    getUserPhotos(params.id);
  }, []);
  console.log(userPhotos);
  return (
    <div>
      <div>
        <UserInfo user={userInfo} />
        <div className="underline"></div>
        <div className="gridContainer">
          {userPhotos?.map((item, index) => {
            return <PhotosGrid photo={item} key={item.id}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default profileDetails;
