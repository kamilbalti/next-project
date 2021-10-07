import React, { useState } from "react"
import BgGrayCarousal from "./BgGrayCarousal"
import BigCarousal from "./BigCarousal"
import Cart from "./Cart";
import Data from "./Data"


function Page({open, setOpen}: any) {
  const [cartItem, setCartItem]: Array<any> = useState([]);
  return(
      <div className={`PageMainDiv`}>
        { open ? <div className="blur" onClick={() => setOpen(false)}>
        </div> : false }
        {/* <BigCarousal /> */}
        <Data cartItem={cartItem} setCartItem={setCartItem}/>
        { open ? <Cart cartItem={cartItem}/> : false}
      </div>
  )
}
export default Page
