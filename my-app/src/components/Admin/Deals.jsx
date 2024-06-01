import React, { useState } from 'react';
import addDeals from "./deal.js";

function Deals() {
  const [deals, setDeals] = useState([]);
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file)
    };

  const addDeal = () => {
    if (price && image) {
      setDeals([...deals, { price, image }]);
      setPrice('');
      setImage('');
    }
  };

  const deleteDeal = (index) => {
    const updatedDeals = [...deals];
    updatedDeals.splice(index, 1);
    setDeals(updatedDeals);
  };

  const addToCart = (index) => {
    // Add logic to add deal to cart
    addDeals(deals[index]);
    console.log("Added to cart:", deals[index]);
  };

  return (
    <div className="p-6 h-full overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Deals</h2>
      <div className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded p-2 mb-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="border rounded p-2 mb-2 w-full"
          />
        </div>
        <button
          onClick={addDeal}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Deal
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {deals.map((deal, index) => (
          <div key={index} className="border rounded shadow-lg p-4 relative">
            <img src={deal.image} alt={`Deal ${index}`} className="h-48 w-full object-cover rounded mb-4" />
            <p className="mb-4 font-bold">${deal.price}</p>
            <button onClick={() => deleteDeal(index)} className="bg-red-500 text-white p-2 rounded absolute top-0 right-0 m-2">Delete</button>
            <button onClick={() => addToCart(index)} className="bg-green-500 text-white p-2 rounded absolute bottom-0 right-0 m-2">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
