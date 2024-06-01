import React, { useState } from 'react';
import { MdOutlinePayments } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { BsBank } from "react-icons/bs";
import { sendPaymentDetails } from './payments.js';

function Payment({ amount, onPaymentSuccess }) {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [debitCardNumber, setDebitCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCVV] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!selectedPayment) {
        throw new Error('Please select a payment method');
      }

      let paymentDetails = { method: selectedPayment, amount };

      if (selectedPayment === 'bank') {
        if (!bankAccount) {
          throw new Error('Please enter bank account number');
        }
        paymentDetails.bank_account = bankAccount; 
      } else if (selectedPayment === 'debitcard') {
        if (!debitCardNumber || !expiryMonth || !expiryYear || !cvv) {
          throw new Error('Please enter all debit card details');
        }
        paymentDetails.card_number = debitCardNumber; 
        paymentDetails.expiry_month = expiryMonth; 
        paymentDetails.expiry_year = expiryYear; 
        paymentDetails.cvv = cvv;
      }

      if (selectedPayment === 'cashondelivery') {
        console.log('Order placed successfully with Cash on Delivery');
        setErrorMessage('');
        onPaymentSuccess();
        return; 
      }

      await sendPaymentDetails(paymentDetails);
      console.log('Payment details sent successfully');
      setErrorMessage('');
      onPaymentSuccess();
    } catch (error) {
      console.error('Error sending payment details:', error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="payment-container p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>
      <form className="payment-options" onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <input 
            id="debitcard" 
            type="radio" 
            name="payment" 
            value="debitcard" 
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-none"
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          <label htmlFor="debitcard" className="ml-3 flex text-lg font-medium text-gray-700">
            <CiCreditCard1 className='mr-3'/>
            Debit Card
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input 
            id="bank" 
            type="radio" 
            name="payment" 
            value="bank" 
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-none"
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          <label htmlFor="bank" className="ml-3 flex text-lg font-medium text-gray-700">
            <BsBank className='mr-3'/>
            Bank Transfer
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input 
            id="cashondelivery" 
            type="radio" 
            name="payment" 
            value="cashondelivery" 
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-none"
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          <label htmlFor="cashondelivery" className="ml-3 flex text-lg font-medium text-gray-700">
            <MdOutlinePayments className='mr-3'/>
            Cash On Delivery
          </label>
        </div>
        {selectedPayment === 'bank' && (
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Enter Bank Account Number" 
              className="w-full p-2 border rounded" 
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
              required
            />
          </div>
        )}
        {selectedPayment === 'debitcard' && (
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Enter Debit Card Number" 
              className="w-full p-2 border rounded" 
              value={debitCardNumber}
              onChange={(e) => setDebitCardNumber(e.target.value)}
              required
            />
            <div className="flex justify-between mt-4">
              <div className="w-1/2 mr-2">
                <input 
                  type="text" 
                  placeholder="MM" 
                  className="w-full p-2 border rounded" 
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2 ml-2">
                <input 
                  type="text" 
                  placeholder="YY" 
                  className="w-full p-2 border rounded" 
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                  required
                />
              </div>
            </div>
            <input 
              type="text" 
              placeholder="Enter CVV" 
              className="w-full p-2 border rounded mt-4" 
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              required
            />
          </div>
        )}
        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
        <button 
          type="submit" 
          className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 sm:w-auto sm:ml-auto"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}

export default Payment;
