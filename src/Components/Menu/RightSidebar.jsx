import React from "react";
import { Link } from "react-router-dom";
import { Rightside_cart } from "./Rightside_cart";

import { IoSearch } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { Rightside_card2 } from "./Rightside_card2";

const RightSidebar = () => {
  const RightSidebardata = [
    {
      path: "/page",
      name: "Pages",
      icon: "",
    },

    {
      path: "/birthday",
      name: "birthday",
      icon: "",
    },

    {
      path: "/Contacts",
      name: "Contacts",
      icon: "",
    },
  ];

  return (
    <div className="max-w-[360px] w-full bg-[#F0F2F5] overflow-auto">
      {/* rightside bar upperpart */}
      <div>
        <Rightside_card2
          image_link={
            "https://scontent.fktm1-1.fna.fbcdn.net/v/t45.1600-4/358024726_23857114537770101_8599314827449466418_n.jpg?stp=c0.37.296.296a_cp0_dst-jpg_p296x100_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=528f85&_nc_ohc=Mf8YV5XbAGMAX9pFLx9&_nc_ht=scontent.fktm1-1.fna&oh=00_AfCj9UdpuX7TbAdqcimGP2wP_fEOlvdZjsf8PZTXsbY3hA&oe=65C7782C"
          }
          title={"Transcription Powered by AI"}
          discription={"cockatoo.com"}
        />
      </div>

      <hr />
      {/* rightsidebar lower part */}

      <div className="flex justify-between items-center">
        <div>
          <h1>Contact</h1>
        </div>
        <div className="flex gap-10">
          <div>
            <IoSearch />
          </div>
          <div>
            <SlOptions />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <Rightside_cart
          name={"Prativa sapkota"}
          icon={
            <img
              src={
                "https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/422645124_122111055074192260_3955444921554591198_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_ohc=m-o1sISXDzgAX8UF5yx&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfAHnBS3u_Y76aHZ-MkrQ7531Kz7WPoLbSLCynV-syULFw&oe=65C6184F"
              }
              className="rounded-full"
            />
          }
        />
        <Rightside_cart
          name={"Rabi panday"}
          icon={
            <img
              src={
                "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/325872014_873140867264564_8303413768593299966_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=syfNTjRC1J0AX8FgMwk&_nc_ht=scontent.fktm1-1.fna&oh=00_AfCYBvkF_SiAc0Cfr5OrpAFjSRdSLkeF-8iHU1ApbgnLeg&oe=65C79053"
              }
              className="rounded-full"
            />
          }
        />
        <Rightside_cart
          name={"Sakshyam shrestha"}
          icon={
            <img
              src={
                "https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/420052099_122119060286146011_60442220198318610_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=5740b7&_nc_ohc=We683umqsiwAX-POSs9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfDAy0r_T8fbw2a3HWi2-Top205XZ0jGztB6t3-p0Ljv5g&oe=65C7705C"
              }
              className="rounded-full"
            />
          }
        />
        <Rightside_cart
          name={"sandip shrestha"}
          icon={
            <img
              src={
                "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-1/339874018_607407251294702_3898574667760182565_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=r2-CsU-IMHgAX84ZQkM&_nc_ht=scontent.fktm1-1.fna&oh=00_AfD08Hc5P91CpyUvLqE7InnQSWI_lLJYUH39WXpu4y8fzg&oe=65C7CA8C"
              }
              className="rounded-full"
            />
          }
        />
        <Rightside_cart
          name={"suman khatri"}
          icon={
            <img
              src={
                "https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/272989484_1455986198136452_7632788449206095638_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=RqNIfkneHyAAX-2iRdC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfAh-284p2KD2u5TFcXLEY8ClOkS_MoLdlvjf60tXLTaDA&oe=65C6F254"
              }
              className="rounded-full"
            />
          }
        />
        <Rightside_cart
          name={"amrit acharya"}
          icon={
            <img
              src={
                "https://scontent.fktm1-1.fna.fbcdn.net/v/t1.6435-9/126527658_410304213656817_1554798717553608074_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7a1959&_nc_ohc=4qZ3KsI9XGMAX9Af-ki&_nc_ht=scontent.fktm1-1.fna&oh=00_AfBbGXa5KhAi1jV96fOdw8pGrCjuiA3Qt6P6V4K2iMn8_w&oe=65EAD65B"
              }
              className="rounded-full"
            />
          }
        />
        <Rightside_cart
          name={"aayush basnet"}
          icon={
            <img
              src={
                "https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/357098061_1386746161896961_6978028263067032518_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ArAI6MBQrbkAX8K-pUW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfDczrUyPCjNJK8Fc-VJBmeOoLWcTgM7AQmD9CR9qadNqQ&oe=65C72036"
              }
              className="rounded-full"
            />
          }
        />
        <Rightside_cart
          name={"bashudev neupane"}
          icon={
            <img
              src={
                "https://scontent.fbhr4-1.fna.fbcdn.net/v/t1.6435-1/44583369_104599000533324_6722326844256813056_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=t1OdFyB-bUoAX9g3NZx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfA6ykxlLpWruhRct299_35WC8Ld91AdA_ylqBvsrDBnhg&oe=65E96F6D"
              }
              className="rounded-full"
            />
          }
        />
        <Rightside_cart
          name={"bikal adhakri"}
          icon={
            <img
              src={
                "https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-1/338183053_1318657078991972_7097531881391622034_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5740b7&_nc_ohc=OYypZrH-gxwAX9asHMH&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfDAxuAA0YGmpyZTTWjbvNLmrhH7QWpeAtkA_9pp7PWktg&oe=65C78614"
              }
              className="rounded-full"
            />
          }
        />
      </div>
    </div>
  );
};

export default RightSidebar;
