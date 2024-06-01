import React, { useState, useContext, useEffect } from 'react';
import fetchDeals from './list'; // Import the correct function
import Cards from './cards';
import Poster from './poster';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from '../cart/CartContext';

function Deals() {
    const [selectedItem, setSelectedItem] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [content, setContent] = useState([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Add error state

    useEffect(() => {
        async function loadDeals() {
            try {
                const data = await fetchDeals(); // Use the correct function
                setContent(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadDeals();
    }, []);

    const handleCardClick = (item) => {
        setSelectedItem(item);
    };

    const handleClosePoster = () => {
        setSelectedItem(null);
    };

    const handleAddToCart = (item) => {
        addToCart(item);
        setSelectedItem(null);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="deals my-20 text-center">
            <Link to="/" className="inline-flex items-center mb-5">
                <MdOutlineArrowBackIos className="mr-2" />
                <h1 className="text-5xl font-bold hover:text-green-500">Deals</h1>
            </Link>
            <h1 className="font-bold text-6xl mb-10">Deals</h1>
            <div className="grid grid-cols-2 gap-10 w-4/5 mx-auto">
                {content.map((item, index) => ( // Use the 'content' state
                    <Cards
                        key={index}
                        img={item.path}
                        onClick={() => handleCardClick(item)}
                        isSelected={selectedItem === item}
                        price={item.price}
                        onAddToCart={() => handleAddToCart(item)} // Pass the function here
                    />
                ))}
            </div>
            {selectedItem && (
                <Poster
                    img={selectedItem.path}
                    price={selectedItem.price}
                    onClose={handleClosePoster}
                    onAddToCart={() => handleAddToCart(selectedItem)} // Pass the function here
                />
            )}
        </div>
    );
}

export default Deals;
