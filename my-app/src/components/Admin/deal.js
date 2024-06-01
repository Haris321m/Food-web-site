import axios from 'axios';

export const adddeals = async (item) => {
  try {
    const formData = new FormData();
    formData.append('price', item.price);
    formData.append('image', item.image);

    await axios.post('http://localhost:3000/deals/postdeal', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      
    
    console.log('Item added to cart successfully!');
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw new Error('Failed to add item to cart');
  }
};

export default adddeals;
