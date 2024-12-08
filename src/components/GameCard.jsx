import React from 'react'
import Image from './Image'

const GameCard = ({src,title,explanation,id}) => {
  return (
    <div className='flex justify-between items-center gap-4 w-full lg:h-80'>
        <Image src={src} className={"w-72 h-72 rounded-xl"}/>  

        <div className='flex flex-col gap-2 '>
            <h5 className='text-xl'>{title}</h5>    
            <p>{explanation}</p>
        </div>  
      
    </div>
  )
}

export default GameCard
