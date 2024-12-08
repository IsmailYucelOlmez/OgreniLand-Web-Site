import React from 'react'
import Image from './Image'

const GameCard = ({src,title,explanation,id}) => {
  return (
    <div className='flex justify-between items-center xs:gap-8 md:gap-4 w-full xs:h-64 lg:h-80'>
        <Image src={src} className={"xs:w-36 lg:w-72 xs:h-36 lg:h-72 rounded-xl"}/>  

        <div className='flex flex-col xs:gap-1 md:gap-2 '>
            <h5 className='xs:text-lg md:text-xl'>{title}</h5>    
            <p className='xs:text-sm md:text-base'>{explanation}</p>
        </div>  
      
    </div>
  )
}

export default GameCard
