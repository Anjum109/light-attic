import { motion } from "framer-motion"
import React from 'react';
import image from '../../../assets/Banner/cats.png'

import './Banner.css'
const Banner = () => {
    return (
        <div className='flex lg:justify-center flex-col flex-col-reverse lg:flex-row md:flex-row'>
            <div className='flex justify-center items-center'>
                <motion.div animate={{ x: 70 }}
                    transition={{ ease: "easeOut", duration: 3 }} >
                    <div className='flex justify-center items-center'>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl text-font-size font-bold mb-5 lg:mb-0 ml-5 lg:ml-0'>Looking for unconditional love?  <br></br>
                            <span>Visit the  </span><br></br><span className='text-blue-800'>Light Attic </span><span>today!</span></h1>
                    </div>
                </motion.div></div>
            <div className='ml-5 pl-5'>
                <motion.div animate={{ y: 20 }}
                    transition={{ ease: "easeIn", duration: 3 }} >
                    <img src={image} alt="" />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;