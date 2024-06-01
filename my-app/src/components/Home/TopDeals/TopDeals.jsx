import React from 'react';
import Content from './list.js';
import Cards from './cards.jsx';
import { Link } from 'react-router-dom';

function content(status) {
  return <Cards img={status.img} />;
}

function TopDeals() {
  return (
    <>
      <div className='text-center mt-10 lg:mt-20'>
        <h1 className='text-3xl lg:text-5xl font-[roboto] font-bold border-b-4 lg:border-b-8 border-green-900 pb-2 lg:pb-3 inline-block'>
          TOP DEALS
        </h1>
        <div className='TopDeals grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-10 px-5 lg:px-20 mt-10 lg:mt-20'>
          {Content.map(content)}
        </div>
      </div>
    </>
  );
}

export default TopDeals;
