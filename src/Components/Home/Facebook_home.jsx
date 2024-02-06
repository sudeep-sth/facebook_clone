import React from 'react'
import Box_home from './Box_home'
import { StoryCart } from './StoryCart'

const Facebook_home = () => {



  return (
    <div className="h-10 w-[800px] bg-red-100 flex gap-2 justify-center border-5 border-black">
      <div className='w-[590px] h-[265px]'>
      <div className='w-[590px] h-[250px] flex gap-2 justify-center border-2 border-white'>
      <StoryCart
        image={
          <img
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699660800&semt=sph"
            className="h-[250px] rounded-lgnp"
          />
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
        name={<h6 className="font-semibold text-[15px]">sudip shrestha</h6>}
      />

      <StoryCart />
      <StoryCart />
      </div>
      </div>

    </div>
  );
}

export default Facebook_home