import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

import useTitle from '../../../hooks/useTitle/useTile';
import Navbar from '../../../Shared/Navbar/Navbar';
import BookNow from '../../MyPets/BookNow';
import Pets from './Pets';

const PetsCollections = () => {
    const categoriesAllData = useLoaderData([]);
    const [data, setData] = useState([]);
    const { user } = useContext(AuthContext);
    useTitle('Pets');

    console.log(categoriesAllData);
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>

                {
                    categoriesAllData?.map((product) => (
                        <Pets
                            key={product._id}
                            product={product}
                        ></Pets>
                    ))
                }
                {
                    data && <BookNow
                        data={data}
                        user={user}
                        setData={setData}
                    ></BookNow>
                }
            </div>
        </div>
    );
};

export default PetsCollections;