import axios from 'axios';
import fetchMenu from '../Snacks-&-Beverages/list';

async function fetchcontent() {
  try {
    const response = await axios.get('http://localhost:3000/menu/getmenu');
    const snacksBeveragesItems = response.data.filter((item) => item.categories === 'promotions');

    return snacksBeveragesItems;
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
}

export default fetchMenu;