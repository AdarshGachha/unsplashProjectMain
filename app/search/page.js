"use client"

import React from 'react'
import axios from 'axios'
import { CentralizedData } from '../Context'
import { useContext } from 'react'
import { useState } from 'react'

const page = () => {

    const [search, setsearch] = useState("");
    const [Images, setImages] = useState([])

  



    const SearchImages = async (e)=>{
        e.preventDefault();
        try {

            const {data} = await axios.get(`https://api.unsplash.com/search/photos?client_id=7PssaL7RBSBlcvASDL3esutmiFBYMg3VLlmwqN8hhwg&page=1&query=${search}`);
        console.log(data);
        
        setImages(data.results);

  
  
  
        
  
            
        }
        catch (error) {
            console.log(error)
            
        }
  
    }

    let renderImages =<p>Searching</p>
   
    if (Images.length > 0) {
        renderImages = Images.map((images,i)=>{

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
    <>

    
       <div className="Search">
       <form onSubmit={SearchImages}>
        <input type="text" name='search' value={search} onChange={(e)=>{setsearch(e.target.value)}} />
        <button>Search</button>
        </form>
       </div>
    
    <hr />
    <div className="allimages">
    {renderImages}

    </div>
    </>
  )
}

export default page