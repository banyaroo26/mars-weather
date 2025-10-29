import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const App = () => {
  let [image, setImage] = useState(null)

  useEffect(() => {
    callImageApi()

    // call every 5 hours
    const timeoutId = setTimeout(() => {
      callImageApi()
    }, 18000000)

    // component did unmount
    return() => clearTimeout(timeoutId)
  }, [])

  const callImageApi = () => {
    const imgApi = import.meta.env.VITE_IMG_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    
    axios.get(`${imgApi}?api_key=${apiKey}`)
    .then(response => {
      console.log(response.data)
      // setImgUrl(`url(${response.data.hdurl})`)
      
      let new_image = new Image()
      new_image.src = response.data.url

      new_image.onload = () => {
        setImage(new_image)
        console.log("New lmage loaded")

        /*
        new_image.src = response.data.hdurl
        new_image.onload = () => {
          setImage(new_image)
          console.log("HD image loaded")
        }

        new_image.onerror = () => {
          console.log("Cannot log hd image")
        }
        */
      }

      new_image.onerror = () => {
        console.log("Cannot log new image")
      }
      // console.log(response.data.hdurl)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="main">
      {
        image != null
          ? <div className="main" style={{ "backgroundImage": "url(" + image.src + ")" }}> </div>
          : <Loading />
      }
    </div>
  )

}

export default App