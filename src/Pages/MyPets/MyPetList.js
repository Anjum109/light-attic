import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyPetList = ({ category, handleDelete, handleAdvertise, setData, refetch }) => {
    const { _id, advertise, description, condition_type, image, location, original_price, posted_time, pet_name, resale_price, seller_name, years_of_use } = category;

    const { loading } = useContext(AuthContext)

    return (
        <div>
            <table className="table w-full">


                <tr>
                    <th>{pet_name}</th>
                    <th>{location}</th>
                    <th> <button className='btn' onClick={() => handleDelete(_id)}>Delete</button></th>
                    <th>
                        {
                            advertise ? <button className='btn bg-blue-900 text-blue-100'>Advertised</button>
                                :
                                <button className='btn w-60 font-bold mt-3' onClick={() => handleAdvertise(_id)}>Advertise</button>
                        }
                    </th>

                </tr>



            </table>
        </div>
    );
};

export default MyPetList;