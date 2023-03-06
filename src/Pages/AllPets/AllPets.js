import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AllPetsItem from './AllPetsItem';
import { motion } from "framer-motion"
const AllPets = () => {

    const [allpets, setAllPets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setAllPets(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className='my-12 lg:px-24 md:px-24'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="flex justify-center w-full"
                >
                    <h2 className='text-center font-bold text-5xl font-bold login-name text-blue-900 mb-12 navbar-text'>All Pets</h2></motion.div>

                <div className=' '>

                    {
                        allpets.map(petCollection => <AllPetsItem key={petCollection._id}
                            petCollection={petCollection}>

                        </AllPetsItem>)
                    }

                </div >

            </div>
        </div>
    );
};

export default AllPets;