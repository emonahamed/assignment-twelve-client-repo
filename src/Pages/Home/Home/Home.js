import React from 'react';
import Advertisement from '../../Advertisement/Advertisement';
import Categories from '../../Categories/Categories';
import Footer from '../../Shared/Footer/Footer';
import Statistics from '../../Statistics/Statistics';
import Stats from '../../Stats/Stats';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='mx-5'>

            <Banner></Banner>
            <Stats></Stats>
            <Categories></Categories>
            <Statistics></Statistics>
            <Advertisement></Advertisement>



        </div>
    );
};

export default Home;