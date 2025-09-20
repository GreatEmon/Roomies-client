import React from 'react'

const Contact = () => {
    return (
        <div className="hero bg-base-100 md:py-40">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Contact Us</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <p className="py-2">
                        <ul>
                            <li>support@roomx.com</li>
                            <li>+965 1256 8563</li>
                            <li>Dhaka, Bangladesh</li>
                        </ul>
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Message</label>
                            <textarea type="text" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Reach Us</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact