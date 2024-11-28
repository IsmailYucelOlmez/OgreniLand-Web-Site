import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

const GameCard = ({src,title,explanation,id}) => {
  return (
    <Link to={`/game/${id}`} className='flex justify-between items-center w-full'>
        <Image src={src} className={"w-1/3"}/>  

        <div className='flex flex-col gap-2 '>
            <h5 className='text-xl'>{title}</h5>    
            <p>{explanation}</p>
        </div>  
      
    </Link>
  )
}

export default GameCard
