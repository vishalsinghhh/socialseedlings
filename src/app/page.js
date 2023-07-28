"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'
import { useAppContext } from '@/context/appContext'
import Card from '@/components/card/Card'

export default function Home() {
  const {getRandomPhoto, randomPhotos}= useAppContext()
  useEffect(()=>{
    getRandomPhoto()
  }, [])
  return (
    <div>
      {randomPhotos.map((item)=>{
        return <Card randomPhoto={item} key={item.id}/>
      })}
    </div>
  )
}
