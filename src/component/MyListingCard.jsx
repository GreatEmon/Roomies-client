import React from 'react'
import { Link } from 'react-router'
import Swal from 'sweetalert2'

const MyListingCard = ({ listing, index }) => {

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://rommies-backend.vercel.app/delete/${listing._id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).
                    then(res => res.json()).
                    then(out => {
                        // console.log(out)
                        if (out.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        } else {
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
        });

}

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{listing.title}</td>
            <td>{listing.location}</td>
            <td>{listing.description}</td>
            <td>{listing.like}</td>
            <td>
                <div className='flex items-center gap-2'>
                    <Link className="btn btn-warning" to={`/update/${listing._id}`}>Edit</Link>
                    <button className="btn btn-error" onClick={handleDelete}>Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default MyListingCard