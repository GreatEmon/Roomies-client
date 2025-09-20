import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router'
import Footer from '../component/Footer'

const HomeLayout = () => {
  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default HomeLayout