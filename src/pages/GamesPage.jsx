import React from 'react'
import GameCard from '../components/GameCard'
import Game1Logo from '../assets/Ideapolıs.png'
import Game2Logo from '../assets/LittleExplorers.png'
import Game3Logo from '../assets/furryFriendsLogo.png'
import Game4Logo from '../assets/calendarPuzzleLogo.png'

const GamesPage = () => {
  return (
    <div className='xs:w-9/10 lg:w-3/4 mx-auto flex flex-col items-center '>
      
      <GameCard src={Game1Logo} id={"1"} title={"IdeaPolis"} explanation={"Bu oyunda kendi şehrini tasarlayarak bir şehir planlayıcısı ol! Sana verilen binaları doğru yerlere yerleştir, şehrini güzelleştir. Hem eğlen, hem de şehir planlamasının temel kurallarını öğren"}/>

      <GameCard src={Game2Logo} id={"2"} title={"Little Explorers"} explanation={"Çocukların hayvanları ve çiçekleri tanımlamayı ve saymayı öğrenirken doğaya olan sevgilerini keşfetmelerine yardımcı olur. Canlı grafikler ve etkileşimli bir AR deneyimiyle çocuklar oyun yoluyla öğrenmenin keyfini çıkarabilir!"}/>

      <GameCard src={Game3Logo} id={"3"} title={"Furry Friends"} explanation={"Kullanıcılar kartlarını tarayarak çeşitli soruları yanıtlayabilir ve her soru için üç farklı seçeneği değerlendirebilir. Bu uygulama çocukların temel matematik becerilerini geliştirmelerine yardımcı olur."}/>

      <GameCard src={Game4Logo} id={"4"} title={"Calendar Puzzle"} explanation={"Calendar Puzzle, çocuklara tarih ve saat kavramlarını öğretmek için tasarlanmış bir uygulamadır. Uygulama, kullanıcılara gelecekteki bir tarih hakkında sorular sorar ve bunları çözmelerine yardımcı olur."}/>

    </div>
  )
}

export default GamesPage
