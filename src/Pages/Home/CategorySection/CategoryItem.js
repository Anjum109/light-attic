import React from 'react';
import { Link } from 'react-router-dom';
import './category.css'

const CategoryItem = ({ category }) => {

    const { category_name, image } = category;

    return (
        <div className='rounded-lg mb-12'>
            <div className='flex w-full h-72 '>
                <img src={image} className='w-full border image-radius' alt="" />
            </div>
            <div className='bg-blue-300 hover:bg-blue-900 text-slate-900 hover:text-blue-200 text-border'>
                <p className='navbar-text text-center py-5 text-3xl font-bold'><Link key={category._id} to={`/categories/${category.category_id}`}>{category_name}</Link></p>
            </div>
        </div>
    );
};

export default CategoryItem;