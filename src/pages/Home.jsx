import React from 'react'
import { Banner } from '../component/Banner'
import Feature from '../component/Feature'
import Services from '../component/Services'
import Download from '../component/Download'
import { Fade, Slide, Bounce } from "react-awesome-reveal";

const Home = () => {
  document.title = "RoomX"
  return (
    <div className='container mx-auto '>
      <Fade triggerOnce>
      <Banner></Banner>
      </Fade>
      <Slide triggerOnce>
      <Feature></Feature>
      </Slide >
      <Slide direction='right' triggerOnce>
      <Services></Services>
      </Slide>
      <Bounce triggerOnce>
      <Download></Download>
      </Bounce>
    </div>
  )
}

export default Home