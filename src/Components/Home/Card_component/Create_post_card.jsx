import React from "react";

export const Create_post_card = ({ icons, title }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={icons} alt="" className="w-[24px] h-[24px]" />
      <div>{title}</div>
    </div>
  );
};
