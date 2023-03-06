import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { AiFillCheckCircle } from 'react-icons/ai';

const AllSellers = () => {
    const [verify, setVerify] = useState(false);
    const { data: allsellers = [], refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteSeller = id => {
        console.log(id)
        const proceed = window.confirm("Are you sure, you want to delete this seller?")
        if (proceed) {
            fetch(`http://localhost:5000/allsellers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deleteCount > 0) {
                        toast.success("Seller Delete Successfully")
                        refetch();
                    }
                })
        }
    }
    const handleVerify = id => {
        fetch(`http://localhost:5000/allsellers/verify/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verify Successfully')
                    refetch()
                }
            })
    }

    return (
        <div>
            <div className='p-5 login-bg mt-12'>

                <div className="overflow-x-auto login-bg input-bg">
                    <table className="table w-full login-bg">
                        <thead className='login-bg'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Verify</th>

                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='login-bg'>
                            {
                                allsellers.map((seller, i) => <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>
                                        {/* {
                            seller.verify = "verified" ? (
                                <button className='btn bg-red-900 text-white'> verified</button>
                            ) :
                                (
                                    <button onClick={() => handleMakeSeller(seller._id)} className='btn btn-primary'>unverified</button>
                                )
                        } */}
                                        {seller?.verify ?
                                            <td><AiFillCheckCircle className=' text-center text-green-500 mt-2' /> </td> :
                                            <td>{seller?.role !== 'admin' && <button className='btn btn-xs btn-primary' onClick={() => handleVerify(seller._id)}> Verify </button>}</td>
                                        }
                                    </td>
                                    {/* <td>
                        {!seller.verify ? <button
                            onclick={() => { handleMakeSeller(seller._id) }}
                            className='btn btn-primary'>Make Verify</button> : "Verified"}
                    </td> */}
                                    <td>
                                        <button
                                            onClick={() => { handleDeleteSeller(seller._id) }}
                                            className="btn w-100 bg-blue-900 text-blue-100"
                                        > Delete Seller
                                        </button>
                                    </td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    );
};

export default AllSellers;