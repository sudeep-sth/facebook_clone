import React from "react";
import { Link } from "react-router-dom";

export const Leftside_cart = ({ title, icon, className, datas }) => {
  return (
    <div>
      <Link to={"items.path"} key={"index"} className="">
        <div className="flex items-center h-[52px] gap-2 ">
          <div className="w-[36px] h-[36px] capitalize className">{icon}</div>
          <div className="text-[15px] capitalize">{title}</div>
        </div>
      </Link>
    </div>
  );
};
