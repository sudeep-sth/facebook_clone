

import React from 'react'

import { Link } from 'react-router-dom'
import icon1 from '../../assets/heart.png'
import icon2 from '../../assets/group.png'
import icon3 from '../../assets/game.png'
import icon4 from '../../assets/flag.png'
import icon5 from '../../assets/box.png'
import icon6 from '../../assets/saved.png'
import icon7 from '../../assets/company.png'
import { Leftside_cart } from "./Leftside_cart";

const Leftside_data = () => {
  const data = [
    {
      path: "/profile",
      name: "Sudip",
      icon: "",
    },

    {
      path: "/friends",
      name: "heart",
      icon: <img src={icon1} />,
    },

    {
      path: "/memories",
      name: "Friends",
      icon: <img src={icon2} />,
    },

    {
      path: "/saved",
      name: "Games",
      icon: <img src={icon3} />,
    },

    {
      path: "/group",
      name: "Pages",
      icon: <img src={icon4} />,
    },

    {
      path: "/video",
      name: "Box",
      icon: <img src={icon5} />,
    },

    {
      path: "/marketplace",
      name: "Saved",
      icon: <img src={icon6} />,
    },

    {
      path: "/feeds",
      name: "Markedplace",
      icon: <img src={icon7} />,
    },
  ];
  return (
    <div className="max-w-[360px] w-full h-full bg-[#F0F2F5] p-5 ">
      <div className="flex   flex-col justify-center">
        <Leftside_cart title={"sudip shrestha"} icon={<img src={'https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/411738791_122098223012159401_2080266576038945155_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=5740b7&_nc_ohc=Pq3DutQerAsAX-xeDDx&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfDteVQofHRjjPecqJQa2mDCDMzjjtfxEO7UgNVoaih0RA&oe=65C79842'} className='rounded-full' />} />
        <Leftside_cart title={"favourite"} icon={ <img src={icon1} />} />
        <Leftside_cart title={"group"} icon={ <img src={icon2} />} />
        <Leftside_cart title={"play game"} icon={ <img src={icon3} />} />
        <Leftside_cart title={"pages"} icon={ <img src={icon4} />} />
        <Leftside_cart title={"creater"} icon={ <img src={icon5} />} />
        <Leftside_cart title={"saved"} icon={ <img src={icon6} />} />
        <Leftside_cart title={"company"} icon={ <img src={icon7} />} />
        
      </div>
    </div>
  );
};

export default Leftside_data

