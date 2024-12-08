import React from 'react'
import Image from './Image'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/ogrenıland.svg'

const Header = () => {
  return (
    <header className='flex justify-around xs:gap-4 md:gap-10 items-center lg:h-16 bg-[#c4d7d1] w-full text-black border-b border-[#2e294e]'>
      
      <Link to={"/"}>
        <div className='flex justify-center items-center'>
          <Image src={Logo} className={"xs:w-16 lg:w-24 xs:h-16 lg:h-24"}/>
          <h1 className='xs:text-base md:text-xl font-spicyRice'>ÖğreniLand</h1>
        </div>
      </Link>
      
      

      <div className='flex justify-center items-center gap-2'>
        <NavLink to={'/'} className={({isActive})=>`${isActive ? 'underline underline-offset-4 font-semibold ':''} hover:underline-offset-4 hover:underline xs:text-sm md:text-base`}>Ana Sayfa</NavLink>
        <NavLink to={'/games'} className={({isActive})=>`${isActive ? 'underline underline-offset-4 font-semibold ':''} hover:underline-offset-4 hover:underline xs:text-sm md:text-base`}>Oyunlarımız</NavLink>
        <NavLink to={'/about'} className={({isActive})=>`${isActive ? 'underline underline-offset-4 font-semibold ':''} hover:underline-offset-4 hover:underline xs:text-sm md:text-base`}>Hakkımızda</NavLink>
      </div>
    </header>
  )
}

export default Header
