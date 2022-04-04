import React from 'react';
import './SingleReview.css'

const SingleReview = (props) => {
    const { name, review, ratings } = props.review;
    return (
        <div className='review-cart'>
            <p>{review}</p>
            <h4 className='orange-color'>{name}</h4>
            <p><small>Ratings: {ratings} star</small></p>
        </div>
    );
};

export default SingleReview;