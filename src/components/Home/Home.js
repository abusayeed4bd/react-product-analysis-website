import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../hooks/UseReview';
import SingleReview from '../SingleReview/SingleReview';
import './Home.css'

const Home = () => {
    const [reviews] = useReview([]);
    const sliceReview = reviews.slice(0, 3);
    return (
        <div className='home-container'>

            {/* banner section */}

            <section className='banner-container'>
                <div className='banner-text'>
                    <h1>Find Your Best Laptop</h1>
                    <h1 className='orange-color'>Increase Your Productivity</h1>
                    <p>Find a best laptop and make esiar your daily office and home work</p>
                    <button>Explore more</button>
                </div>
                <div className='banner-image'>
                    <img src="image/laptop.png" alt="" />
                </div>
            </section>

            <section className='review-home'>
                <h2 className='orange-color'>Customer Reviews ({sliceReview.length})</h2>
                <div className="reviews">
                    {
                        sliceReview.map(review => <SingleReview
                            key={review.id}
                            review={review}
                        ></SingleReview>)
                    }
                </div>
                <Link className='load-btn' to='/review'>See More</Link>
            </section>
        </div>
    );
};

export default Home;