import React from 'react'
import { Banner } from '../component/Banner'
import Feature from '../component/Feature'
import Services from '../component/Services'
import Download from '../component/Download'

const Home = () => {
  document.title = "RoomX"
  return (
    <div className='container mx-auto '>
      <Banner></Banner>
      <Feature></Feature>
      <Services></Services>
      <Download></Download>
    </div>
  )
}

export default Home