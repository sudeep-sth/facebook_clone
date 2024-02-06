import React from 'react'
import { Link } from 'react-router-dom'



const RightSidebar = () => {

  const RightSidebardata =
    [
      {
        path: '/page',
        name: 'Pages',
        icon: '',
      },

      {
        path: '/birthday',
        name: 'birthday',
        icon: '',
      },

      {
        path: '/Contacts',
        name: 'Contacts',
        icon: '',
      },




    ]

  return (
    <div className='max-w-[360px] w-full bg-[#F0F2F5]'>
      {
        RightSidebardata.map((items, index) => {
          return (
            <Link
              to={items.path}
              key={index}
              className=''
            >
              <div>{items.icon}</div>
              <div>{items.name}</div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default RightSidebar
