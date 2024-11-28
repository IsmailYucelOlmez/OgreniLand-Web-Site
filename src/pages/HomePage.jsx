import React from 'react'
import StoresComponent from '../components/homepage/StoresComponent'
import HeroBanner from '../components/homepage/HeroBanner'
import FeaturesComponent from '../components/homepage/FeaturesComponent'

const HomePage = () => {
  return (
    <div className='w-3/4 mx-auto mt-6 mb-12 flex flex-col gap-20'>
      
      <HeroBanner/>

      <FeaturesComponent/>

      <StoresComponent/>

    </div>
  )
}

export default HomePage
