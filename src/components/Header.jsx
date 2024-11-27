import React from 'react'
import Image from './Image'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/ogrenıland.svg'

const Header = () => {
  return (
    <header className='flex justify-around gap-10 items-center lg:h-16 bg-[#c4d7d1] w-full text-black border-b border-[#2e294e]'>
      
      <div className='flex justify-center items-center'>
        <Image src={Logo} className={"w-24 h-24"}/>
        <h1 className='text-xl font-spicyRice'>ÖğreniLand</h1>
      </div>
      

      <div className='flex justify-center items-center gap-2'>
        <NavLink to={'/'} className={({isActive})=>`${isActive ? 'underline underline-offset-4 font-semibold ':''} hover:underline-offset-4 hover:underline`}>Ana Sayfa</NavLink>
        <NavLink to={'/games'} className={({isActive})=>`${isActive ? 'underline underline-offset-4 font-semibold ':''} hover:underline-offset-4 hover:underline`}>Oyunlarımız</NavLink>
        <NavLink to={'/about'} className={({isActive})=>`${isActive ? 'underline underline-offset-4 font-semibold ':''} hover:underline-offset-4 hover:underline`}>Hakkımızda</NavLink>
        <NavLink to={'/contact'} className={({isActive})=>`${isActive ? 'underline underline-offset-4 font-semibold ':''} hover:underline-offset-4 hover:underline`}>İletişim</NavLink>
      </div>
    </header>
  )
}

export default Header
