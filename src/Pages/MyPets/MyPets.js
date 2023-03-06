import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyPetList from './MyPetList';

const MyPets = () => {

    const { user } = useContext(AuthContext)
    // const [myproduct, setMyProduct] = useState([]);
    // const [remaining, setremaining] = useState([]);

    const { data: myProduct = [], refetch } = useQuery({
        queryKey: ['addproducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addproducts?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleAdvertise = id => {
        fetch(`http://localhost:5000/advertiseproduct/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('This Product Advertise is Start');
                    refetch()
                }

            })
    }

    console.log(myProduct);


    const handleDelete = id => {
        const url = `http://localhost:5000/addproducts/${id}`

        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingProducts = myProduct.filter(product => product._id === id)
                    // setMyProduct(remainingProducts);
                    toast.success("successfully delete");
                    refetch();
                }
                console.log(data)
            })
    }

    return (
        <div>
            <div>
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Pet Name</th>
                            <th>Location</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr></thead></table>

                {
                    myProduct.map(product => <MyPetList
                        key={product._id}
                        category={product}
                        handleDelete={handleDelete}
                        handleAdvertise={handleAdvertise}
                        refetch={refetch}
                    ></MyPetList>)
                }
            </div>
        </div>
    );
};

export default MyPets;