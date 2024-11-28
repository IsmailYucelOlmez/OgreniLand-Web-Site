import React from 'react'
import Image from './Image'

const GameCard = ({src,title,explanation}) => {
  return (
    <div className='flex justify-between items-center w-full'>
        <Image src={src} className={""}/>  

        <div className='flex flex-col gap-2 '>
            <h5 className='text-xl'>{title}</h5>    
            <p>{explanation}</p>
        </div>  
      
    </div>
  )
}

export default GameCard
