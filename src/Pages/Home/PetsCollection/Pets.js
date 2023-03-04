import React from 'react';
import './Pet.css'

const Pets = ({ data }) => {
    const { description, image, location, advertising, original_price, posted_time, condition_type, pet_name, resale_price, seller_name, years_of_use, _id } = data;
    console.log(description, image, location, advertising, original_price, posted_time, condition_type, pet_name, resale_price, seller_name, years_of_use, _id);

    return (
        <div>
            <div id="container">

                <div className="product-details">

                    <h1>{pet_name}</h1>
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </span>

                    <p className="information"></p>

                    <h2 >Seller Name:{seller_name}</h2>
                    <h2 >Post Time: {posted_time}</h2>
                    <h2 >Location: {location}</h2>

                </div>

                <div className="product-image">

                    <img src={image} alt="" />


                    <div className="info">
                        <h2> Description</h2>
                        <ul className=''>
                            {description}

                        </ul>
                    </div>
                </div>
                <div className="flex card-actions justify-start mt-5 mr-5">

                    <label
                        // onClick={() => setData(product)}
                        htmlFor="booking-modal"
                        className="btn border border-white shadow-sm shadow-slate-400 bg-blue-900 text-white w-full">Book now  </label>
                    <label
                        // onClick={() => handleReport(_id)}
                        htmlFor="booking-modal"
                        className="btn  border border-white shadow-sm shadow-slate-400 bg-blue-900 text-white w-full">Report</label>
                </div>

            </div>
        </div>
    );
};

export default Pets;