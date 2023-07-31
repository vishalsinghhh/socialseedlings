"use client";
import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/appContext";
import { useParams } from "next/navigation";
import UserInfo from "@/components/userInfo/UserInfo";
import PhotosGrid from "@/components/photoGrid/PhotosGrid";
import { BsList, BsGrid } from "react-icons/bs";
import Alert from "@/components/alert/Alert";
import { InfinitySpin } from "react-loader-spinner";
import CardUtil from "@/components/card/CardUtil";

const profileDetails = () => {
  const [isGrid, setIsGrid] = useState("grid");
  const {
    getUserInfo,
    getUserPhotos,
    userInfo,
    userPhotos,
    isUserLoading,
    alertMsg,
    mode
  } = useAppContext();
  const params = useParams();
  useEffect(() => {
    getUserInfo(params.id);
    getUserPhotos(params.id);
  }, []);

  return (
    <div>
      {alertMsg != "" ? (
        <Alert />
      ) : (
        <div>
          {isUserLoading ? (
            <div>
              <InfinitySpin width="200" color={`${mode==='dark'?"#fff":"#000"}`} />
            </div>
          ) : (
            <div>
              <UserInfo user={userInfo} />
              <div className="gap"></div>
              <div className="underline"></div>
              <div className="gridList">
                <BsGrid
                  className="BsGrid"
                  onClick={() => {
                    setIsGrid("grid");
                  }}
                />
                <div className="verticalLine"></div>
                <div
                  onClick={() => {
                    setIsGrid("list");
                  }}
                >
                  <BsList className="BsGrid" />
                </div>
              </div>
              {isGrid == "grid" && (
                <div className="gridContainer">
                  {userPhotos?.map((item, index) => {
                    return <PhotosGrid photo={item} key={item.id} />;
                  })}
                </div>
              )}
              {isGrid == "list" && (
                <div className="listMain">
                  {userPhotos?.map((item, index) => {
                    return (
                      <CardUtil
                        username={item.user.username}
                        profileImg={
                          item.user.profile_image.medium
                        }
                        location={item.user.location}
                        createdAt={item.created_at}
                        img={item.urls.regular}
                        likes={item.likes}
                        dis={item.alt_description}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default profileDetails;
