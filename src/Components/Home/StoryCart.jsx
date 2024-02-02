import React from 'react'

export const StoryCart = ({image, name, addstory}) => {
  return (
    <div className={`border w-[140px] h-[250px] border-red-400 rounded-lg mt-5 relative`}>
        <div className='absolute bottom-0 '>{addstory}</div>
<div className='w-full  '>{image}</div>
<div className='absolute bottom-2 left-2'>{name}</div>
    </div>
  )
}