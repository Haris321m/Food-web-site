import React from 'react';

function TakeDetails({ onClose, onSubmit }) {
    return (
        <div className="TakeDetails fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg relative">
                <button className="absolute top-2 right-2 text-gray-700" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h1 className="text-2xl font-bold mb-4">Add Your Details</h1>
                <div className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2">Name</label>
                        <input id='name' type="text" placeholder='Enter your name' className="w-full p-2 border rounded"/>
                    </div>
                    <div>
                        <label htmlFor="number" className="block mb-2">Phone number</label>
                        <input id='number' type="text" placeholder='Enter your number' className="w-full p-2 border rounded"/>
                    </div>
                    <button className="bg-green-700 text-white px-4 py-2 rounded mt-4" onClick={onSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default TakeDetails;
