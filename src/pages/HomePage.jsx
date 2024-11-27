import React from 'react'
import Image from '../components/Image'
import HeroBannerBg from '../assets/ARHeroBanner.svg'
import HeroBannerBgv2 from '../assets/homepagebgv3.svg'

const HomePage = () => {
  return (
    <div className='w-3/4 mx-auto mt-6 mb-12'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-4 w-1/3'>
          <h5 className='text-2xl font-spicyRice'>ÖğreniLand</h5>

          <h6 className='text-lg'>Eğlenceli ve Öğretici AR Uygulaması ile Çocuklar Yeni Bir Dünyayı Keşfetsin!</h6>

          <p>Hayal gücünün sınırlarını zorlayan bir artırılmış gerçeklik (AR) deneyimi ile çocukların öğrenme sürecini tamamen değiştiren uygulamamız çocuklar için özel olarak tasarlanmıştır. Bu uygulama, çocukların eğlenerek öğrendikleri, etkileşimli ve öğretici bir dünya sunar.</p>
        </div>

        <Image src={HeroBannerBg} className={"w-1/2 rounded-lg"}/>
      </div>

      <div className='flex justify-between items-center my-12'>
        
        <div className='flex flex-col gap-4 w-1/3'>
          <div>
            <h6 className='text-lg'>Etkileşimli Eğitim</h6>                         
            <p>Çocuklar, sanal nesnelerle etkileşimde bulunarak öğrendikleri konuları daha iyi kavrayacak.</p>
          </div>
          <div>
          <h6 className='text-lg'>AR Teknolojisi ile Öğrenme</h6>
          <p>Gerçek dünyaya entegre edilen sanal öğeler, çocukların bilgiyi daha kolay sindirmelerine yardımcı olacak.</p>
          </div>
          <div>
          <h6 className='text-lg'>Görsel ve Sesli Anlatımlar</h6>
          <p>Her bir görev, çocukların ilgisini çekecek renkli grafikler ve açıklayıcı sesli rehberlerle desteklenir.</p>
          </div>
          <div>
          <h6 className='text-lg'>Yaratıcılığı Geliştirici Aktiviteler</h6>
          <p>Çocuklar, yaratıcı düşünme becerilerini geliştiren oyunlar ve görevlerle hem eğlenir hem de yeni beceriler kazanır.</p>
          </div>
          <div>
          <h6 className='text-lg'>Güvenli ve Kontrollü Alan</h6>
          <p>Her şey, çocukların yaşına uygun içeriklerle güvenli bir şekilde tasarlanmış, kolayca anlaşılabilir.</p>
          </div>
                                     
        </div>

        <Image src={HeroBannerBgv2} className={"w-7/12 rounded-xl"}/>
      </div>

      <div>

      </div>
    </div>
  )
}

export default HomePage
