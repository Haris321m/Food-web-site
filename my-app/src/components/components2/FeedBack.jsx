import React from 'react';

function FeedBack() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8'>Feedback</h1>
            <div className='max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg'>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Your Feedback</div>
                    <textarea className='w-full h-32 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300' placeholder='Type your feedback here...'></textarea>
                </div>
                <div className='px-6 py-4 flex justify-end'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default FeedBack;
