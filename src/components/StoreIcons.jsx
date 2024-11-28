import React from 'react'
import Image from '../components/Image'
import playStoreLogo from '../assets/play-store-logo.png'
import appStoreLogo from '../assets/appstorelogo.png'
import { Link } from 'react-router-dom'

const StoreIcons = () => {
  return (
    <div className='flex justify-center items-center '>
        <Link to={"/play-store"} className="w-1/5">
            <Image src={playStoreLogo}  />
        </Link>
        <Link to={"/app-store"} className="w-1/5">
            <Image src={appStoreLogo}  />
        </Link>           
    </div>
  )
}

export default StoreIcons
