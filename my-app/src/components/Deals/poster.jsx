// Poster.js
import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../cart/CartContext';

function Poster({ img, title, description, price, id, onClose }) {
    const { addToCart } = useContext(CartContext);
    const {Content,setContent}=useState();
    const handleAddToCart = () => {
        const item = { id, img, title, description, price };
        addToCart(item);
        alert("add in cart");
        onClose();
    };
   
    

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <img src={img} alt={title} className="w-full h-64 object-cover rounded-t-lg" />
                <h2 className="text-3xl font-bold my-4">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <p className="text-2xl font-bold text-gray-900 mb-4">${price}</p>
                <button 
                    onClick={handleAddToCart} 
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4"
                >
                    Add to Cart
                </button>
                <button 
                    onClick={onClose} 
                    className="text-gray-500 hover:text-gray-800"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Poster;
