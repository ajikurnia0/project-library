import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../logo.svg";



const Navbar = (props) => {
    // console.log(props.myEmail.email)

    return (
        <section id='navbar'>
            <div className='sticky top-0 left-0 border-b flex justify-between px-10 bg-gray-100 h-[80px] w-full items-center shadow shadow-slate-300'>
                <div>
                    <Link to='/'>
                        <span>
                            <img src={logo} alt="logo" className='animate-spin-slow  h-10 invert ml-3 inline' /> Perpustakaan
                        </span>
                    </Link>

                </div>
                <div>
                    <span className='p-3'>
                        Home
                    </span>
                    <span className='mr-3 p-3'>
                        FAQ
                    </span>
                    {
                        props.myEmail.email ?
                            <>
                                <span className='font-bold'>
                                    {props.myEmail.email}
                                </span>
                                <span>
                                    <button className='bg-white text-black px-3 py-1 rounded-full border border-black drop-shadow-sm mr-3 hover:bg-red-500' > <a href='http://localhost:3000/'>Log Out</a> </button>
                                </span>
                            </>
                            :
                            <>
                                <span>
                                    <button className='bg-white text-black px-3 py-1 rounded-full border border-black drop-shadow-sm mr-3 hover:bg-cyan-300' > <a href='http://localhost:3000/login'>Sign In</a> </button>
                                </span>
                                <span>
                                    <button className='animate-bounce bg-black text-white px-3 py-1 rounded-full border drop-shadow-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300'> <a href='http://localhost:3000/register'> Join Now</a></button>
                                </span>
                            </>
                    }

                </div>
            </div>
        </section>
    )
}

export default Navbar