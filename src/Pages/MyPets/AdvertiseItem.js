import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import AdvertiseItemList from './AdvertiseItemList';
import BookNow from './BookNow';

const AdvertiseItem = () => {
    const [data, setData] = useState(null);
    const { user } = useContext(AuthContext)
    const { data: advertiseproduct = [], refetch } = useQuery({
        queryKey: ['advertiseproduct'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertiseproduct/', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className='mt-12'>
                <h2 className='text-center font-bold text-4xl text-red-900'>ADVERTISE ITEMS</h2>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-5'>
                    {
                        advertiseproduct.map(advertising => <AdvertiseItemList
                            key={advertising._id}
                            product={advertising}
                            setData={setData}

                        ></AdvertiseItemList>)
                    }

                </div>
                <div>
                    {
                        data &&
                        <BookNow setData={setData}
                            user={user}
                            data={data}

                        ></BookNow>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdvertiseItem;