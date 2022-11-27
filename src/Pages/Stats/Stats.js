import React from 'react';
import titleimg from '../../assests/titleimg.jpg'

const Stats = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/6NmqW8H/titleimgg.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Worlds  Number One Website for buying and Selling used Products</p>
                        <button className="btn btn-primary">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;