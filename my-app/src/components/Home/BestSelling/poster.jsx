// src/components/Poster/Poster.js
import React, { useState, useContext } from 'react';
import { ImCross } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CartContext } from '../../cart/CartContext';
import Fries_Content from './Fries';
import Fries_Cards from './Fries-card';
import Drink_Content from './Drink';
import Drink_Cards from './Drink-card';
import Beverage_Content from './beverage';
import Beverage_Cards from './beverage-card';
import AddOneData_Content from './addonedata';
import AddOneData_Cards from './addonedata-card';
import '../../../App.css';

function Poster({ card, onClose }) {
  const [count, setCount] = useState(1);
  const [dropdowns, setDropdowns] = useState({
    fries: false,
    drink: false,
    beverage: false,
    addOnes: false
  });

  const { addToCart } = useContext(CartContext);

  function toggleDropdown(section) {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [section]: !prevDropdowns[section]
    }));
  }

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function handleAddToCart() {
    addToCart({
      id: card.id,
      img: card.img,
      title: card.title,
      price: card.price,
      count: count
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
      <div className="relative bg-darkgreen rounded-xl flex flex-col lg:flex-row w-full max-w-xl h-full max-h-[90%] p-5 scrollbar-thin scrollbar-track-greenyellow scrollbar-thumb-green-900 overflow-y-scroll py-10">
        <button
          className="absolute top-2 right-2 text-white bg-green-900 p-2 rounded-full"
          onClick={onClose}
        >
          <ImCross />
        </button>

        <div className="right w-full lg:w-100% flex flex-col justify-between mt-5 lg:mt-0">
          <div className="poster w-full aspect-w-3 aspect-h-4 lg:aspect-w-16 lg:aspect-h-9">
            <img src={card.img} alt="" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="CardDetails w-full bg-black bg-opacity-70 text-white p-6 rounded-xl -mt-36">
            <h1 className="text-4xl font-bold">{card.title}</h1>
            <p className='font-medium'>{card.additional}</p>
            <p className=' text-2xl mt-6'>Price: {card.price}</p>
          </div>
          <div className="flex justify-center mt-5">
            <button onClick={increase} className='px-5 py-3 rounded-xl text-white bg-green-900 font-bold text-2xl'>+</button>
            <h1 className='text-2xl font-bold px-5'>{count}</h1>
            <button onClick={decrease} className='px-5 py-3 rounded-xl text-white bg-green-900 font-bold text-2xl'>-</button>
          </div>
          <div className='pb-10'>
            <button
              className='mt-5 px-10 py-3 bg-green-900 text-white font-bold rounded-xl'
              onClick={handleAddToCart}
            >
              + Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
