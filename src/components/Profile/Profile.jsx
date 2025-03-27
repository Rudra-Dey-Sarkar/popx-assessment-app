import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";
import { logout } from '../../lib/authentication';

function Profile() {
    const navigate = useNavigate();

    const [user, setUser]=useState();

    useEffect(()=>{
        if(localStorage.getItem("login-user")!==null){
            setUser(JSON.parse(localStorage.getItem("login-user")));
        }else{
            navigate("/");
        }
    },[]);

    return (
        <div className='bg-[#F7F8F9] w-full sm:w-fit h-[100vh] m-auto pb-10'>
                <div className='flex justify-between py-5 px-5 bg-white'>
                    <p className='font-[500]'>Account Settings</p>
                    <button 
                    className='border-2 border-red-500 text-red-500 px-4 py-1 rounded-full hover:scale-105'
                    onClick={()=>logout(navigate)}>Logout</button>
                </div>
            <div className='w-full sm:w-[335px] px-5 py-5 border-b-[2px] border-[#CBCBCB] border-dashed'>
                <div className='flex gap-x-5 mb-5'>
                    {/* User picture */}
                    <div className='relative w-fit'>
                        <img
                            src="./user.png"
                            alt="user dp"
                            className='w-[76px] h-[76px] rounded-full border-[1px] border-gray-500 hover:scale-105' />
                        <img
                            src="./camera.svg"
                            alt="user dp"
                            className='absolute left-14 bottom-0' />
                    </div>
                    {/* user details */}
                    <div className='pt-2'>
                        <p className='font-bold'>{user?.name}</p>
                        <p>{user?.email}</p>
                    </div>
                </div>
                <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </div>
        </div>
    )
}

export default Profile

