
"use client"
import { useContext } from "react"
import { useRouter } from "next/navigation"
import {CentralizedData} from "./Context"
import axios from "axios"
import Link from "next/link"
import { Button } from "@material-tailwind/react"

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
    <div className=" flex items-center justify-center gap-2 h-screen">
    
    <Button className="rounded-lg px-3" onClick={GetImages}>
                Trend Images
            </Button>
            <Link href="/search">
            <Button className="bg-transparent px-3 text-gray-900 outline outline-1 outline-black">
                SearchImages
            </Button>
            </Link>
            

    </div>
    
  )
}

export default page