import React from 'react';
import Categories from '../../Categories/Categories';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;