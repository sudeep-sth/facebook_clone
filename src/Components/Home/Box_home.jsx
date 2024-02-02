import React from 'react'
import { StoryCart } from './StoryCart'

const Box_home = () => {
    const datas = [
        {
            name: 'img',
            img: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699660800&semt=sph',
            path: ''
        },


        {
            name: 'img',
            img: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            path: ''
        },


        {
            name: 'img',
            img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
            path: ''
        },


        {
            name: 'img',
            img: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg',
            path: ''
        }
    ]
    
    return (
        <div>
           <StoryCart 
           
           image = {<img />}

           />

        </div>
    )
}

export default Box_home