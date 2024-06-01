import React from 'react';
import Hero from './hero';
import Shafe from './shafe/Shafe';
import BestSelling from './BestSelling/BestSeling';
import ExploreMenu from './ExploreMenu/ExploreMenu';
import TopDeals from './TopDeals/TopDeals';
import Reviews from './Reviews/reviews';

function Home() {
    return (
        <div className='scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300'>
            <Hero />
            <Shafe />
            <BestSelling />
            <ExploreMenu />
            <TopDeals />
            <Reviews />
        </div>
    );
}

export default Home;
