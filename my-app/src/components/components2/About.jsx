import React from 'react';

function About() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='max-w-3xl mx-auto'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8'>About Us</h1>
                <div className='mb-8'>
                    <h2 className='text-2xl font-bold mb-4'>Our Story</h2>
                    <p className='mb-4'>At [Restaurant Name], we believe in the power of delicious food to bring people together. Our journey began in the heart of Spain with a passion for authentic flavors and a commitment to exceptional service. Over the years, we've built a reputation for delivering mouthwatering dishes that capture the essence of Spanish cuisine.</p>
                    <p className='mb-4'>From traditional tapas to innovative creations, each dish is crafted with care using the finest ingredients sourced from local producers. Our dedication to quality extends beyond the kitchen—we strive to create memorable dining experiences that reflect the warmth and hospitality of Spain.</p>
                </div>
                <div className='mb-8'>
                    <h2 className='text-2xl font-bold mb-4'>Our Mission</h2>
                    <p className='mb-4'>Our mission is simple: to delight our customers with irresistible flavors, impeccable service, and a welcoming atmosphere. We're committed to preserving the rich culinary heritage of Spain while embracing creativity and innovation in our menu offerings. Whether you're craving classic paella or exploring our seasonal specials, we invite you to savor the taste of Spain with us.</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Meet the Team</h2>
                    <p className='mb-4'>Behind every delicious meal is a dedicated team of culinary experts, hospitality professionals, and passionate food enthusiasts. Our team at [Restaurant Name] is united by a shared love for Spanish cuisine and a commitment to excellence. From our talented chefs who bring bold flavors to life to our friendly servers who ensure every dining experience is unforgettable, meet the faces behind our kitchen doors.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
