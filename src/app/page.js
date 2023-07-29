"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef, useCallback } from "react";
import { useAppContext } from "@/context/appContext";
import Card from "@/components/card/Card";

export default function Home() {
  const { getRandomPhoto, randomPhotos, isLoading } = useAppContext();

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          getRandomPhoto()
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  useEffect(() => {
    getRandomPhoto();
    // getRandomPhoto();
  }, []);

  return (
    <div>
      {randomPhotos.map((item, index) => {
        if (randomPhotos.length === index + 1) {
          return (
            <div ref={lastBookElementRef}>
              <Card randomPhoto={item} key={item.id} />
            </div>
          );
        } else {
          return (
            <div>
              <Card randomPhoto={item} key={item.id} />
            </div>
          );
        }
      })}
    </div>
  );
}
