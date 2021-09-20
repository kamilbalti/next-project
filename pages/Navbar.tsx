import React, { useEffect, useState } from 'react'
import Image from "next/image"
import phonepic from "../public/phone.png"
import message from "../public/message.png"
import arrow from "../public/arrow2.png"
import arrow1 from "../public/blackArrow.png"
import bazar from "../public/logo.svg"
import search from "../public/search.png"
import menu from "../public/menu.png"
import account from "../public/account.png"
import basket from "../public/basket.png"
// import cx from 'classnames'

const Navbar = () => {
    const [ checkScroll, setCheckScroll ] = useState(false)
    const [ inputClick, setInputClick ] = useState(false)
    typeof window !== 'undefined' ? window.onscroll = () => {
        setCheckScroll(window.scrollY)
        // console.log('window.innerHeight', window.scrollY)
    } : false
    return (
        <div className={`NavbarMainDiv`}>
            <div className={`Navbar2`}>
                <div className={`row2 NavbarDiv`}>
                    {/* <p>{}</p> */}
                    <Image src={phonepic} width="28px" height="28px" className={`NavbarSmallPic phonePic pointer`}/>
                    <p className={`pointer`}>+88012 3456 7894</p>
                    <Image src={message} width="17px" height="17px" className={`NavbarSmallPic pointer`}/>
                    <p className={`pointer`}>support@ui-lib.com</p>
                </div>
                <div className={`row2 NavbarDiv `}>
                    <p className={`pointer`}>Theme FAQ''s</p>
                    <p className={`pointer`}>Need Help?</p>
                    <p className={`pointer`}>EN<Image src={arrow} height="8px" width="8px"/></p>
                    <p className={`pointer`}>USD<Image src={arrow} height="8px" width="8px"/></p>
                </div>
            </div>
            <div className={ checkScroll > 40 ? "fixed Navbar3" : `Navbar3`}>
            <div className={`bazarDiv`}>
                    <Image className={`bazar`} src={bazar} width="100px" height="45px"/>
                </div>
                <div className={!inputClick? `row2 inputDiv` : `row2 inputDiv redBorder`}>
                <div className={`searchDiv`}>
                    <Image className={`search`} src={search} width="20px" height="20px"/>
                </div>
                <input placeholder="Searching for..." onFocus={() => setInputClick(true)} onBlur={() => setInputClick(false)} className={`Noborder`}/>
                <div className={`bgGray`}>
                    <p>
                    All Categories
                    </p>
                    <Image src={arrow1} width="20px" height="20px"/>
                    </div>
                </div>
                <div className={`accountDiv`}>
                    <Image className={`space`} src={account} width="55px" height="50px"/>
                    <Image className={`space`} src={basket} width="55px" height="50px"/>
                </div>
            </div>
                <div className={ checkScroll > 40 ? "Navbar4 row2 margin" : `row2 Navbar4`}>
                    <div className={`bgGray bgGray2`}>
                        <div className={`row1`}>
                            <Image src={menu} width="28px" height="22px"/>
                            <p>Categories</p>
                        </div>
                        <Image className={`rotate`} src={arrow1} width="15px" height="15px"/>
                    </div>
                    <div className={`NavbarEndDiv`}>
                        <p className={`pointer`}>Home</p>
                        <p className={`pointer`}>Pages</p>
                        <p className={`pointer`}>User Account</p>
                        <p className={`pointer`}>Vendor Account</p>
                        <p className={`pointer`}>Back to Demos</p>
                    </div>
                </div>
        </div>
    )
}
export default Navbar
