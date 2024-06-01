import React from 'react';

function Cards({ img, title, price }) {
  return (
    <div className="card border p-4 mb-4 rounded shadow-md">
      <div className="img mb-2">
        <img src={img} alt={title} className="w-full h-96 rounded" />
      </div>
      <div className="text mb-2">
        <h1 className="font-bold text-lg">{title}</h1>
        <h2 className="text-gray-600">${price}</h2>
      </div>
      <div className="btn">
        <button className="bg-green-900 text-white py-2 px-4 rounded">+ Add to Cart</button>
      </div>
    </div>
  );
}

export default Cards;
