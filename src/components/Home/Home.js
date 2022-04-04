import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>

            {/* banner section */}

            <section className='banner-container'>
                <div className='banner-text'>
                    <h1>Find Your Best Laptop</h1>
                    <h1 className='orange-color'>Increase Your Productivity</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem facere animi accusamus eaque quisquam non, laborum voluptates error libero sunt.</p>
                    <button>Explore more</button>
                </div>
                <div className='banner-image'>
                    <img src="image/laptop.png" alt="" />
                </div>
            </section>

            <section>

            </section>
        </div>
    );
};

export default Home;