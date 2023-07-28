"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useAppContext } from "@/context/appContext";
import Card from "@/components/card/Card";

export default function Home() {
  const { getRandomPhoto, randomPhotos } = useAppContext();
  useEffect(() => {
    // getRandomPhoto();
  }, []);

  // console.log(window.innerHeight);
  // console.log(document.documentElement.scrollHeight);
  const handelInfiniteScroll = async () => {
    console.log("scrollHeight" + document.documentElement.scrollHeight);
    console.log("innerHeight" + window.innerHeight);
    console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);
  return (
    <div>
      {randomPhotos.map((item) => {
        return <Card randomPhoto={item} key={item.id} />;
      })}
    </div>
  );
}
