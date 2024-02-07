import React from "react";

export const Rightside_card2 = ({ image_link, title, discription }) => {
  return (
    <div className="mt-5">
      <div>
        <div className="">
          <div className={``}>
            <img
              src={image_link}
              className="w-[100px] h-[100px] border-2 border-black"
            />
          </div>
          <div className="text-[15px] capitalize">{title}</div>
          <div className="text-[15px] capitalize">{discription}</div>
        </div>
      </div>
    </div>
  );
};
