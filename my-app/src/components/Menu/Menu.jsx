import React, { useState, useRef } from 'react';
import Explore from './Explore/explore';
import Promotions from './Promotions/Promotions';
import SignatureBoxes from './SignatureBoxes/SignatureBoxes';
import Sharing from './Sharing/Sharing';
import SnacksBeverages from './Snacks-&-Beverages/Snacks-&-Beverages';
import ScrollToTop from "react-scroll-to-top";

function Menu() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const exploreRef = useRef(null);
  const promotionsRef = useRef(null);
  const signatureBoxesRef = useRef(null);
  const snacksBeveragesRef = useRef(null);
  const sharingRef = useRef(null);
  const midnightRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const parsePrice = (price) => {
    if (typeof price === 'string') {
      const parsedPrice = parseInt(price.replace('Rs ', ''), 10);
      if (!isNaN(parsedPrice)) {
        return parsedPrice;
      }
    }
    console.error('Error parsing price:', price);
    return 0;
  };

  const addToCart = (item) => {
    const itemPrice = parsePrice(item.price);
    setCartItems([...cartItems, item]);
    setTotalPrice((prevTotal) => prevTotal + itemPrice);
    console.log(`Added item: ${item.title}, Price: ${itemPrice}, Total Price: ${totalPrice}`);
  };

  const removeFromCart = (index) => {
    const item = cartItems[index];
    const itemPrice = parsePrice(item.price);
    setCartItems(cartItems.filter((_, i) => i !== index));
    setTotalPrice((prevTotal) => prevTotal - itemPrice);
    console.log(`Removed item: ${item.title}, Price: ${itemPrice}, Total Price: ${totalPrice}`);
  };

  return (
    <>
    <ScrollToTop smooth />
      <div className="nav grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full m-auto list-none px-5 gap-5 mt-5">
        <li onClick={() => scrollToSection(exploreRef)} className="py-2 px-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:shadow-md hover:bg-green-900 hover:text-white transition">Everyday Value</li>
        <li onClick={() => scrollToSection(promotionsRef)} className="py-2 px-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:shadow-md hover:bg-green-900 hover:text-white transition">Promotions</li>
        <li onClick={() => scrollToSection(signatureBoxesRef)} className="py-2 px-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:shadow-md hover:bg-green-900 hover:text-white transition">Signature Boxes</li>
        <li onClick={() => scrollToSection(snacksBeveragesRef)} className="py-2 px-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:shadow-md hover:bg-green-900 hover:text-white transition">Snacks & Beverages</li>
        <li onClick={() => scrollToSection(sharingRef)} className="py-2 px-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:shadow-md hover:bg-green-900 hover:text-white transition">Sharing</li>
        <li onClick={() => scrollToSection(midnightRef)} className="py-2 px-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:shadow-md hover:bg-green-900 hover:text-white transition">Midnight (Start at 12 am)</li>
      </div>
      <div className="main flex flex-col lg:flex-row mt-10 w-full">
        <div className="left w-full px-5">
          <Explore ref={exploreRef} addToCart={addToCart} />
          <Promotions ref={promotionsRef} addToCart={addToCart} />
          <SignatureBoxes ref={signatureBoxesRef} addToCart={addToCart} />
          <Sharing ref={sharingRef} addToCart={addToCart} />
          <SnacksBeverages ref={snacksBeveragesRef} addToCart={addToCart} />
        </div>
      </div>
    </>
  );
}

export default Menu;
