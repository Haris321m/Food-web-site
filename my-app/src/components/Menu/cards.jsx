import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';

function Cards({ item, addToCart }) {
  const [count, setCount] = useState(1); // State for count
  const [showPrompt, setShowPrompt] = useState(false); // State for showing prompt

  const handleAddToCart = () => {
    addToCart({ ...item, count }); // Pass the item along with the count
    setCount(1); // Reset count after adding to cart
    setShowPrompt(true); // Show prompt
    setTimeout(() => setShowPrompt(false), 2000); // Hide prompt after 2 seconds
  };

  return (
    <div className="card bg-darkgreen text-center py-2 rounded-xl relative mt-10 mb-10">
      {showPrompt && ( // Conditional rendering for prompt
        <div className="prompt absolute right-0 top-0 bg-green-500 text-white py-1 px-4 rounded-md transform translate-x-full z-10">
          Added Successfully
        </div>
      )}
      <FaRegHeart className="text-3xl right-0 absolute mr-2" />
      <div className="img flex justify-center items-center mt-9">
        <img src={item.path} alt={item.title} className="w-52 h-52 overflow-hidden bg-transparent" />
      </div>
      <div className="text mt-4 mb-4 px-3">
        <h2 className="font-bold">{item.title}</h2>
        <p>{item.description}</p>
        <h2 className="font-bold">Rs. {item.price}</h2>
      </div>
      {/* Buttons for increasing and decreasing count */}
      <div className="count-buttons hidden">
        <button className="count-button" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
        <span className="count">{count}</span>
        <button className="count-button" onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button
        className="bg-green-900 text-white py-2 px-4 rounded-lg absolute left-1/2 transform -translate-x-1/2 -bottom-5 font-bold"
        onClick={handleAddToCart}
      >
        + Add Cart
      </button>

    </div>
  );
}

export default Cards;
