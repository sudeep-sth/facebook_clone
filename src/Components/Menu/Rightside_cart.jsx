import React from 'react'

export const Rightside_cart = ({ icon, name, className }) => {
  return (
    // contact data

    <div>
      <div>
        <div className="flex items-center h-[52px] gap-2">
          <div className={` capitalize`}>
            <img src={icon} className="w-[36px] h-[36px] rounded-full" />
          </div>
          <div className="text-[15px] capitalize">{name}</div>
        </div>
      </div>
    </div>
  );
};
