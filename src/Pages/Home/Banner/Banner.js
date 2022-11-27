import React from 'react';
import image from '../../../assests/buysell.jpg'

const Banner = () => {
    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} alt='img' className=" rounded-lg shadow-2xl w-1/2" />
                <div>
                    <h1 className="text-5xl font-bold">Want to Earn!!!</h1>
                    <p className="py-6">Just hit the get started button</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;