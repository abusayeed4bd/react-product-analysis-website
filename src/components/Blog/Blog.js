import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="question">
                <h1 className='orange-color'>What is context api?</h1>
                <hr />
                <p>Context api is a way to transfer data to a component tree without using props.Some time wee need to pass data from a component to another component that can be much lower lavel then the parent component. we have to pass data throw every component betweenn these 2 components by props but if we use context api we can get data from any components in the component tree wihtout drilling props.</p>
            </div>
            <div className="question">
                <h1 className='orange-color'>Whai is block and inline-block element?</h1>
                <hr />
                <p>
                    <b>Block:</b>
                    Block element is some tag in html that took full line and it can be aligned in the line anywhere. block element can took height and weight.
                </p>
                <p>
                    <b>Inline-Block:</b>
                    Inline-block element act like both inline and block element. it do not take full line space but inline-block element can get hight and witght.
                </p>
            </div>
        </div>
    );
};

export default Blog;