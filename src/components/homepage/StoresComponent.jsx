import React from 'react'
import StoreIcons from '../StoreIcons'

const StoresComponent = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-6 w-full'>
        <div className='flex flex-col gap-2'>
          <h5 className='text-xl'>İndir ve Hemen Başla!</h5>
          <p>Çocuklarınızın hem öğrenmesini hem de eğlenmesini sağlayacak bu AR uygulaması, onların keşfetme arzusunu pekiştirecek ve eğitim hayatlarına katkıda bulunacak. Eğlenceli ve öğretici bir deneyim için hemen keşfedin!</p>
        </div>

        <StoreIcons/>
    </div>
  )
}

export default StoresComponent
