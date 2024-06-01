import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import OrderChannel from '../proceed/Order-Channel';
import '../../App.css';

function Cart() {
  const { cart, totalPrice, removeFromCart, increaseItemCount, decreaseItemCount, notification } = useContext(CartContext);
  const [showOrderChannel, setShowOrderChannel] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = () => {
    // Check if a token or flag is present in local storage to determine authentication
    return localStorage.getItem('authToken') !== null;
  };

  const handleProceedToCheckout = () => {
    if (!isAuthenticated()) {
      navigate('/login');
    } else if (cart.length > 0) {
      setShowOrderChannel(true);
    }
  };

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handleCloseOrderChannel = () => {
    setShowOrderChannel(false);
  };

  const menuName = "Sample Menu"; // Placeholder, replace with actual menu name

  return (
    <div className="cart-container">
      <div className="bg-darkgreen rounded-xl w-80% m-auto p-5 my-10">
        <div className="header border-b-2 border-green-900 text-2xl font-bold text-white p-5">
          {cart.length} items
        </div>
        <div className="main h-96 overflow-y-scroll scrollbar-thin scrollbar-track-greenyellow scrollbar-thumb-green-900">
          {cart.map((item) => (
            <div key={item.id} className="cart-item flex mt-4 border-b-2 border-green-900 py-5">
              <img src={item.img} alt="item" className="w-32 h-32" />
              <div className="item-details text-2xl ml-5 flex justify-between items-center">
                <p>{item.title}</p>
                <p className='ml-3'>{item.count} x Rs {item.price}</p>
                <div className="buttons ml-5 text-center">
                  <button className="increment px-5 py-2 bg-green-900 text-white" onClick={() => increaseItemCount(item.id)}>+</button>
                  <p>{item.count}</p>
                  <button className="decrement px-5 py-2 bg-green-900 text-white" onClick={() => decreaseItemCount(item.id)}>-</button>
                </div>
                <button
                  className="remove-button bg-red-500 text-white px-4 py-2 mt-2 rounded ml-10"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="footer flex justify-between bg-green-900 p-5 rounded-xl">
          <h1 className="font-bold text-white text-2xl">Total: Rs {totalPrice.toFixed(2)}</h1>
          <button
            className={`proceed-button ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-700 hover:bg-green-400'} text-white px-4 py-2 mt-2 rounded`}
            onClick={handleProceedToCheckout}
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      {showOrderChannel && <div className="modal-overlay"><OrderChannel totalPrice={totalPrice} menuName={menuName} onClose={handleCloseOrderChannel} /></div>}
      {notification && (
        <div className="notification bg-green-500 text-white p-3 rounded fixed bottom-5 right-5">
          {notification}
        </div>
      )}
    </div>
  );
}

export default Cart;
