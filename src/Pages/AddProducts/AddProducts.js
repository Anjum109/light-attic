import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';




const AddProduct = () => {

    const { user } = useContext(AuthContext)
    const date = new Date()
    const posted_time = format(date, 'PP')
    const navigate = useNavigate()

    const handleAddToCard = (event) => {
        event.preventDefault();
        const form = event.target;
        const pet_name = form.pet_name.value;
        const category_name = form.category_name.value;
        const category_id = form.category_id.value;
        const image = form.image.value;
        const seller_name = form.seller_name.value;
        const posted_time = form.posted_time.value;
        const condition_type = form.condition_type.value;
        const location = form.location.value;
        const description = form.description.value;



        const booking = {
            pet_name,
            category_name,
            category_id,
            image,
            seller_name,
            location,
            description,
            posted_time,
            condition_type,
            email: user.email
        }


        fetch('http://localhost:5000/category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("added successfully")
                    form.reset();
                    navigate('/dashboard/myproducts')
                }
                else {
                    toast.error(data.message)
                }

            })

    }




    // if (isLoading) {
    //     return <Loading></Loading>;
    // }
    return (
        <div className='mt-12'>
            <div className='mb-6 login-bg'>
                <h2 className='text-5xl text-center font-bold my-4 login-name text-blue-900'>Add Pets</h2>
                <div className='flex justify-center items-center mx-5'>
                    <div className='w-full rounded-md p-12 mx-5 '>
                        <form onSubmit={handleAddToCard}>
                            <select required name='category_name' className="input-bg select select-sm select-bordered w-full max-w-xs my-2 mx-5">
                                <option disabled selected value="Cook Ware">Birds</option>
                                <option value="Cook Tools">Cats</option>
                                <option value="Electrics">Dogs</option>
                            </select>
                            <select required name='category_id' className="input-bg select select-sm select-bordered w-full max-w-xs my-2 mx-5">
                                <option disabled selected value="Cook Ware">01</option>
                                <option value="Cook Tools">02</option>
                                <option value="Electrics">03</option>
                            </select>
                            <input required type="text" name='image' placeholder="Photo Url" className="input-bg input input-sm input-bordered w-full mx-5 max-w-xs" />
                            <input required type="text" name='pet_name' placeholder="pet_name" className="input-bg input input-sm input-bordered w-full max-w-xs mx-5 mt-2" />
                            <input required type="text" name='seller_name' placeholder="Seller Name" className="input-bg input mx-5 input-sm input-bordered w-full max-w-xs" />
                            <input required type="text" name='posted_time' placeholder="posted_time" className="input-bg mt-2 input mx-5 input-sm input-bordered w-full max-w-xs" />
                            <select required name='condition_type' className="input-bg select select-sm select-bordered w-full max-w-xs my-2 mx-5">
                                <option disabled selected value="Good">White</option>
                                <option value="Best">Brown</option>
                                <option value="Excellent">Coloring</option>
                            </select>
                            <input required type="text" name='location' placeholder="location" className="input-bg my-2 input input-sm input-bordered w-full max-w-xs mx-5" /><br></br>
                            <textarea required name='description' className="input-bg textarea textarea-bordered mx-5 " cols="42" rows="4" placeholder="description"></textarea>
                            <div className='flex justify-center'>
                                <input type="submit" className='w-1/2 border bg-blue-900 font-bold text-blue-100 hover:bg-blue-300 hover:text-blue-900 hover:p-4 rounded-full p-3 mt-5' value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;