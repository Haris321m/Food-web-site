import React, { useState } from 'react';
import Payment from './payment.jsx';
import OrderPlace from './orderplace.jsx'; // Import OrderPlace component
import axios from 'axios';

function Details({ totalPrice, menuName, onClose }) {
    const [showPayment, setShowPayment] = useState(false);
    const [showTakeaway, setShowTakeaway] = useState(false);
    const [showOrderPlace, setShowOrderPlace] = useState(false); // New state for OrderPlace component
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [detailsSubmitted, setDetailsSubmitted] = useState(false);

    const handleSubmit = async () => {
        try {
            if (!email || !phoneNumber || !address) {
                throw new Error('Please fill in all fields');
            }

            await axios.post('http://localhost:3000/orders/postorder', {
                email,
                phoneNumber,
                address,
                price: totalPrice,
                menuname: menuName,
                orderstatus: "preparing"
            });

            setDetailsSubmitted(true);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDeliveryMethod = (method) => {
        if (method === 'homeDelivery') {
            setShowPayment(true);
        } else if (method === 'takeaway') {
            setShowTakeaway(true);
        }
    };

    return (
        <div className="Details fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg relative">
                <button className="absolute top-2 right-2 text-gray-700" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold mb-4">Enter Details</h2>
                {!detailsSubmitted ? (
                    <>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                placeholder="Enter your address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                        <div className="flex justify-end">
                            <button
                                onClick={handleSubmit}
                                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                            >
                                Submit Details
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="mb-4">
                            <button
                                onClick={() => handleDeliveryMethod('homeDelivery')}
                                className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4"
                            >
                                Home Delivery
                            </button>
                            <button
                                onClick={() => handleDeliveryMethod('takeaway')}
                                className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                            >
                                Takeaway
                            </button>
                        </div>
                    </>
                )}
                {showPayment && <Payment amount={totalPrice} onPaymentSuccess={() => setShowOrderPlace(true)} />}
                {showTakeaway && <OrderPlace onClose={onClose} />} {/* Assume takeaway means immediate order placement */}
                {showOrderPlace && <OrderPlace onClose={onClose} />} {/* Display OrderPlace component on payment success */}
            </div>
        </div>
    );
}

export default Details;
