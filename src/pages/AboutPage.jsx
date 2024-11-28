import React from 'react'

const AboutPage = () => {
  return (
    <div className='w-3/4 mx-auto flex flex-col gap-6 my-12 min-h-screen'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl'>Hakkımızda</h2>
        <p>ÖğreniLand, çocukların eğlenirken öğrenmesini sağlayan, eğitici ve yaratıcı oyunlar sunan bir mobil uygulamadır. Amacımız, çocukların hayal güçlerini harekete geçirerek, problem çözme, stratejik düşünme ve çevre bilinci gibi önemli beceriler kazanmalarına destek olmaktır.

        Oyunlarımız, artırılmış gerçeklik (AR) teknolojisiyle zenginleştirilmiş, interaktif ve keşfe dayalı bir öğrenme deneyimi sunar. Her detay, çocukların güvenli ve eğlenceli bir ortamda öğrenmelerini sağlamak için titizlikle tasarlanmıştır.
        </p>
      </div>
      
      
      <div className='flex flex-col gap-2'>
        <h6 className='text-xl'>Misyonumuz</h6>
        <p>Çocukların öğrenmeyi sevmesini sağlamak ve onları geleceğin yaratıcı düşünürleri, problem çözücüleri ve liderleri olarak yetiştirmek. </p>
    
      </div>
      
      <div className='flex flex-col gap-2'>
        <h6 className='text-xl'>Vizyonumuz</h6>
        <p>Eğitim ve eğlenceyi birleştirerek, dünya çapında milyonlarca çocuğa ilham veren bir platform olmak.

        ÖğreniLand, öğrenmenin sınırsız, eğlenceli ve herkes için erişilebilir olması gerektiğine inanır. Çocukların her gün yeni şeyler keşfedeceği bu büyülü dünyada, bizler de onların yanındayız!
        </p>
      </div>
      
    
    </div>
  )
}

export default AboutPage
