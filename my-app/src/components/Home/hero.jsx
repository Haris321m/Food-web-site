import React, { useState } from 'react';
import img from './imgs/pana.png';
import { Link } from 'react-router-dom';

function Hero() {

    return (
        <div className="hero flex flex-col lg:flex-row justify-between px-5 lg:px-20 pt-20">
            <div className="left lg:w-2/5 xl:w-40%">
                <p className='text-xl'>Welcome to</p>
                <h1 className='font-roboto xl:text-5xl lg:text-4xl md:text-2xl font-bold mt-5'>Foodie Restaurants and Enjoy The Food</h1>
                <p className='mt-5 lg:text-xl md:text-md'>Come to Foodie Restaurants and enjoy delicious food in a cozy atmosphere. You'll love the friendly vibe and yummy meals. Whether you're here for a quick bite or a big meal, we've got something yummy for you. Visit Foodie Restaurants today for a great dining experience!</p>
                <div className="btn mt-5">
                    <Link to='/menu'><button className='px-5 py-2 lg:px-4 lg:py-1 md:px-3 md:py-1 border-2 border-green-900 rounded-xl font-medium xl:text-xl lg:text-lg bg-green-900 text-white hover:cursor-pointer hover:bg-green-950 hover:border-green-950 transition'>Order Now</button></Link>
                    {/* <button className='px-8 py-2 lg:px-4 lg:py-1 md:px-3 md:py-1 ml-5 border-2 border-green-900 rounded-xl font-medium xl:text-xl lg:text-lg text-green-900 hover:cursor-pointer hover:bg-green-900 hover:text-white transition'>Takeaway</button> */}
                </div>
            </div>
            <div className="right lg:w-3/5 xl:w-50%">
                <img src={img} alt="" className='w-full'/>
            </div>
        </div>
    );
}

export default Hero;
