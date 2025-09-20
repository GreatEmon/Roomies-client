import React from 'react'
import Loading from '../component/Loading'
import { useEffect } from 'react'
import { useState } from 'react'
import ListingCard from '../component/ListingCard'
import { use } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { Link } from 'react-router'

const MyListing = () => {
  const [data,setData] = useState([])
  const [loading,setLoading]  = useState(true)
  const {user} =use(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:3000/mylist/${user.email}`).
    then(res => res.json()).
    then(r => setData(r))
    setLoading(false)
  }, [user?.email])
 
  if(loading) return <Loading></Loading>
  console.log(data)
  return (
    <div className='py-10 container mx-auto'>
        
        {
            data.length > 0 ? <>
            <h1 className='text-3xl text-center font-bold my-10'>My Listing</h1>
            <div className='grid md:grid-cols-3 gap-5 mx-2 md:mx-0'>
            {
              data.map(listing => <ListingCard key = {listing._id} listing={listing}></ListingCard>)
            }
        </div>
            </> : <div className='text-center'>
            <h1 className='my-5 text-3xl text-center'> No List found</h1>
            <Link to='/add' className=" btn btn-primary my-5 px-4 py-4 text-white text-bold text-xl rounded-xl">Add List Item</Link>
            </div>
        }
        
    </div>
  )
}

export default MyListing