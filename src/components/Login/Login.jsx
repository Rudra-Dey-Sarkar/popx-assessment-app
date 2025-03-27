import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from "react-router";
import { login } from '../../lib/authentication';

function Login() {
    const navigate = useNavigate();
    const form = useForm({
        email: "",
        password: "",
    });
    
    const { register, handleSubmit, formState: {
        errors
    } } = form;

    return (
        <div className="flex flex-col bg-[#F7F8F9] w-full sm:w-fit h-[100vh] m-auto px-5 pb-10">
            <p className='text-[29px] font-semibold w-[200px]'>Signin to your PopX account</p>
            <p className='text-[15px] text-gray-500 max-w-[200px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <form
                onSubmit={handleSubmit((data) => login(data, navigate))}>

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

                    <p className='my-5 text-[1.2rem] text-center'>Don't have an account ? <Link to="/signup" className='text-[#6c25ff] font-bold underline'>SignUp</Link></p>

                <button type='submit' className='btn mt-5 flex justify-center items-center bg-[#CBCBCB] text-white w-full sm:w-[335px] h-[46px] rounded-[5px] font-semibold'>Login</button>
            </form>
        </div>
    )
}

export default Login