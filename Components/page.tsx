import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import BgGrayCarousal from "./BgGrayCarousal"
import BigCarousal from "./BigCarousal"
import Cart from "./HalfCart";
import { setCartItem, setMainDataArr, setOpen } from "../redux/Action";
// import Data from "./Data"

// export let cartItem = []

const Page = () => {
  const { MainDataArr, cartItem, open } : any = useSelector((e) => e)
  // debugger
  // const dispatch = useDispatch()
  // let allVar : any;
  // let allVar2 : any;
  // // let dispatch = useDispatch() 
  // useEffect(() => {
  // typeof Storage !== 'undefined' ?
  // allVar = localStorage.getItem('allVar') : false
  // dispatch(setCartItem(allVar.cartItem))
  // dispatch(setMainDataArr(allVar.MainDataArr))
  // dispatch(setOpen(allVar.open))
  // allVar2 = {
  //   MainDataArr: MainDataArr,
  //   cartItem: cartItem,
  //   open: open
  // }
  // typeof Storage !== 'undefined' && localStorage.setItem("allVar", allVar)
  // },[])

  return(
      <div className={ !open ? `PageMainDiv` : `PageMainDiv CartOpen` }>
        <BgGrayCarousal />
      </div>
  )
}
export default Page