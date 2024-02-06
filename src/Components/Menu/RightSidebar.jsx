import React from 'react'
import { Link } from 'react-router-dom'
import { Rightside_cart } from './Rightside_cart'

import { IoSearch } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";

const RightSidebar = () => {

  const RightSidebardata =
    [
      {
        path: '/page',
        name: 'Pages',
        icon: '',
      },

      {
        path: '/birthday',
        name: 'birthday',
        icon: '',
      },

      {
        path: '/Contacts',
        name: 'Contacts',
        icon: '',
      },




    ]

  return (
    <div className='max-w-[360px] w-full bg-[#F0F2F5]'>

<div className='flex justify-between items-center'>
  <div>
  <h1>Contact</h1>
  </div>
  <div className='flex gap-10'>
<div>
  <IoSearch/>
</div>
<div>
<SlOptions/>
</div>
  </div>
</div>

      <div className="flex flex-col justify-center">
        
       <Rightside_cart name={"Prativa sapkota"}  icon={<img src={"https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/422645124_122111055074192260_3955444921554591198_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_ohc=m-o1sISXDzgAX8UF5yx&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfAHnBS3u_Y76aHZ-MkrQ7531Kz7WPoLbSLCynV-syULFw&oe=65C6184F"}  className='rounded-full'/>}/>
       <Rightside_cart name={"Rabi panday"}  icon={<img src={"https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/325872014_873140867264564_8303413768593299966_n.jpg?stp=dst-jpg_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=5740b7&_nc_ohc=syfNTjRC1J0AX_w9AUX&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfBjudCM6obZn_bSZUb7a_q0RvFlq74vliTJ41IYs-PDkA&oe=65C6A6D5"}  className='rounded-full'/>}/>
       <Rightside_cart name={"Sakshyam shrestha"}  icon={<img src={"https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/420052099_122119060286146011_60442220198318610_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=5740b7&_nc_ohc=We683umqsiwAX-POSs9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfDAy0r_T8fbw2a3HWi2-Top205XZ0jGztB6t3-p0Ljv5g&oe=65C7705C"}  className='rounded-full'/>}/>
       <Rightside_cart name={"sandip shrestha"}  icon={<img src={"https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/339874018_607407251294702_3898574667760182565_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=r2-CsU-IMHgAX8Si3CS&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfALC_1VkJMsODuQk6sra7NTniGd9gPeLxp6UTLWNDtBpQ&oe=65C7CA8C"}  className='rounded-full'/>}/>
       <Rightside_cart name={"suman khatri"}  icon={<img src={"https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/272989484_1455986198136452_7632788449206095638_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=RqNIfkneHyAAX-2iRdC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfAh-284p2KD2u5TFcXLEY8ClOkS_MoLdlvjf60tXLTaDA&oe=65C6F254"}  className='rounded-full'/>}/>
       <Rightside_cart name={"amrit acharya"}  icon={<img src={"https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/340791416_744543610549512_8019986821487973806_n.jpg?stp=c0.23.100.100a_dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_ohc=CmD0Y0YJV-MAX9BLL-e&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfAWFdyvUJC6b6pnp2wJ_XSXx6BwB4phwN9gD7auLJcvYQ&oe=65C6A826"}  className='rounded-full'/>}/>
       <Rightside_cart name={"aayush basnet"}  icon={<img src={"https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/357098061_1386746161896961_6978028263067032518_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ArAI6MBQrbkAX8K-pUW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfDczrUyPCjNJK8Fc-VJBmeOoLWcTgM7AQmD9CR9qadNqQ&oe=65C72036"}  className='rounded-full'/>}/>
       <Rightside_cart name={"bashudev neupane"}  icon={<img src={"https://scontent.fbhr4-1.fna.fbcdn.net/v/t1.6435-1/44583369_104599000533324_6722326844256813056_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=t1OdFyB-bUoAX9g3NZx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfA6ykxlLpWruhRct299_35WC8Ld91AdA_ylqBvsrDBnhg&oe=65E96F6D"} className='rounded-full' />}/>
       <Rightside_cart name={"bikal adhakri"}  icon={<img src={"https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/338183053_1318657078991972_7097531881391622034_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5740b7&_nc_ohc=OYypZrH-gxwAX9asHMH&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfDAxuAA0YGmpyZTTWjbvNLmrhH7QWpeAtkA_9pp7PWktg&oe=65C78614"} className='rounded-full' />}/>
        
      </div>
    </div>
  )
}

export default RightSidebar
