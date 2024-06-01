import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

function Cards({ img, title, aditional, price, onClick }) {
    return (
        <div className="card relative rounded-xl overflow-hidden hover:cursor-pointer hover:shadow-black hover:shadow-lg" onClick={onClick}>
            <div className="img w-[100%] h-[100%]">
                <img src={img} alt="" className='w-[100%]' />
            </div>
            <div className='absolute text-white bg-green-900 top-10 lg:p-3 md:p-2 lg:text-xl md:text-md right-0 rounded-2xl'>+ Add to Cart</div>
            <div className="text absolute bottom-0 text-white px-5 font-medium py-5 bg-black bg-opacity-40 w-[100%] rounded-xl h-32">
                <h1 className='text-xl'>{title}</h1>
                <h3 className='font-thin'>{aditional}</h3>
                <h2 className='relative lg:-bottom-3 md:-bottom-1 lg:text-xl md:text-md'>Rs {price}</h2>
            </div>
        </div>
    );
}

export default Cards;
