// Explore.js
import React, { useContext, useState, useEffect } from 'react';
import fetchcontent from './list';
import Cards from '../cards';
import { CartContext } from '../../cart/CartContext';

function SnacksBeverages() {
  const { addToCart } = useContext(CartContext);
  const [Content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMenu() {
      try {
        const data = await fetchcontent();
        setContent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadMenu();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      <h1 className="text-4xl font-bold mb-5">Snacks-&-Beverages</h1>
      <div className="explore grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.isArray(Content) && Content.map((item) => (
          <Cards key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default SnacksBeverages;
