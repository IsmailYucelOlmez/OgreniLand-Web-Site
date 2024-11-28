import React from 'react'
import Carousel from '../components/Carousel'
import Image from '../components/Image'
import StoreIcons from '../components/StoreIcons'
import Logo from '../assets/Ideapolıs.png'
import { useParams } from 'react-router-dom'

const GameDetailsPage = () => {

  const params=useParams();

  return (
    <div className='w-3/4 mx-auto flex flex-col gap-8'>
      <Carousel/>

      <div className='flex items-center gap-2'>
        <Image src={Logo} className={"w-24 h-24"}/>
        <h2 className='text-xl'>IdeaPolis</h2>
      </div>

      <p>Bu oyunda kendi şehrini tasarlayarak bir şehir planlayıcısı ol! Sana verilen binaları doğru yerlere yerleştir, şehrini güzelleştir. Hem eğlen, hem de şehir planlamasının temel kurallarını öğren</p>

      <StoreIcons/>
    </div>
  )
}

export default GameDetailsPage
