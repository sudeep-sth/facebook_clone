import React, { useState } from "react";

import { Link } from "react-router-dom";
import icon1 from "../../assets/heart.png";
import icon2 from "../../assets/group.png";
import icon3 from "../../assets/game.png";
import icon4 from "../../assets/flag.png";
import icon5 from "../../assets/box.png";
import icon6 from "../../assets/saved.png";
import icon7 from "../../assets/company.png";

import { IoIosArrowDown } from "react-icons/io";
import { Leftside_cart } from "./Leftside_cart";

const Leftside_data = () => {
  const [show, setShow] = useState(false);

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
    <div className="max-w-[360px] w-full h-full bg-[#F0F2F5] p-5 overflow-y-scroll no-scrollbar">
      <div className="flex   flex-col justify-center">
        <Leftside_cart
          title={"sudip shrestha"}
          icon={
            <img
              src={
                "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/411738791_122098223012159401_2080266576038945155_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Pq3DutQerAsAX9Glzv5&_nc_ht=scontent.fktm1-1.fna&oh=00_AfDpxeYlZXbdePKXTprK-ZIGWuoONAEgQ7oieyl-LMEurw&oe=65C7D8E5"
              }
              className="rounded-full"
            />
          }
        />
        <Leftside_cart title={"favourite"} icon={<img src={icon1} />} />
        <Leftside_cart title={"group"} icon={<img src={icon2} />} />
        <Leftside_cart title={"play game"} icon={<img src={icon3} />} />
        <Leftside_cart title={"pages"} icon={<img src={icon4} />} />
        <Leftside_cart title={"creater"} icon={<img src={icon5} />} />

        <div className={`${show ? "block" : "hidden"}`}>
          <Leftside_cart title={"saved"} icon={<img src={icon6} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
          <Leftside_cart title={"company"} icon={<img src={icon7} />} />
        </div>
        <button className="" onClick={() => setShow(!show)}>
          <Leftside_cart
            title={"See more"}
            icon={
              <div className="w-10 h-10 rounded-full  flex items-center  ">
                <IoIosArrowDown className="w-6 h-6 bg-gray-200 rounded-full p-1" />
              </div>
            }
            datas={console.log("hellow")}
          />
        </button>
      </div>
      <hr className="border-1 border-gray-300" />
    </div>
  );
};

export default Leftside_data;
