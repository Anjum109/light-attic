import React from 'react';
import Navbar from '../Navbar/Navbar';
import img1 from '../../assets/images/adopt1.jpg'
import img2 from '../../assets/images/adopt02.jpg'
import img3 from '../../assets/images/adopt3.jpg'
import img4 from '../../assets/images/adopt4.jpeg'
import './Blog.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-screen-xl mx-auto'>
                <div className='mx-5'>
                    <h1 className=' text-center font-bold text-5xl border border-blue-900 bg-blue-300 py-2 text-blue-900 mb-12 navbar-text mt-24'>REASONS TO ADOPT PET, NOT SHOP</h1>
                    <div>
                        <h1 className='font-bold text-4xl text-blue-900 mb-12 navbar-text mt-24'>ADOPTING MEANS YOU SAVE A LIFE!</h1>
                        <p className='font-bold text-blue-900'>Too often, shelters euthanize animals due to room constraints, but if more people adopted pets instead of buying them, the number of pets euthanized would lower dramatically.

                            When you adopt, not only do you save your loving new companion, but you make space for other animals who desperately need it, creating a domino effect of goodness.</p>
                        <div className='my-5 flex items-center justify-center'>
                            <PhotoProvider>
                                <PhotoView src={img1}>
                                    <img src={img1} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                    </div>
                </div>
                <div className='mx-5'>

                    <div>
                        <h1 className='font-bold text-4xl text-blue-900 mb-12 navbar-text mt-24'>IT’S A WAY TO COMBAT PUPPY MILLS</h1>
                        <p className='font-bold text-blue-900'>“Puppy mill” sounds cute until you find out they are factory-style breeding facilities that often prioritize profit over animal welfare. Housed in poor conditions with little to no medical care, the animals in these mills suffer greatly. The puppies from these mills are often sick or traumatized and the mothers discarded once they’re no longer “profitable.”

                            When a family buys a dog from a pet store, it’s almost certainly a puppy mill dog. When you adopt, you’re saying no to an awful practice and keeping money out of their pockets.</p>
                        <div className='my-5 flex items-center justify-center '>
                            <PhotoProvider>
                                <PhotoView src={img2}>
                                    <img src={img2} className='object-cover h-80 w-100' alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                    </div>
                </div>
                <div className='mx-5'>
                    <div>
                        <h1 className='font-bold text-4xl text-blue-900 mb-12 navbar-text mt-24'>YOU GET A SUPPORT SYSTEM</h1>
                        <p className='font-bold text-blue-900'>When you get a dog from a pet store, the transaction usually ends once you exit the door. Many pet stores don’t have the resources or knowledge to provide any support if you have questions or problems with your new pet.

                            However, shelters and rescue groups usually have history on the animal, and the volunteers get to know the animal’s personality and likes and dislikes. This helps ease the transition, and more often than not, shelters are happy to help you through the introductory period because they care that the animal goes to a happy home.

                        </p>
                        <div className='my-5 flex items-center justify-center '>
                            <PhotoProvider>
                                <PhotoView src={img4}>
                                    <img src={img4} className='object-cover h-80 w-100' alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                    </div>
                </div>
                <div className='mx-5'>
                    <div>
                        <h1 className='font-bold text-4xl text-blue-900 mb-12 navbar-text mt-24'>TRAINING CAN BE EASIER</h1>
                        <p className='font-bold text-blue-900'>While some shelter animals come in as strays, many end up there because of human problems like a move or divorce, not because the animal wasn’t a good pet. Many are already house-trained and used to living with families, so training comes more naturally.</p>
                        <div className='my-5 flex items-center justify-center '>
                            <PhotoProvider>
                                <PhotoView src={img3}>
                                    <img src={img3} className='object-cover h-80 w-100' alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;