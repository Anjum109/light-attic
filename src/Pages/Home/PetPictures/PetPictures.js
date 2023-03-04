import React from 'react';
import ReactCardSlider from 'react-card-slider-component';
import '../Home/Home.css'

const PetPictures = () => {

    const sliderClick = (slider) => {

    }

    const slides = [
        { image: "https://i.ibb.co/JxWvnHG/cat3.jpg", title: "Persian", clickEvent: sliderClick },
        { image: "https://i.ibb.co/SBLWnPQ/bird667a.jpg", title: "Love Birds", clickEvent: sliderClick },
        { image: "https://i.ibb.co/hCD7n6S/dog.jpg", title: "Japaness", clickEvent: sliderClick },
        { image: "https://i.ibb.co/vQMCBpy/cat2.jpg", title: "Brown Breed", clickEvent: sliderClick },
        { image: "https://i.ibb.co/gSLcJ3v/bird2.jpg", title: "Parrot", clickEvent: sliderClick },
        { image: "https://i.ibb.co/0M3KsjC/pexels-pixabay-45201.jpg", title: "White Bread", clickEvent: sliderClick },
        { image: "https://i.ibb.co/RpkTCxH/bird1.jpg", title: "Parrot", clickEvent: sliderClick },
    ]

    return (
        <div>
            <div className='text-center font-bold text-4xl text-blue-900 mb-12 navbar-text'>
                <h2>Some of Our Cute Pet Pictures</h2>
            </div>
            <ReactCardSlider slides={slides} id='main-slider-container' className='slider-card-image slider-card-title' />
        </div>
    );
};

export default PetPictures;