import React from 'react'
import Image from '../../components/Image'
import HeroBannerBg from '../../assets/ARHeroBanner.svg'

const HeroBanner = () => {
  return (
    <div className='flex justify-between items-center '>
        <div className='flex flex-col gap-4 xs:w-full md:w-1/3'>
          <h5 className='text-2xl font-spicyRice'>ÖğreniLand</h5>

          <h6 className='text-lg'>Eğlenceli ve Öğretici AR Uygulaması ile Çocuklar Yeni Bir Dünyayı Keşfetsin!</h6>

          <p>Hayal gücünün sınırlarını zorlayan bir artırılmış gerçeklik (AR) deneyimi ile çocukların öğrenme sürecini tamamen değiştiren uygulamamız çocuklar için özel olarak tasarlanmıştır. Bu uygulama, çocukların eğlenerek öğrendikleri, etkileşimli ve öğretici bir dünya sunar.</p>
        </div>

        <Image src={HeroBannerBg} className={"xs:hidden md:block w-1/2 rounded-lg"}/>
      </div>
  )
}

export default HeroBanner
