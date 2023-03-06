import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import { motion } from "framer-motion"
const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
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
                <h2 className='text-center font-bold text-4xl text-blue-900 mb-12 navbar-text'>CATEGORIES</h2></motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>

                {
                    categories.map(category => <CategoryItem key={category._id}
                        category={category}>

                    </CategoryItem>)
                }

            </div >

        </div>
    );
};

export default Category;