
"use client"
import { useContext } from "react"
import { useRouter } from "next/navigation"
import {CentralizedData} from "./Context"
import axios from "axios"
import Link from "next/link"

const page = () => {
  const router = useRouter()

  const [data, setData] = useContext(CentralizedData);
  
  

   const GetImages = async ()=>{
        try {
            const {data} = await axios.get("https://api.unsplash.com/photos?client_id=7PssaL7RBSBlcvASDL3esutmiFBYMg3VLlmwqN8hhwg&page=1");
        console.log(data);

        setData(data);
        router.push("/list")



        

            
        }
        catch (error) {
            console.log(error)
            
        }

    }

  

 
   
  


  return (
    <>
    
    <button onClick={GetImages}>
                Trend Images
            </button>
            <Link href="/search">
            <button>
                SearchImages
            </button>
            </Link>
            

    </>
    
  )
}

export default page