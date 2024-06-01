import React, { useState, useContext } from 'react';
import Content from "./list.js";
import Cards from './cards';
import Poster from './poster.jsx';
import { CartContext } from '../../cart/CartContext.jsx';

function BestSelling() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleImgClick = (card) => {
    setSelectedCard(card);
    setIsVisible(true);
  };

  const handleClosePoster = () => {
    setIsVisible(false);
  };

  const handleAddToCart = () => {
    addToCart({ ...selectedCard, count: 1 }); // Initial count is 1
    setIsVisible(false);
  };

  return (
    <div className="text-center relative">
      <h1 className="text-center lg:mt-12 md:mt-10 sm:mt-8 text-3xl lg:text-5xl font-medium border-b-8 pb-3 border-green-900 inline-block">Best Selling</h1>
      <div className="BestSelling grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 lg:px-20 gap-5 mt-5">
        {Content.map((status, index) => (
          <Cards
            key={status.id}
            img={status.img}
            title={status.title}
            aditional={status.aditional}
            price={status.price}
            onClick={() => handleImgClick(status)}
          />
        ))}
      </div>
      {isVisible && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={handleClosePoster}></div>
          <Poster card={selectedCard} onClose={handleClosePoster} onAddToCart={handleAddToCart} />
        </>
      )}
    </div>
  );
}

export default BestSelling;
