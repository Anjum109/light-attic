import React from 'react';
import { useForm } from 'react-hook-form';
import contact from '../../../assets/images/contact.jpg'
import Navbar from '../../../Shared/Navbar/Navbar';
import { motion } from "framer-motion";
const Connect = () => {

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
        console.log("~ e", e);
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };


    return (
        <div>
            <Navbar></Navbar>
            <section id="contact" className="contact py-28 max-w-screen-xl mx-auto ">
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="flex justify-start w-full"
                >
                    <div>
                        <p className="font-playfair font-semibold text-4xl text-left navbar-text text-blue-900">
                            <span className="text-black">CONTACT US</span> TO GET STARTED
                        </p>
                    </div></motion.div>


                {/* FORM & IMAGE */}
                <div className="md:flex md:justify-between gap-16 mt-5">

                    <div className='w-50'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="basis-1/2 flex justify-center"
                        >
                            <img src={contact} className='w-full rounded-lg' alt="contact" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="basis-1/2 mt-10 md:mt-0"
                    >

                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/899f28851e882566fa616f48c200fc2f"
                            method="POST"
                            className='mx-5 lg:mx-0'
                        >
                            <input
                                className="w-full input-bg font-semibold placeholder-opaque-black p-3 mt-5"
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="text-red mt-1">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max length is 100 char."}
                                </p>
                            )}

                            <input
                                className="w-full input-bg font-semibold placeholder-opaque-black p-3 mt-5"
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="text-red mt-1">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}

                            <textarea
                                className="w-full input-bg font-semibold placeholder-opaque-black p-3 mt-5"
                                name="message"
                                placeholder="MESSAGE"
                                rows="4"
                                cols="50"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="text-red mt-1">
                                    {errors.message.type === "required" &&
                                        "This field is required."}
                                    {errors.message.type === "maxLength" &&
                                        "Max length is 2000 char."}
                                </p>
                            )}

                            <button
                                className="p-5 rounded-lg bg-blue-900 text-blue-100 font-semibold text-deep-blue mt-5 hover:bg-sky-500 hover:text-white transition duration-500"
                                type="submit"
                            >
                                SEND US A MESSAGE
                            </button>
                        </form>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Connect;