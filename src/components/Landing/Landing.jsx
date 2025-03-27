import React from 'react'
import { Link } from 'react-router'

function Landing() {
    const user = localStorage.getItem("login-user");
    
    return (
        <div className='flex flex-col justify-end bg-[#F7F8F9] w-full sm:w-fit h-[100vh] m-auto px-5 pb-10'>

            <div className='w-full '>
                <p className='text-[29px] font-semibold'>Welcome to PopX</p>
                <p className='text-[15px] text-gray-500 max-w-[200px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                <div className='w-full grid gap-y-2 mt-5'>
                    <Link to="/signup" className='btn  flex justify-center items-center bg-[#6c25ff] text-white w-full sm:w-[335px] h-[46px] rounded-[5px] font-semibold'>Create Account</Link>
                    {user !== null &&
                        <label htmlFor='login' className='text-[1.2rem] text-center font-semibold'>Press Login Button For Direct Login 👇🏼</label>
                    }
                    <Link to={`${user!==null ? "/profile" : "/login"}`} className={`${user!==null ? "active-btn" : "btn"} flex justify-center items-center bg-[#cebafb] w-full sm:w-[335px] h-[46px] rounded-[5px] font-semibold hover:text-white`}>Already Registered ? Login</Link>
                </div>
            </div>

        </div>
    )
}

export default Landing