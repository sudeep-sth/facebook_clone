import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BiSolidUser } from "react-icons/bi";
import { CgGames } from "react-icons/cg";
import { RiGroup2Fill } from "react-icons/ri";
import { FaLandmark } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { AiTwotoneMessage } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

import { IoSearch } from "react-icons/io5";

const Navbar = () => {

    const location = useLocation();

    const Navbardata = [
        {
            path: '/home',
            icon: <AiFillHome className=''  />,
            name: 'home'
        },
        {
            path: '/video',
            icon: <PiVideoFill />,
            name: 'video'
        },
        {
            path: '/market',
            icon: <FaLandmark />,
            name: 'market'
        },
        {
            path: '/group',
            icon: <RiGroup2Fill />,
            name: 'group'
        },
        {
            path: '/games',
            icon: <CgGames />,
            name: 'games'
        },


    ]

    const NavbardataRight = [
        {
            path: '/app',
            icon: <MdSpaceDashboard />,
            name: 'app'
        },


        {
            path: '/message',
            icon: <AiTwotoneMessage />,
            name: 'message'
        },


        {
            path: '/notification',
            icon: <IoMdNotifications />,
            name: 'notification'
        },


        {
            path: '/avtar',
            icon: <RxAvatar />,
            name: 'avtar'
        },


    ]

    return (
        <div className='max-w-screen  w-full flex justify-between bg-white p-2'>

            <div className='max-w-[300px] w-full flex  items-center gap-2'>
               <img src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-2038471-1718509.png" alt=""  className='w-10'/>
               <div className='bg-gray-300 border flex items-center gap-2  px-2 rounded-full'>
                <IoSearch />
                <input type="text" placeholder='search' className='p-1 bg-gray-300 rounded-full'/>
            </div>
            </div>


{/* center topbar */}
            <div className='flex gap-28 max-w-[800px] w-full justify-around items-center'>
                {Navbardata.map((items, index) => {
                    return (
                        <Link
                            to={items.path}
                            key={index}
                            className=''
                        >
                            <div className={`${location.pathname === items.path? "fill-blue-400" : ""}  text-2xl w-10 h-10 items-center flex justify-center hover:bg-slate-400 hover:`}>{items.icon}</div>
                            {/* <div>{items.name}</div> */} 

                        </Link>
                    )
                })}
            </div>


{/* right topbar */}
            <div className='flex gap-4 max-w-[300px] w-full  justify-end items-center'>
                {
                    NavbardataRight.map((items, index) => {
                        return (
                            <Link
                                to={items.path}
                                key={index}
                                className=''
                            >
                                <div className=' text-2xl'>{items.icon}</div>
                            </Link>
                        )
                    })
                }

            </div>
        </div>
    )

}

export default Navbar
