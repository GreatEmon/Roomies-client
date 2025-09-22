import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2'
import { useParams } from 'react-router';
import Loading from "../component/Loading"

const UpdateInfo = () => {
    document.title = "Update Details";
    const { user } = use(AuthContext)
    const { id } = useParams()
    const [listing, setListing] = useState({})
    const [load, setload] = useState(true)
    const [likes, setLikes] = useState(0)

    useEffect(() => {
        fetch(`https://rommies-backend.vercel.app/details/${id}`).
            then(res => res.json()).
            then(r => {
                setListing(r)
                setLikes(r.like)
                setload(false)
            })
    }, [])


    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries());
        data['availability'] = !!Number(form.availability.value)
        const lifestylepreference = form.lifestylePreferences.value
        const cleaned = lifestylepreference.split(',').map(element => element.trim())
        data['lifestylePreferences'] = cleaned
        console.log(data)

        fetch(`https://rommies-backend.vercel.app/update/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).
            then(res => res.json()).
            then(out => {
                // console.log(out)
                if (out.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }else{
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Something wrong",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
    }
    if(load) return <Loading></Loading>
    return (
        <div className='flex justify-center my-[60px]'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleForm}>
                        <h2 className='font-semibold text-2xl text-center py-5'>Update Information</h2>
                        <fieldset className="fieldset">
                            <label className="label mt-5">Title</label>
                            <input type="text" className="input" placeholder="Title"
                                name='title' required defaultValue={listing.title} />

                            <label className="label mt-5">Location</label>
                            <input type="text" className="input" placeholder="Location"
                                name='location' required defaultValue={listing.location} />

                            <label className="label mt-5">Rent Amount</label>
                            <input type="number" className="input" placeholder="Rent Amount"
                                name='rentAmount' required defaultValue={listing.rentAmount} />

                            <select className="select mt-5" name='roomType' defaultValue={listing.roomType} >
                                <option disabled={true}>Pick Room Type</option>
                                <option value="Single">Single</option>
                                <option value="Double">Double</option>
                                <option value="Other">Other</option>
                            </select>
                            <label className="label mt-5">Lifestyle Preferences</label>
                            <input type="text" className="input" placeholder="Lifestyle Preferences(seperated by comma)"
                                name='lifestylePreferences' required defaultValue={listing.lifestylePreferences} />

                            <label className="label mt-5">Description</label>
                            <input type="text" className="input" placeholder="Description"
                                name='description' required defaultValue={listing.description} />

                            <label className="label mt-5">Contact Info</label>
                            <input type="text" className="input" placeholder="Contact Info"
                                name='contactInfo' required defaultValue={listing.contactInfo} />

                            <select className="select mt-5" name='availability' defaultValue={listing.availability ? "Available" : "Not available"}>
                                <option disabled={true}>Availability</option>
                                <option value="1">Available</option>
                                <option value="0">Not available</option>
                            </select>
                            <label className="label mt-5">Email</label>
                            <input type="email" className="input" placeholder="Contact Info"
                                name='userEmail' disabled={true} value={user.email} />

                            <label className="label mt-5">Name</label>
                            <input type="text" className="input" placeholder="Contact Info"
                                name='userName' disabled={true} value={user.displayName} />

                            <button className="btn btn-primary text-white mt-4" type='submit'>Update</button>
                        </fieldset>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default UpdateInfo