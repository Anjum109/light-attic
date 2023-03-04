import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';

const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='my-12'>
            <h2 className='text-center font-bold text-4xl text-blue-900 mb-12 navbar-text'>CATEGORIES</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

                {
                    categories.map(category => <CategoryItem key={category._id}
                        category={category}>

                    </CategoryItem>)
                }

            </div ></div>
    );
};

export default Category;