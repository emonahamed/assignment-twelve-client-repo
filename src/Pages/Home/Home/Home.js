import React from 'react';
import Advertisement from '../../Advertisement/Advertisement';
import Categories from '../../Categories/Categories';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
        </div>
    );
};

export default Home;