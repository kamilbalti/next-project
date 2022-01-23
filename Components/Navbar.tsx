import React, { useEffect, useState } from "react";
import Image from "next/image";
import phonepic from  "../public/phone.png";
import message from "../public/message.png";
import arrow from "../public/arrow2.png";
import arrow1 from "../public/blackArrow.png";
import bazar from "../public/logo.svg";
import search from "../public/search.png";
import menu from "../public/menu.png";
import account from "../public/account.png";
import basket from "../public/basket.png";
import blackArrow from "../public/blackArrow.png";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem, setMainDataArr, setOpen } from "../redux/Action";
import Cart from "./HalfCart";

const Navbar = () => {
  const dispatch = useDispatch()
  const { open, MainDataArr, cartItem } : any = useSelector((e) => e)

  const [checkScroll, setCheckScroll]: any = useState({ scrollNum: typeof window !== "undefined" ? window.scrollY : 0, check: typeof window !== "undefined"
   && window.scrollY > 40? true : false 
  });
  const [inputClick, setInputClick]: any = useState(false);
  const [ check, setCheck ] = useState(false) 
  // let cartItem2 : any = [...cartItem]
  
  useEffect(() => {
    setCheckScroll(false)
  },[typeof window !== 'undefined' && window?.location])

  console.log(cartItem, "cartItem")
  //   cartItem2 = cartItem2.filter((item: any, index: number) => 
  //   item?.num !== 0
  //   )
  //   if(check){
  //   dispatch(setCartItem(cartItem2))
  //   setCheck(false)}
  // },[cartItem, check])


    useEffect(() => {
        typeof window !== "undefined"
        ? (window.onscroll = () => {
            console.log(checkScroll, "scroll")
            setCheckScroll({scrollNum: window.scrollY, check: window.scrollY > 40? true : false});
            console.log(checkScroll, "scroll")
        }) : false;
      },[])
          useEffect(() => {
            let checkScroll2 = checkScroll
            if(checkScroll2.scrollNum < 40) {
              checkScroll2.check = false
              checkScroll2.scrollNum = window.scrollY
            }
            else { 
              checkScroll2.check = true
              checkScroll2.scrollNum = window.scrollY
            }
            setCheckScroll(checkScroll2)
            console.log(checkScroll?.check, "check" , checkScroll?.scrollNum, "scrollNum")
          },[typeof window !== 'undefined' && window.scrollY])
      return (
    <div className={`NavbarMainDiv`}>
        { open ? <div className="blur" onClick={() => dispatch(setOpen(false))}>
        </div> : false }
        { open ? <Cart /> : false}
      <div className={`Navbar2`}>
        <div className={`Navbar2MainDiv`}>
          <div className={`row2 NavbarDiv`}>
            {/* <p>{}</p> */}
            <Image
              src={phonepic}
              width="28px"
              height="28px"
              className={`NavbarSmallPic phonePic pointer`}
            />
            <p className={`pointer`}>+88012 3456 7894</p>
            <Image
              src={message}
              width="17px"
              height="17px"
              className={`NavbarSmallPic pointer`}
            />
            <p className={`pointer`}>support@ui-lib.com</p>
          </div>
          <div className={`row2 NavbarDiv `}>
            <p className={`pointer`}>Theme FAQ''s</p>
            <p className={`pointer`}>Need Help?</p>
            <p className={`pointer`}>
              EN
              <Image src={arrow} height="8px" width="8px" />
            </p>
            <p className={`pointer`}>
              USD
              <Image src={arrow} height="8px" width="8px" />
            </p>
          </div>
        </div>
      </div>
      {/* <div className="fullWidth"> */}
        <div className="NavbarChildMainDiv">
          <div className={ checkScroll.scrollNum > 40 ? "fullWidth fixed" : `fullWidth`}>
          {/* <div className={checkScroll.scrollNum > 40? "Navbar3" : (checkScroll.check ? "Navbar3 " :`Navbar3`)}> */}
          <div className={`Navbar3`}>
            <div className={`bazarDiv`}>
              <Image
                className={`bazar`}
                src={bazar}
                width="100px"
                // height="45px"
              />
              <div className={checkScroll.scrollNum > 95 ? "menuDiv center bazar" : "hidden menuDiv center bazar"}
              >
                <Image
                  src={menu}
                  width="30px"
                  height="22px"
                />
                <Image
                  src={blackArrow}
                  width="12px"
                  height="12px"
                />
              </div>
            </div>
            <div
              className={
                !inputClick ? `row2 inputDiv` : `row2 inputDiv redBorder`
              }
            >
              <div className={`searchDiv`}>
                <Image
                  className={`search`}
                  src={search}
                  width="20px"
                  height="20px"
                />
              </div>
              <input
                placeholder="Searching for..."
                onFocus={() => setInputClick(true)}
                onBlur={() => setInputClick(false)}
                className={`Noborder`}
              />
              <div className={`bgGray`}>
                <p>All Categories</p>
                <Image src={arrow1} width="20px" height="20px" />
              </div>
            </div>
            <div className={`accountDiv`}>
              <Image
                className={`space`}
                src={account}
                width="55px"
                height="50px"
              />
              <div className="basketDiv">
              <Image
                className={`space`}
                onClick={() => dispatch(setOpen(true))}
                src={basket}
                />
                { cartItem.length ? <p className="TotalItemNum">{cartItem.length}</p> : false}
              </div>
            </div>
          </div>
          </div>
          <div
            className={
              checkScroll.scrollNum > 40 ? "Navbar4 row2 margin" : `row2 Navbar4`
            }
          >
            <div className={`bgGray bgGray2`}>
              <div className={`row1`}>
                <Image src={menu} width="28px" height="22px" />
                <p>Categories</p>
              </div>
              <Image
                className={`rotate`}
                src={arrow1}
                width="15px"
                height="15px"
              />
            </div>
            <div className={`NavbarEndDiv`}>
              <p className={`pointer`}>Home</p>
              <p className={`pointer`}>Pages</p>
              <p className={`pointer`}>User Account</p>
              <p className={`pointer`}>Vendor Account</p>
              <p className={`pointer`}>Back to Demos</p>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Navbar;
