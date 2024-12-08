import React from 'react'
import { Link } from 'react-router-dom'

const StoresComponent = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-6 w-full'>
        <div className='flex flex-col gap-2'>
          <h5 className='text-xl'>İndir ve Hemen Başla!</h5>
          <p>Çocuklarınızın hem öğrenmesini hem de eğlenmesini sağlayacak bu AR uygulaması, onların keşfetme arzusunu pekiştirecek ve eğitim hayatlarına katkıda bulunacak. Eğlenceli ve öğretici bir deneyim için hemen keşfedin!</p>
        </div>

        <Link to={"https://expo.dev/accounts/hamza4949/projects/ymgkproje/builds/37bb6da6-27a2-46c9-880d-0ff019d7dd0d"} className='italic underline underline-offset-2'>Android APK</Link>
    </div>
  )
}

export default StoresComponent
