import React from 'react';
import { Link } from 'react-router-dom';
import './category.css'
import { motion } from "framer-motion";
const CategoryItem = ({ category }) => {

    const { category_name, image } = category;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 flex justify-center"
        >
            <div className='rounded-lg mb-12'>
                <div className='flex w-full h-72 '>
                    <img src={image} className='w-full border image-radius' alt="" />
                </div>
                <div className='bg-blue-300 hover:bg-blue-900 text-slate-900 hover:text-blue-200 text-border'>
                    <p className='navbar-text text-center py-5 text-3xl font-bold'><Link key={category._id} to={`/categories/${category.category_id}`}>{category_name}</Link></p>
                </div>
            </div></motion.div>
    );
};

export default CategoryItem;