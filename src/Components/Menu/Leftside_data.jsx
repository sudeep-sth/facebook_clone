

import React from 'react'

import { Link } from 'react-router-dom'
import icon1 from '../../assets/heart.png'
import icon2 from '../../assets/group.png'
import icon3 from '../../assets/game.png'
import icon4 from '../../assets/flag.png'
import icon5 from '../../assets/box.png'
import icon6 from '../../assets/saved.png'
import icon7 from '../../assets/company.png'


const Leftside_data = () => {

    const data = [
        {
            path: '/profile',
            name: 'Sudip',
            icon:'',
        },


        {
            path: '/friends',
            name: 'heart',
            icon: <img src={icon1}/>,
        },


        {
            path: '/memories',
            name: 'Friends',
            icon:  <img src={icon2}/>,
        },


        {
            path: '/saved',
            name: 'Games',
            icon:  <img src={icon3}/>
        },


        {
            path: '/group',
            name: 'Pages',
            icon:  <img src={icon4}/>
        },


        {
            path: '/video',
            name: 'Box',
            icon:  <img src={icon5}/>
        },


        {
            path: '/marketplace',
            name: 'Saved',
            icon:  <img src={icon6}/>
        },


        {
            path: '/feeds',
            name: 'Markedplace',
            icon: <img src={icon7}/>
        },


    ]
    return (

        <div className='max-w-[300px] w-full h-full bg-[#F0F2F5] p-5 '>
            <div className='flex  gap-2 flex-col justify-center'>
            {
                
                data.map((items, index) => {
                    return (
                        <Link
                            to={items.path}
                            key={index}
                            className=''

                        >
                            <div className='flex items-center'>
                            <div className='w-9'>{items.icon}</div>
                            <div>{items.name}</div>
</div>
                        </Link>

                    )
                })
            }
            </div>
        </div>

    )
}

export default Leftside_data

