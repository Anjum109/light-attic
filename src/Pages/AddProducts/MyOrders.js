import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const [order, setOrder] = useState([])
    const { user } = useContext(AuthContext)

    // const { data: myorder = [], refetch } = useQuery({
    //     queryKey: [''],
    //     queryFn: async () => {
    //         const res = await fetch('https://sweet-repeates-server.vercel.app/myproduct');
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                console.log(data)

            })
    }, [])

    return (
        <div>
            <div>
                <h2 className='text-5xl font-bold m-5 text-center text-blue-900 login-name  text-bold'>My Orders</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full" >
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.length > 0 &&
                                order?.map((booking, idx) => <tr key={booking._id}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src={booking.image} alt='img' />
                                                console.log(booking.image);
                                            </div>
                                        </div>
                                    </td>
                                    <td>{booking.title}</td>
                                    <td>{booking.price}</td>
                                    {/* <td className='text-error'>Pay</td> */}
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link
                                                to={`/dashboard/payment/${booking._id}`}
                                            >
                                                <button
                                                    className='btn border-t-pink-900 btn-sm'
                                                >Pay</button>
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span
                                                className='text-primary btn-sm'
                                            >Paid</span>
                                        }
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;