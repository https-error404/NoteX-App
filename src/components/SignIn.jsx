import React, { useState } from 'react';
import Logo from '../assets/NotexLogo2.png';
import Glogo from '../assets/G logo Google.png'
const SignIn = () => {


    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='w-full font-serif'>
            <div className='w-[35%] h-fit mt-10 mb-1 mx-auto border border-gray-300 rounded-md flex flex-col   '>

                <div className='flex m-2 mt-5 place-content-center'>
                    <img src={Logo} alt="Logo" className='h-28' />
                </div>
                <div className='flex  m-2 place-content-center '>
                    <h2 className='text-gray-900 font-medium text-lg'>Sign In</h2>
                </div>
                <section className='flex  place-content-center'>
                    <div className='flex justify-center items-center m-4 border border-gray-500 w-[80%] px-5 py-[0.4rem] rounded-full gap-x-2 hover:bg-blue-50 font-sans '>
                        <img src={Glogo} className='w-5 h-5 text-blue-500' />
                        <a href="#"
                            className='font-semibold text-blue-500'
                        >Sign in with Google</a>
                    </div>
                </section>

                <p className='my-4 text-gray-600 text-center'>or</p>

                <div className='w-full'>
                    <div className='flex flex-col items-center'>
                        <input type="email"
                            placeholder='Email*'
                            className='border border-gray-500 rounded p-2 w-[80%] h-12 m-3'
                        />
                    </div>

                    <div className='flex flex-col items-center'>
                        <input type="password"
                            placeholder='Password*'
                            className='border border-gray-500 rounded p-2 w-[80%] h-12 mx-3 mt-3'
                        />
                    </div>
                </div>

                <div className='flex justify-end mr-[2.9rem]'>
                    <a href="#"
                        className='text-blue-700 underline  text-sm'
                    >Forgot password?</a>
                </div>

                <div className='flex flex-row gap-x-1 place-content-start ml-12 m-3'>
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="cursor-pointer"
                    />
                    <label htmlFor="rememberMe" className="cursor-pointer font-sans" >
                        Remember me
                    </label>
                </div>

                <div className='flex flex-row justify-between mt-3 mb-6 mx-10 mr-12 font-sans font-semibold'>
                    <a href="#"
                        className='px-2 py-1 rounded text-blue-700 text-md hover:bg-blue-50'
                    >Create account</a>

                    <button className='bg-blue-700 rounded-full px-6 py-[0.6rem] text-white hover:shadow-md text-sm hover:bg-blue-900 '>
                        Sign in
                    </button>
                </div>
            </div>

            <div className='w-[35%] flex place-content-center mx-auto'>
                <p className='text-[0.9rem] font-sans'>
                    This site is protected by reCAPTCHA and the NoteX{' '}
                    <span className='text-blue-600 underline font-semibold'>
                        <a href="#">Privacy Policy</a>
                    </span>
                    {' '}and{' '}
                    <span className='text-blue-600 underline font-semibold'>
                        <a href="#">Terms of Service</a>
                    </span>
                    {' '}apply.
                </p>
            </div>
        </div>
    )
}

export default SignIn;
