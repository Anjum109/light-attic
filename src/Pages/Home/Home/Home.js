import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Category from '../CategorySection/Category';
import Contactus from '../Contact/Contactus';
import PetPictures from '../PetPictures/PetPictures';
import PetsCollections from '../PetsCollection/PetsCollections';
import './Home.css'

const Home = () => {
    return (
        <div className='bg-blue-100 '>
            <div className='background-image'>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <div className='max-w-screen-xl mx-auto mb-12'>
                <Category></Category>
                <PetPictures></PetPictures>

                <Contactus></Contactus>

            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;