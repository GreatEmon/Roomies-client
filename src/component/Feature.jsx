import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../component/Loading'
import ListingCard from './ListingCard'

const Feature = () => {

  const [data,setData] = useState([])
  const [loading,setLoading]  = useState(true)

  useEffect(() => {

    fetch("http://localhost:3000/home").
    then(res => res.json()).
    then(r => setData(r))
    setLoading(false)
  }, [])
 
  if(loading) return <Loading></Loading>
  return (
    <div className='py-10 md:mx-0 mx-2'>
        <h1 className='text-3xl text-center font-bold my-10'>Feature Rooms</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
              data.map(listing => <ListingCard key = {listing._id} listing={listing}></ListingCard>)
            }
        </div>
    </div>
  )
}

export default Feature