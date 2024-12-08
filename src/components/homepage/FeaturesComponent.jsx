import React from 'react'
import Image from '../../components/Image'
import HeroBannerBgv2 from '../../assets/homepagebgv3.svg'

const FeaturesComponent = () => {
  return (
    <div className='flex justify-between items-center '>
        
        <div className='flex flex-col gap-4 xs:w-full md:w-1/3'>
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

        <Image src={HeroBannerBgv2} className={"xs:hidden md:block w-7/12 rounded-xl"}/>
      </div>
  )
}

export default FeaturesComponent
