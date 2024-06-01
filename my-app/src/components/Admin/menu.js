import axios from 'axios';

export const addToCart = async (item) => {
  try {
    const formData = new FormData();
    formData.append('name', item.name);
    formData.append('description', item.description);
    formData.append('price', item.price);
    formData.append('categories', item.categories);
    formData.append('image', item.file);
    console.log(item);
    await axios.post('http://localhost:3000/menu/postmenu', formData, {
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

export default addToCart;
