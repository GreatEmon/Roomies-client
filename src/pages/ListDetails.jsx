import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router'
import Loading from '../component/Loading'
import { use } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import Swal from 'sweetalert2'

const ListDetails = () => {
    const { id } = useParams()
    const { user } = use(AuthContext)
    const [listing, setListing] = useState({})
    const [loading, setLoading] = useState(true)
    const [likes, setLikes] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:3000/details/${id}`).
            then(res => res.json()).
            then(r => {
                setListing(r)
                setLikes(r.like)
                setLoading(false)

            })

    }, [])

    const handleLike = e => {
        if (user.email === listing.userEmail) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can't react on your own list",
            });
        }else{
            setLikes(likes + 1)
        }
    }


    if (loading) return <Loading></Loading>

    return (
        <div className=" bg-base-200 flex justify-center p-6 my-3 py-8 md:mx-0 mx-3">
            <div className="max-w-3xl w-full bg-base-100 shadow-xl rounded-lg p-6">
                {/* Header */}
                <div className="border-b pb-4 mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-primary">{listing?.title}</h1>
                        <p className="text-gray-600 mt-1">{listing?.location}</p>
                    </div>

                    {/* Like button */}
                    <button
                        onClick={handleLike}
                        className={`btn btn-outline btn-primary`}
                    >
                        ❤️ {likes}
                    </button>
                </div>

                {/* Top Info */}
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                        <div>
                            <span className="font-semibold">Rent Amount:</span>{" "}
                            <span className="badge badge-primary badge-outline">
                                ৳ {listing?.rentAmount}
                            </span>
                        </div>
                        <div>
                            <span className="font-semibold">Room Type:</span>{" "}
                            <span className="badge badge-secondary badge-outline">
                                {listing?.roomType}
                            </span>
                        </div>
                        <div>
                            <span className="font-semibold">Availability:</span>{" "}
                            {listing?.availability ? (
                                <span className="badge badge-success">Available</span>
                            ) : (
                                <span className="badge badge-error">Not Available</span>
                            )}
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold mb-2">Lifestyle Preferences:</p>
                        <div className="flex flex-wrap gap-2">
                            {listing?.lifestylePreferences.map((pref, i) => (
                                <span key={i} className="badge badge-outline">
                                    {pref}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-700 leading-relaxed">
                        {listing?.description}
                    </p>
                </div>

                {/* Contact & User Info */}
                <div className="border-t pt-6">
                    <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
                    <p className="mb-1">
                        <span className="font-semibold">Phone:</span>{" "}
                        {listing?.contactInfo}
                    </p>
                    <p>
                        <span className="font-semibold">Listed By:</span>{" "}
                        {listing?.userName} ({listing?.userEmail})
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center mt-8 gap-3">
                    <Link className="btn btn-outline btn-primary" to={-1}>
                        Back to Listings
                    </Link>
                    <button className="btn btn-primary">
                        Contact Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListDetails