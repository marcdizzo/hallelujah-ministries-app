import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from "@material-tailwind/react";
import Dropdown from "components/dropdown";
import avatar from "../assets/img/avatars/avatar4.png";
import { logout } from 'features/userSlice';
import { isActiveStyles,isNotActiveStyles } from '../utils/styles'

const Header = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

  return (
    <>
        {/* <header>
            <div className='top-header py-2'>
                <div className="container">
                    <div className='d-flex justify-content-between'>
                        <div></div>
                        <div className='signin mr-[40px]'>
                            <Link to="/signin" className='signin-btn'>
                                Login
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </header> */}
        <header className='sticky top-0 z-30 bg-white'>
            <nav>
                <div className='py-3 shadow-md'>
                    <div className='container'>
                                <div className="header-2 justify-content-between d-flex">
                                    <div className='logo d-flex align-items-center'>
                                        <h1>
                                            Hallelujah Ministries
                                        </h1>
                                    </div>
                                
                                <div className='header-links gap-15 d-flex font-bold uppercase  align-items-end'>
                                    <NavLink to='/' className={({isActive}) => isActive ? isActiveStyles: isNotActiveStyles}>
                                        Home
                                    </NavLink>
                                    <NavLink to='/sermons' className={({isActive}) => isActive ? isActiveStyles: isNotActiveStyles}>
                                        Sermons
                                    </NavLink>
                                    <NavLink to='/devotions' className={({isActive}) => isActive ? isActiveStyles: isNotActiveStyles}>
                                        Devotionals
                                    </NavLink>
                                    <NavLink to='/about' className={({isActive}) => isActive ? isActiveStyles: isNotActiveStyles}>
                                        About Us
                                    </NavLink>
                                    <NavLink to='/contact' className={({isActive}) => isActive ? isActiveStyles: isNotActiveStyles}>
                                        Contact Us
                                    </NavLink>
                                </div>

                                {
                                    !user  && (
                                        <>
                                            <div className='d-flex align-items-center gap-15 justify-content-between'>
                                                   <NavLink to='/signin'>Sign in or Create Account</NavLink>
                                                   <NavLink><AiOutlineSearch className='icons' /></NavLink>
                                                    <NavLink>
                                                        <button className='border-0 button'>Give</button>   
                                                    </NavLink>
                                            </div>
                                        </>
                                    ) 
                                }

                                {
                                    user &&  (
                                        <>
                                            <div className='d-flex align-items-center gap-15 justify-content-between'>
                                                <Dropdown
                                                    button={
                                                        <img
                                                        className="h-10 w-10 rounded-full cursor-pointer"
                                                        src={avatar}
                                                        alt="Elon Musk"
                                                        />
                                                    }
                                                    children={
                                                       
                                                        <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                                                        <div className="p-4">
                                                            <div className="flex items-center gap-2">
                                                            <p className="text-sm font-bold text-navy-700 dark:text-white">
                                                                👋 Hey,{user.name}
                                                            </p>{" "}
                                                            </div>
                                                        </div>
                                                        <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

                                                        <div className="flex flex-col p-4">
                                                            {
                                                                !user.isAdmin && (
                                                                    <>
                                                                        <a
                                                                        href=" "
                                                                        className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                                                                        >
                                                                        Profile Settings
                                                                        </a>
                                                                        <Link
                                                                        to="/newsletter"
                                                                        className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white hover:text-blue-600"
                                                                        >
                                                                        Subscribe to Newsletter
                                                                        </Link>
                                                                    </>
                                                                )
                                                            }
                                                            {
                                                                user.isAdmin && (
                                                                    <>
                                                                        <a
                                                                        href=" "
                                                                        className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                                                                        >
                                                                        Profile 
                                                                        </a>
                                                                        <Link
                                                                        to="/dashboard"
                                                                        className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white hover:text-blue-600"
                                                                        >
                                                                        Dashboard
                                                                        </Link>
                                                                    </>
                                                                )
                                                            }
                                                            
                                                            <div
                                                            onClick={handleLogout}
                                                            className="mt-3 cursor-pointer text-sm font-medium text-red-500 hover:text-red-500"
                                                            >
                                                            Log out
                                                            </div>
                                                        </div>
                                                        </div>
                                                    }
                                                    classNames={"py-2 top-8 -left-[180px] w-max mt-4"}
                                                    />
                                                    {
                                                        !user.isAdmin && (
                                                            <>
                                                                <NavLink><AiOutlineSearch className='icons' /></NavLink>
                                                                <NavLink>
                                                                    <button className='border-0 button'>Give</button>   
                                                                </NavLink>
                                                            </>
                                                        )
                                                    }
                                                    
                                    </div>

                                        </>
                                    )
                                }
                                
                                
                                
                                </div>
                    </div>

                </div>
            </nav>
        </header>
    </>
  )
}

export default Header