import React from 'react'
import Loading from '../component/Loading'
import { useState } from 'react'
import { useEffect } from 'react'
import ListingCard from '../component/ListingCard'

const Browse = () => {
    document.title = "Browse Listing"
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://rommies-backend.vercel.app").
            then(res => res.json()).
            then(r => {
                setData(r)
                setLoading(false)
            })
    }, [])

    if (loading) return <Loading></Loading>
    return (
        <div className='py-10 container md:mx-auto'>
            <h1 className='text-3xl text-center font-bold my-10'>All Listed Rooms</h1>
            <div className='grid md:grid-cols-3 gap-5 mx-2 md:mx-0'>
                {
                    data.map(listing => <ListingCard key={listing._id} listing={listing}></ListingCard>)
                }
            </div>
        </div>
    )
}

export default Browse