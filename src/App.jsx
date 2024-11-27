import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import GamesPage from './pages/GamesPage'
import GameDetailsPage from './pages/GameDetailsPage'
import ContactPage from './pages/ContactPage'

function App() {
  
  return (
    <div className='bg-[#eadeda]'>
      <Header/>

      <Routes>
        <Route path='/' element={<HomePage/>} />  
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/games' element={<GamesPage/>} />
        <Route path='/game/:id' element={<GameDetailsPage/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
