import axios from 'axios';

async function fetchMenu() {
  try {
    const response = await axios.get('http://localhost:3000/menu/getmenu');
    const menuData = response.data;

    
    const snacksBeveragesItems = menuData.filter((item) => item.categories === 'Snacks & Beverages');

    return snacksBeveragesItems;
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
}

export default fetchMenu;
