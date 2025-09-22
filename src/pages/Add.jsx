import React, { use } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2'

const Add = () => {
    document.title = "Add to find";
    const { user } = use(AuthContext)

    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries());
        data['userEmail'] = form.userEmail.value
        data['userName'] = form.userName.value
        data['like'] = 0

        if(form.roomType.value === "Pick Room Type"){
            return Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: " Please Select Room Type",
                        showConfirmButton: false,
                        timer: 1500
                    });
        }

        if(form.availability.value === "Availability"){
            return Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: " Please Select Availability",
                        showConfirmButton: false,
                        timer: 1500
                    });
        }

        data['availability'] = !!Number(form.availability.value)
        const lifestylepreference = form.lifestylePreferences.value
        const cleaned = lifestylepreference.split(',').map(element => element.trim())
        data['lifestylePreferences'] = cleaned



        fetch("https://rommies-backend.vercel.app/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).
            then(res => res.json()).
            then(out => {
                if (out.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your room added",
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

    return (
        <div className='flex justify-center my-[60px]'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleForm}>
                        <h2 className='font-semibold text-2xl text-center py-5'>Add to Find Roommate</h2>
                        <fieldset className="fieldset">
                            <label className="label mt-5">Title</label>
                            <input type="text" className="input" placeholder="Title"
                                name='title' required />

                            <label className="label mt-5">Location</label>
                            <input type="text" className="input" placeholder="Location"
                                name='location' required />

                            <label className="label mt-5">Rent Amount</label>
                            <input type="number" className="input" placeholder="Rent Amount"
                                name='rentAmount' required />

                            <select defaultValue="Pick Room Type" className="select mt-5" name='roomType' required>
                                <option disabled={true}>Pick Room Type</option>
                                <option>Single</option>
                                <option>Double</option>
                                <option>Other</option>
                            </select>
                            <label className="label mt-5">Lifestyle Preferences</label>
                            <input type="text" className="input" placeholder="Lifestyle Preferences(seperated by comma)"
                                name='lifestylePreferences' required />

                            <label className="label mt-5">Description</label>
                            <input type="text" className="input" placeholder="Description"
                                name='description' required />

                            <label className="label mt-5">Contact Info</label>
                            <input type="text" className="input" placeholder="Contact Info"
                                name='contactInfo' required />

                            <select defaultValue="Availability" className="select mt-5" name='availability'>
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

                            <button className="btn btn-primary text-white mt-4" type='submit'>Add Now</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add

