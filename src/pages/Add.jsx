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
        data['email'] = form.email.value
        data['name'] = form.name.value
        console.log(data)
        // fetch("http://localhost:3000/add", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).
        //     then(res => res.json()).
        //     then(out => {
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "Your room added",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //     })
    }
    return (
        <div className='flex justify-center my-[135px]'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleForm}>
                        <h2 className='font-semibold text-2xl text-center py-5'>Add to Find Roommate</h2>
                        <fieldset className="fieldset">
                            <label className="label mt-5">Location</label>
                            <input type="text" className="input" placeholder="Location"
                                name='location' required />

                            <label className="label mt-5">Rent Amount</label>
                            <input type="number" className="input" placeholder="Rent Amount"
                                name='rent' required />

                            <select defaultValue="Pick Room Type" className="select mt-5" name='type'>
                                <option disabled={true}>Pick Room Type</option>
                                <option>Single</option>
                                <option>Double</option>
                                <option>Other</option>
                            </select>
                            <select multiple defaultValue="Lifestyle Preferences" className="select mt-5" name='Lifestyle'>
                                <option disabled={true}>Lifestyle Preferences</option>
                                <option>Pets</option>
                                <option>Smoking</option>
                                <option>Night Owl</option>
                                <option>Other</option>
                            </select>

                            <label className="label mt-5">Description</label>
                            <input type="text" className="input" placeholder="Description"
                                name='description' required />

                            <label className="label mt-5">Contact Info</label>
                            <input type="text" className="input" placeholder="Contact Info"
                                name='contact' required />

                            <select defaultValue="Availability" className="select mt-5" name='Availability'>
                                <option disabled={true}>Availability</option>
                                <option value={true}>Available</option>
                                <option value={false}>Not available</option>
                            </select>
                            <label className="label mt-5">Email</label>
                            <input type="email" className="input" placeholder="Contact Info"
                                name='email' disabled={true} value={user.email} />

                            <label className="label mt-5">Name</label>
                            <input type="text" className="input" placeholder="Contact Info"
                                name='name' disabled={true} value={user.displayName} />

                            <button className="btn btn-primary text-white mt-4" type='submit'>Add Now</button>
                        </fieldset>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Add

