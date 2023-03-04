import React from 'react';
import { useLoaderData } from 'react-router-dom';

import useTitle from '../../../hooks/useTitle/useTile';
import Navbar from '../../../Shared/Navbar/Navbar';
import Pets from './Pets';

const PetsCollections = () => {
    const categoriesAllData = useLoaderData([]);
    useTitle('Pets');

    console.log(categoriesAllData);
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>

                {
                    categoriesAllData?.map((data) => (
                        <Pets
                            key={data._id}
                            data={data}
                        ></Pets>
                    ))
                }
            </div>
        </div>
    );
};

export default PetsCollections;