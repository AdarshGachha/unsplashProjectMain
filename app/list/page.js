"use client"
import React from 'react'
import axios from 'axios'

import { useContext } from 'react'
import { CentralizedData } from '../Context'


const Trending = () => {

    const [data, setData] = useContext(CentralizedData)
    console.log(data)

    


    let renderImages = <p>Loading</p>
    if (data.length>0) {
      
     renderImages = data.map((images,i)=>{

      return (
          <div key={images.id}>

            <div className="images">
            <img height={300} src={images.urls.small} alt="" />

            </div>
            <p>{images.user.first_name}</p>

              
              
          </div>

      );

  })
      
    }


  

   
  return (
    <div className='Trend'>
            <h1>Trending</h1>
            <div className="allimages">
            {renderImages}

            </div>

            
         

        
            
        </div>
  )
}

export default Trending