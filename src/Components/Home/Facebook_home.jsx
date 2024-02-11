import React, { useState } from "react";
import { StoryCart } from "./Card_component/StoryCart";
import { Create_post_card } from "./Card_component/Create_post_card";
import video_icon from "../../assets/fbvideo.png";
import image_icon from "../../assets/image.png";
import felling_icon from "../../assets/felling.png";
import { Write_post } from "./Card_component/Write_post";

const Facebook_home = () => {
  const [postpop, setPostpop] = useState(false);

  const openpostcard = () => {
    setPostpop(true);
    console.log("first");
  };
  return (
    <div className="h-screen w-[800px] flex flex-col items-center ">
      {/* <Write_post /> */}

      {postpop && <Write_post cross={setPostpop(false)} />}

      {/* Facebook story section */}
      <div className="max-w-[590px]  h-[265px] mt-5    flex items-center pb-[14px] ">
        <div className="w-full h-[250px] flex gap-2 overflow-x-scroll no-scrollbar">
          <StoryCart
            url={
              "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699660800&semt=sph"
            }
            addstory={
              <div className=" rounded-b-lg w-[139px] bg-black h-[49px] relative">
                <div className="absolute bottom-2  text-white font-semibold text-[15px]">
                  Create story
                </div>
              </div>
            }
          />

          <StoryCart
            url={
              "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name={<h6 className="font-semibold text-[15px]">sudip shrestha</h6>}
          />
          <StoryCart
            url={
              "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name={<h6 className="font-semibold text-[15px]">sudip shrestha</h6>}
          />
          <StoryCart
            url={
              "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name={<h6 className="font-semibold text-[15px]">sudip shrestha</h6>}
          />
          <StoryCart
            url={
              "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name={<h6 className="font-semibold text-[15px]">sudip shrestha</h6>}
          />
          <StoryCart
            url={
              "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name={<h6 className="font-semibold text-[15px]">sudip shrestha</h6>}
          />
          <StoryCart
            url={
              "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name={<h6 className="font-semibold text-[15px]">sudip shrestha</h6>}
          />
          <StoryCart
            url={
              "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name={<h6 className="font-semibold text-[15px]">sudip shrestha</h6>}
          />
          <StoryCart
            url={
              "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name={<h6 className="font-semibold text-[15px]">sudip shrestha</h6>}
          />
          <StoryCart
            url={
              "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name={<h6 className="font-semibold text-[15px]">sudip shrestha</h6>}
          />
          <StoryCart
            url={
              "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name={<h6 className="font-semibold text-[15px]">sudip shrestha</h6>}
          />
          <StoryCart
            url={
              "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            name={<h6 className="font-semibold text-[15px]">sudip shrestha</h6>}
          />
        </div>
      </div>
      {/* story section ends */}

      {/* Create post section */}
      <div className="w-[500px] h-[122px] border px-3 pt-4 pb-[10px] bg-white rounded-xl">
        <div className="w-[468px] h-[40px]  flex items-center gap-2 mb-3">
          <img
            src="https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/411738791_122098223012159401_2080266576038945155_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Pq3DutQerAsAX9Glzv5&_nc_ht=scontent.fktm1-1.fna&oh=00_AfDpxeYlZXbdePKXTprK-ZIGWuoONAEgQ7oieyl-LMEurw&oe=65C7D8E5"
            alt=""
            className="rounded-full w-[40px] h-[40px]"
          />
          <div className="w-[420px] h-[40px]  flex items-center rounded-full justify-center bg-[#F0F2F5]">
            <input
              type="text"
              className="w-[396px] h-[22px] rounded-full bg-[#F0F2F5]"
              placeholder="What's on your mind Sudip?"
              onClick={openpostcard}
            />
          </div>
        </div>
        <hr />
        <div className="flex justify-around pt-2 w-[468px] h-[49px]">
          <Create_post_card icons={video_icon} title={"Live video"} />
          <Create_post_card icons={image_icon} title={"Photo/video"} />
          <Create_post_card icons={felling_icon} title={"Feeling/activity"} />
        </div>
      </div>
      {/* create post section end */}

      {/* post section */}

      <div className="w-[500px] h-[500px] border px-3 pt-4 pb-[10px] bg-white rounded-xl mt-2">
        <div className="w-[468px] h-[40px]  flex items-center gap-2 mb-3">
          <img
            src="https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/411738791_122098223012159401_2080266576038945155_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Pq3DutQerAsAX9Glzv5&_nc_ht=scontent.fktm1-1.fna&oh=00_AfDpxeYlZXbdePKXTprK-ZIGWuoONAEgQ7oieyl-LMEurw&oe=65C7D8E5"
            alt=""
            className="rounded-full w-[40px] h-[40px]"
          />
          <div className="w-[420px] h-[40px]  ">
            <div>
              <span>sudip shrestha </span> is in{" "}
              <span>supa deurali tempal, argakhachi</span>
            </div>
          </div>
        </div>
      </div>
      {/* post section end */}
    </div>
  );
};

export default Facebook_home;
