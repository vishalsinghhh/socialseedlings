"use client";
import styles from "./page.module.css";
import { useEffect, useRef, useCallback } from "react";
import { useAppContext } from "@/context/appContext";
import Card from "@/components/card/Card";
import { InfinitySpin } from "react-loader-spinner";
import Alert from "@/components/alert/Alert";

export default function Home() {
  const { getRandomPhoto, randomPhotos, isLoading, alertMsg, mode} = useAppContext();

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (randomPhotos.length < 10) {
            getRandomPhoto();
          }
        }
        // getRandomPhoto();
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  useEffect(() => {
    getRandomPhoto();
  }, []);
  console.log(randomPhotos);

  return (
    <div>
      {alertMsg != "" ? (
        <Alert />
      ) : (
        <div>
          {randomPhotos.map((item, index) => {
            if (randomPhotos.length === index + 1) {
              return (
                <div
                  className={
                    index === 0 ? styles.container1 : styles.container2
                  }
                >
                  <Card randomPhoto={item} key={item.id} />
                  {isLoading && randomPhotos.length < 10 && (
                    <div><InfinitySpin width="200" color={`${mode==='dark'?"#fff":"#000"}`} /></div>
                  )}
                  <div ref={lastBookElementRef}></div>
                </div>
              );
            } else if (index === 0) {
              return (
                <div className={styles.container1}>
                  <Card randomPhoto={item} key={item.id} />
                </div>
              );
            } else {
              return (
                <div className={styles.container2}>
                  <Card randomPhoto={item} key={item.id} />
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
