import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export const Banner = () => {
    return (
        <div className='my-5 flex justify-center'>
            <div className="carousel w-full mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-[650px]"
                        style={{
                            backgroundImage:
                                "url(https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?_gl=1*1agau0v*_ga*MTUwOTUwMTU4NC4xNzQ0ODI2NDEx*_ga_8JE65Q40S6*czE3NTgzMTQ0NzUkbzE1JGcxJHQxNzU4MzE0OTYyJGoyNCRsMCRoMA..)",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-5xl font-bold">
                                    <Typewriter
                                        words={['Welcome to RoomX', 'Match with the Right Roommate', 'Your Ideal Home Starts Here']}
                                        cursor
                                    />
                                </h1>
                                <p className="mb-5">
                                    Find the perfect roommate in just a few clicks. RoomX connects you with people who share your budget, lifestyle, and location preferences—making your next move stress-free and simple.
                                </p>
                                <button className="btn btn-primary">Explore Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide2" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-[650px]"
                        style={{
                            backgroundImage:
                                "url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?_gl=1*1msxsf1*_ga*MTUwOTUwMTU4NC4xNzQ0ODI2NDEx*_ga_8JE65Q40S6*czE3NTgzMTQ0NzUkbzE1JGcxJHQxNzU4MzE3MTczJGo1OSRsMCRoMA..)",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-5xl font-bold">
                                    <Typewriter
                                        words={['Welcome to RoomX', 'Match with the Right Roommate', 'Your Ideal Home Starts Here']}
                                        cursor
                                    />
                                </h1>
                                <p className="mb-5">
                                    Discover compatible roommates based on interests, habits, and living style. RoomX’s smart filters help you save time and avoid awkward mismatches.
                                </p>
                                <button className="btn btn-primary">Find Roommade</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                
                <div id="slide3" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-[650px]"
                        style={{
                            backgroundImage:
                                "url(https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?_gl=1*5s2pxs*_ga*MTUwOTUwMTU4NC4xNzQ0ODI2NDEx*_ga_8JE65Q40S6*czE3NTgzMTQ0NzUkbzE1JGcxJHQxNzU4MzE3MjI3JGo1JGwwJGgw)",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-5xl font-bold">
                                    <Typewriter
                                        words={['Welcome to RoomX', 'Match with the Right Roommate', 'Your Ideal Home Starts Here']}
                                        cursor
                                    />
                                </h1>
                                <p className="mb-5">
                                    Whether you’re new in town or just need a better fit, RoomX makes it easy to browse listings, chat securely, and move in with confidence.
                                </p>
                                <button className="btn btn-primary">Let's Start</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
