import React from 'react'
import GameCard from '../components/GameCard'

const GamesPage = () => {
  return (
    <div className='w-3/4 mx-auto my-12 flex flex-col gap-5'>
      
      <GameCard/>

      <GameCard/>
    </div>
  )
}

export default GamesPage
