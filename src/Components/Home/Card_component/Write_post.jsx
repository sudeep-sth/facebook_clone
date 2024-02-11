import React from "react";

export const Write_post = ({ cross }) => {
  
  return (
    <div
      className="w-screen h-screen flex items-center absolute justify-center bg-white backdrop-blur-sm bg-opacity-25"
      onClick={() => {
        cross(false);
      }}
    >
      <div
        className="w-[500px] h-[460px] bg-white border border-red-500 fixed rounded-lg "
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="flex border justify-center ">
          <div>Create Post</div>
          <button
            onClick={() => {
              cross(false);
            }}
            className="flex"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
