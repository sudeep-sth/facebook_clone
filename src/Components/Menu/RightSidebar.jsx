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
        <Rightside_card2
          image_link={
            "https://scontent.fktm1-1.fna.fbcdn.net/v/t45.1600-4/358024726_23857114537770101_8599314827449466418_n.jpg?stp=c0.37.296.296a_cp0_dst-jpg_p296x100_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=528f85&_nc_ohc=Mf8YV5XbAGMAX9pFLx9&_nc_ht=scontent.fktm1-1.fna&oh=00_AfCj9UdpuX7TbAdqcimGP2wP_fEOlvdZjsf8PZTXsbY3hA&oe=65C7782C"
          }
          title={"Transcription Powered by AI"}
          discription={"cockatoo.com"}
        />
      </div>

      <hr className="border-1 border-gray-300" />
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
            "https://mymodernmet.com/wp/wp-content/uploads/archive/zvY94dFUiqKwu1PMVsw5_thatnordicguyredo.jpg"
          }
        />
        <Rightside_cart
          name={"Rabi panday"}
          icon={
            "https://www.format.com/wp-content/uploads/kawai-matthews-kanye-west-1.jpg"
          }
        />
        <Rightside_cart
          name={"Sakshyam shrestha"}
          icon={
            "https://media1.popsugar-assets.com/files/thumbor/j8OmP4eyZE6KB0sCqgtqL0mIxKc=/fit-in/792x1188/filters:format_auto():upscale()/2016/02/03/048/n/1922398/b96203b44301ff51_GettyImages-507335078.jpg"
          }
        />
        <Rightside_cart
          name={"sandip shrestha"}
          icon={
            "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-1/339874018_607407251294702_3898574667760182565_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=r2-CsU-IMHgAX84ZQkM&_nc_ht=scontent.fktm1-1.fna&oh=00_AfD08Hc5P91CpyUvLqE7InnQSWI_lLJYUH39WXpu4y8fzg&oe=65C7CA8C"
          }
        />

        <Rightside_cart
          name={"suman khatri"}
          icon={
            "https://img.buzzfeed.com/buzzfeed-static/static/2022-06/27/20/asset/36241d3041bb/sub-buzz-1540-1656363492-5.jpg?resize=625:417"
          }
        />
        <Rightside_cart
          name={"amrit acharya"}
          icon={
            "https://scontent.fktm1-1.fna.fbcdn.net/v/t1.6435-9/126527658_410304213656817_1554798717553608074_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7a1959&_nc_ohc=4qZ3KsI9XGMAX9Af-ki&_nc_ht=scontent.fktm1-1.fna&oh=00_AfBbGXa5KhAi1jV96fOdw8pGrCjuiA3Qt6P6V4K2iMn8_w&oe=65EAD65B"
          }
        />
        <Rightside_cart
          name={"aayush basnet"}
          icon={
            "https://www.granitemagazine.com/wp-content/uploads/2023/10/hot-men.png.webp"
          }
        />
        <Rightside_cart
          name={"bashudev neupane"}
          icon={
            "https://scontent.fbhr4-1.fna.fbcdn.net/v/t1.6435-1/44583369_104599000533324_6722326844256813056_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=t1OdFyB-bUoAX9g3NZx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbhr4-1.fna&oh=00_AfA6ykxlLpWruhRct299_35WC8Ld91AdA_ylqBvsrDBnhg&oe=65E96F6D"
          }
        />
        <Rightside_cart
          name={"bikal adhakri"}
          icon={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ifgBKu-g8Y42z_VoVL8R09HqsE-5sWL4Yz-BHS-d_r3CriciDDe9xCKU9pdaS77dKC0&usqp=CAU"
          }
        />
      </div>
    </div>
  );
};

export default RightSidebar;
