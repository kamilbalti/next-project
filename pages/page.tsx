// import firstPic from "../public/firstPic.png"
// import Image from "next/image"

// import '../styles/globals.css'

// export interface ISignUpData {
  // array: string;
  //   }
import React, { useState } from "react"
import BgGrayCarousal from "./BgGrayCarousal"
import BigCarousal from "./BigCarousal"

// import type { AppProps } from 'next/app'

function Page() {
    const [ array, setArray ] = useState([{
        name: "Police gray Eyeglasses",
        img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=1920&q=75"
    }])
  return(
      <div className={`PageMainDiv`}>
        <BigCarousal />
        <BgGrayCarousal />
      </div>
  )
}
export default Page
