import React from 'react';
import useReview from '../hooks/UseReview';
import SingleReview from '../SingleReview/SingleReview';
import './Review.css'

const Review = () => {
    const [reviews] = useReview([]);
    return (
        <div>
            <h2 className='orange-color'>Reviews</h2>
            <div className="reviews">
                {
                    reviews.map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Review;