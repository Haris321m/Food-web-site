import React from 'react';
import Details from './details';

function OrderChannel({ totalPrice, menuName, onClose }) {
  return (
    <div className="order-channel-container">
      <Details totalPrice={totalPrice} menuName={menuName} onClose={onClose} />
    </div>
  );
}

export default OrderChannel;
