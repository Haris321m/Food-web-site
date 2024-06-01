import React, { useState } from 'react';
// import addToCart from './menu';
function Menu() {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "categories":
        setSelectedCategory(value);
        break;
      case "file":
        setFile(e.target.files[0]);
        break;
      default:
        break;
    }
  };

  const addCard = () => {
    if (name && description && price && selectedCategory && file) {
      const reader = new FileReader();
      reader.onload = () => {
        const path = reader.result;
        setCards([...cards, { name, description, price, categories: selectedCategory, file, path }]);
        setName('');
        setDescription('');
        setPrice('');
        setSelectedCategory('');
        setFile(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <div className="p-6 h-full overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <div className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleInputChange}
            className="border rounded p-2 mb-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleInputChange}
            className="border rounded p-2 mb-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={price}
            onChange={handleInputChange}
            className="border rounded p-2 mb-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categories">
            Categories
          </label>
          <select
            id="categories"
            name="categories"
            value={selectedCategory}
            onChange={handleInputChange}
            className="border rounded p-2 mb-2 w-full"
          >
            <option value="">select category</option>
            <option value="Everydayvalue">Everydayvalue</option>
            <option value="promotions">promotions</option>
            <option value="signatures boxes">signatures boxes</option>
            <option value="snacks & beverages">snacks & beverages</option>
            <option value="sharing">sharing</option>
            <option value="Midnight">Midnight</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
            File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleInputChange}
            className="border rounded p-2 mb-2 w-full"
          />
        </div>
        <button
          onClick={addCard}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Card
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="border rounded shadow-lg p-4 relative">
            <img src={card.path} alt={card.name} className="h-48 w-full object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">{card.name}</h3>
            <p className="mb-2">{card.description}</p>
            <p className="mb-4 font-bold">${card.price}</p>
            <button onClick={() => deleteCard(index)} className="bg-red-500 text-white p-2 rounded absolute top-0 right-0 m-2">Delete</button>
            {/* Assuming addToCart is defined elsewhere */}
            <button onClick={() => addToCart(card)} className="bg-green-500 text-white p-2 rounded absolute bottom-0 right-0 m-2">+ Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
