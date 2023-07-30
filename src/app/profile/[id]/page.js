"use client";
import React, { useEffect } from "react";
import { useAppContext } from "@/context/appContext";
import { useParams } from "next/navigation";
import UserInfo from "@/components/userInfo/UserInfo";

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
    // getUserPhotos(params.id);
  }, []);
  // console.log(userInfo);
  return (
    <div>
      <div>
        <UserInfo user={userInfo} />
      </div>
    </div>
  );
};

export default profileDetails;
