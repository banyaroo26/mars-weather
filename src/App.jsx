import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const App = () => {
  let [imgUrl, setImgUrl] = useState(null)

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
      setTimeout(() => {
        setImgUrl(`url(${response.data.hdurl})`)
      }, 2000)
      // console.log(response.data.hdurl)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="main">
      {
        imgUrl != null
        ? <div className="main" style={{ "backgroundImage": imgUrl }}> </div>
        : <Loading />
      }
    </div>
  )

}

export default App