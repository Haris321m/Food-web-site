// import pic_1 from '../imgs/pic-1.png';
// import pic_2 from '../imgs/pic-2.png';
// import pic_3 from '../imgs/pic-3.png';

// const arr = [
//   { id : 1,img: pic_1, title: 'Twister Combo', description: 'Twister + 1 Regular fries + 1 Regular drink', price: 670 },
//   { id : 2,img: pic_2, title: 'Twister Combo', description: 'Twister + 1 Regular fries + 1 Regular drink', price: 670 },
//   { id : 3,img: pic_3, title: 'Twister Combo', description: 'Twister + 1 Regular fries + 1 Regular drink', price: 670 },
//   { id : 4,img: pic_1, title: 'Twister Combo', description: 'Twister + 1 Regular fries + 1 Regular drink', price: 670 },
//   { id : 5,img: pic_2, title: 'Twister Combo', description: 'Twister + 1 Regular fries + 1 Regular drink', price: 670 },
//   { id : 6,img: pic_3, title: 'Twister Combo', description: 'Twister + 1 Regular fries + 1 Regular drink', price: 670 },
//   { id : 7,img: pic_1, title: 'Twister Combo', description: 'Twister + 1 Regular fries + 1 Regular drink', price: 670 },
//   { id : 8,img: pic_2, title: 'Twister Combo', description: 'Twister + 1 Regular fries + 1 Regular drink', price: 670 },
//   { id : 9,img: pic_3, title: 'Twister Combo', description: 'Twister + 1 Regular fries + 1 Regular drink', price: 670 },
// ];

// export default arr;

import axios from 'axios';

async function fetchcontent() {
  try {
    const response = await axios.get('http://localhost:3000/menu/getmenu');
    const snacksBeveragesItems = response.data.filter((item) => item.categories === 'Everydayvalue');

    return snacksBeveragesItems;
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
}

export default fetchcontent;