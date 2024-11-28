import React from 'react'
import Image from '../../components/Image'
import playStoreLogo from '../../assets/play-store-logo.png'
import appStoreLogo from '../../assets/appstorelogo.png'
import { Link } from 'react-router-dom'

const StoresComponent = () => {
  return (
    <div className='flex justify-between items-center w-full'>
        <div className='flex flex-col gap-2'>
          <h5 className='text-xl'>İndir ve Hemen Başla!</h5>
          <p>Çocuklarınızın hem öğrenmesini hem de eğlenmesini sağlayacak bu AR uygulaması, onların keşfetme arzusunu pekiştirecek ve eğitim hayatlarına katkıda bulunacak. Eğlenceli ve öğretici bir deneyim için hemen keşfedin!</p>
        </div>

        <div className='flex justify-center items-center '>
          <Link to={"/play-store"} className="w-1/3">
            <Image src={playStoreLogo}  />
          </Link>
          <Link to={"/app-store"} className="w-1/3">
            <Image src={appStoreLogo}  />
          </Link>           
        </div>
    </div>
  )
}

export default StoresComponent
