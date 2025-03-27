import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router";
import { signup } from '../../lib/authentication';

function Signup() {
    const navigate = useNavigate();
    const form = useForm({
        name: "",
        contactNumber: null,
        email: "",
        password: "",
        companyName: "",
        agency: null
    });
    
    const { register, handleSubmit, formState: {
        errors
    } } = form;
    return (
        <div className="flex flex-col bg-[#F7F8F9] w-full sm:w-fit h-[100vh] m-auto px-5 pb-10">
            <p className='text-[29px] font-semibold w-[200px]'>Create Your PopX Account</p>
            <form
                onSubmit={handleSubmit((data) => signup(data, navigate))}
                className='flex flex-col justify-between flex-grow'>

                <div>
                    {/* Name */}
                    <div className='relative grid mt-5'>
                        <label
                            htmlFor="name"
                            className='absolute bottom-[25px] bg-[#F7F8F9] mx-2 pl-1 pr-3 text-[#6C25FF] '>Full Name <strong className='text-[#DD4A3D]'>*</strong> </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            placeholder='Enter name'
                            className='border-2 border-gray-300 bg-[#F7F8F9] p-1 w-full sm:w-[335px] rounded-[5px]' />
                    </div>
                    {errors.name && <p className='text-[12px] text-red-500'>Name is required</p>}

                    {/* Contact Number */}
                    <div className='relative grid mt-5'>
                        <label
                            htmlFor="contact number"
                            className='absolute bottom-[25px] bg-[#F7F8F9] mx-2 pl-1 pr-3 text-[#6C25FF] '>Phone Number <strong className='text-[#DD4A3D]'>*</strong> </label>
                        <input
                            type="number"
                            {...register("contactNumber", { required: true })}
                            placeholder='Enter phone number'
                            className='border-2 border-gray-300 bg-[#F7F8F9] p-1 w-full sm:w-[335px] rounded-[5px]' />
                    </div>
                    {errors.contactNumber && <p className='text-[12px] text-red-500'>Contact number is required</p>}
                    
                    {/* Email address */}
                    <div className='relative grid mt-5'>
                        <label
                            htmlFor="email"
                            className='absolute bottom-[25px] bg-[#F7F8F9] mx-2 pl-1 pr-3 text-[#6C25FF] '>Email Address<strong className='text-[#DD4A3D]'>*</strong> </label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder='Enter email address'
                            className='border-2 border-gray-300 bg-[#F7F8F9] p-1 w-full sm:w-[335px] rounded-[5px]' />
                    </div>
                    {errors.email && <p className='text-[12px] text-red-500'>Email is required</p>}

                    {/* Password */}
                    <div className='relative grid mt-5'>
                        <label
                            htmlFor="password"
                            className='absolute bottom-[25px] bg-[#F7F8F9] mx-2 pl-1 pr-3 text-[#6C25FF] '>Password<strong className='text-[#DD4A3D]'>*</strong> </label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            placeholder='Enter password'
                            className='border-2 border-gray-300 bg-[#F7F8F9] p-1 w-full sm:w-[335px] rounded-[5px]' />
                    </div>
                    {errors.password && <p className='text-[12px] text-red-500'>Password is required</p>}

                    {/* Company */}
                    <div className='relative grid mt-5'>
                        <label
                            htmlFor="company"
                            className='absolute bottom-[25px] bg-[#F7F8F9] mx-2 pl-1 pr-3 text-[#6C25FF] '>Company Name<strong className='text-[#DD4A3D]'>*</strong> </label>
                        <input
                            type="text"
                            {...register("companyName", { required: true })}
                            placeholder='Enter company name'
                            className='border-2 border-gray-300 bg-[#F7F8F9] p-1 w-full sm:w-[335px] rounded-[5px]' />
                    </div>
                    {errors.companyName && <p className='text-[12px] text-red-500'>Company Name is required</p>}

                    {/* Agency */}
                    <div className='grid mt-5'>
                        <label
                            htmlFor="agency"
                            className=''>Are you an Agency?<strong className='text-[#DD4A3D]'>*</strong> </label>
                        <div>
                            <input
                                type="radio"
                                {...register("agency", { required: true })}
                                className='accent-[#6C25FF]' value="yes" />
                            <label htmlFor="agency" className='mx-2'>Yes</label>
                            <input
                                type="radio"
                                {...register("agency", { required: true })}
                                className='accent-[#6C25FF]' value="no" />
                            <label htmlFor="agency" className='ml-2'>No</label>
                        </div>
                    </div>
                    {errors.companyName && <p className='text-[12px] text-red-500'>Agency confirmation is required</p>}
                    
                    <p className='mt-10 text-[1.2rem] text-center'>Already have an account ? <Link to="/login" className='text-[#6c25ff] font-bold underline'>Login</Link></p>
                </div>

                <button type='submit' className='btn flex justify-center items-center bg-[#6c25ff] text-white w-full sm:w-[335px] h-[46px] rounded-[5px] font-semibold'>Create Account</button>
            </form>
        </div>
    )
}

export default Signup