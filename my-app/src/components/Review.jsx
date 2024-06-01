import React, { useState, useEffect } from 'react';

function Review() {
  const [user, setUser] = useState({
    name: '',
    imageUrl: '',
  });

  useEffect(() => {
    fetch('https://your-backend-api.com/user')
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          imageUrl: data.imageUrl,
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg max-w-md mx-auto mt-10 md:max-w-lg lg:max-w-xl">
      <div className="flex items-center mb-4">
        <img
          src={user.imageUrl || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{user.name || 'Name'}</h2>
        </div>
      </div>
      <textarea
        name="message"
        id="message"
        placeholder="Feedback or Review"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      ></textarea>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Submit
      </button>
    </div>
  );
}

export default Review;
