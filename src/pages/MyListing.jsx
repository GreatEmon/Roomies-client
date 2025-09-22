import React from 'react'
import Loading from '../component/Loading'
import { useEffect } from 'react'
import { useState } from 'react'
import { use } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { Link } from 'react-router'
import MyListingCard from '../component/MyListingCard'

const MyListing = () => {
  document.title = "My Listing"
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = use(AuthContext)

  useEffect(() => {
    fetch(`https://rommies-backend.vercel.app/mylist/${user.email}`).
      then(res => res.json()).
      then(r => {
        setData(r)
        setLoading(false)
  })
  }, [user?.email, data])

  if (loading) return <Loading></Loading>
  return (
    <div className='py-10 container mx-auto'>
      {
        data.length > 0 ? <>
          <h1 className='text-3xl text-center font-bold my-10'>My Listing</h1>
          <div className='mx-2 md:mx-0'>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Title</th>
                    <th>location</th>
                    <th>Description</th>
                    <th>Like</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((listing, index) => <MyListingCard key={listing._id} listing={listing} index={index}></MyListingCard>)
                  }
                </tbody>
              </table>
            </div>
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