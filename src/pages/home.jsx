import React from 'react'
import Navbar from '../components/navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div className='container'>
      <Announcement/>
      <Navbar/>
      <Slider/>
    </div>
  )
}

export default Home