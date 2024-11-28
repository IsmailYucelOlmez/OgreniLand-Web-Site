import React from 'react'
import GameCard from '../components/GameCard'
import Game1Logo from '../assets/Ideapolıs.png'

const GamesPage = () => {
  return (
    <div className='w-3/4 mx-auto flex flex-col'>
      
      <GameCard src={Game1Logo} id={"1"} title={"IdeaPolis"} explanation={"Bu oyunda kendi şehrini tasarlayarak bir şehir planlayıcısı ol! Sana verilen binaları doğru yerlere yerleştir, şehrini güzelleştir. Hem eğlen, hem de şehir planlamasının temel kurallarını öğren"}/>

      <GameCard src={Game1Logo} id={"2"} title={"Oyun 002"} explanation={"Bu oyunda kendi şehrini tasarlayarak bir şehir planlayıcısı ol! Sana verilen binaları doğru yerlere yerleştir, şehrini güzelleştir. Hem eğlen, hem de şehir planlamasının temel kurallarını öğren"}/>

      <GameCard src={Game1Logo} id={"3"} title={"Oyun 003"} explanation={"Bu oyunda kendi şehrini tasarlayarak bir şehir planlayıcısı ol! Sana verilen binaları doğru yerlere yerleştir, şehrini güzelleştir. Hem eğlen, hem de şehir planlamasının temel kurallarını öğren"}/>

      <GameCard src={Game1Logo} id={"4"} title={"Oyun 004"} explanation={"Bu oyunda kendi şehrini tasarlayarak bir şehir planlayıcısı ol! Sana verilen binaları doğru yerlere yerleştir, şehrini güzelleştir. Hem eğlen, hem de şehir planlamasının temel kurallarını öğren"}/>

    </div>
  )
}

export default GamesPage
