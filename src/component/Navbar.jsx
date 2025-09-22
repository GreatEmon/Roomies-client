import React, { use } from 'react'
import { Link } from 'react-router'
import { NavLink } from 'react-router'
import { AuthContext } from '../Context/AuthProvider'

const Navbar = () => {

    const { user } = use(AuthContext)

    const menu = <div className='md:flex gap-4'>
        <li><NavLink to="/" className="px-3 py-2">Home</NavLink></li>
        <li><NavLink to="add" className="px-3 py-2">Add to Find Roommate</NavLink></li>
        <li><NavLink to="browse" className="px-3 py-2">Browse Listing</NavLink></li>
        <li><NavLink to="mylist" className="px-3 py-2">My Listings</NavLink></li>
    </div>

    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {menu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">RoomX</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>

            <div className="navbar-end space-x-2">
                <label className="toggle text-base-content text-xl mr-4">
                    <input type="checkbox" value="synthwave" className="theme-controller" />
                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                </label>
                {!user ? <Link to="/login" className='btn btn-outline btn-primary'>Login</Link> : <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={user?.photoURL ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                            title={user?.displayName}
                        />
                    </div>
                </div>}
                
                {!user ? <Link to="/register" className='btn btn-primary'>Signup</Link> : <Link to="/logout" className='btn btn-primary'>Signout</Link>}
            </div>
        </div>
    )
}

export default Navbar