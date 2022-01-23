import React, { useEffect, useState } from 'react'
import Footer from "../../Components/Footer"
import Image from "next/image";
// import OneStar from "../../public/4-5 rating star.png"
import FourStar from "../../public/4-5 rating star.png";
import FiveStar from "../../public/5-5 rating star.png";
import Navbar from "../../Components/Navbar"
import { useRouter } from 'next/router';
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem, setMainDataArr, setOpen } from '../../redux/Action';
// import { useParams } from "next/router"

const Product = () => {
  // const location2 = useParams()
  // const Router = useRouter()
  // console.log(Router ? Router : false, "router")
  const { MainDataArr, cartItem, open } : any = useSelector((a) => a)
  const dispatch = useDispatch()




  // let allVar : any;
  // let allVar2 : any;
  // let dispatch = useDispatch() 
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

  const location : any = typeof window !== 'undefined' && window?.location?.pathname
    let a = location.split('/')
    a = a[2]
    let index = typeof window !== 'undefined' && a.split('-')
    const mainInd : any = index[0];
    const childInd : any = index[1];
    let price = MainDataArr[mainInd]?.DataArr[childInd]?.newVal;
    console.log(mainInd, "mainInd", childInd, "childInd", MainDataArr[mainInd]?.DataArr[childInd]?.ImgSrc, "src")
    let price2 = price ? price.slice(1) : false
    price2 = Number(price2)
    price2 = price2 + 1000;
    price2 = price2.toFixed(0)
    price2 = "$" + price2
    price = price2




    const AddNum = () => {
      let MainDataArr2 : any = [...MainDataArr]
      MainDataArr2[mainInd].DataArr[childInd].num = MainDataArr2[mainInd].DataArr[childInd].num + 1
      dispatch(setMainDataArr(MainDataArr2))
      let cartItem2 : any = [...cartItem]
      if(MainDataArr2[mainInd].DataArr[childInd].num === 1 ) {
        MainDataArr2[mainInd].DataArr[childInd].cartItemIndex = cartItem2.length
        MainDataArr2[mainInd].DataArr[childInd].index = childInd
        MainDataArr2[mainInd].DataArr[childInd].mainInd = mainInd
        cartItem2.push(MainDataArr2[mainInd].DataArr[childInd]);
        // dispatch(setCartItem(cartItem2));
        // dispatch(setMainDataArr(MainDataArr2))
      }
  
      else if (MainDataArr2[mainInd].DataArr[childInd].num > 1) { 
        // cartItem2 = [...cartItem]
        cartItem2[MainDataArr[mainInd].DataArr[childInd].cartItemIndex] = MainDataArr[mainInd].DataArr[childInd]
      }
      dispatch(setCartItem(cartItem2));
      dispatch(setMainDataArr(MainDataArr2))
    };
  
  
    const CutNum = () => {
      let cartItem2: any = [...cartItem];
      let MainDataArr2 : any = [...MainDataArr]
      MainDataArr2[mainInd].DataArr[childInd].num = MainDataArr2[mainInd].DataArr[childInd].num - 1;
      if( MainDataArr2[mainInd].DataArr[childInd].num >= 1 )
      cartItem2[MainDataArr[mainInd].DataArr[childInd].cartItemIndex] = MainDataArr[mainInd].DataArr[childInd]
      if(MainDataArr[mainInd].DataArr[childInd].num === 0)
      cartItem2 = cartItem2.filter((item: any, index: number) =>
      index !== MainDataArr[mainInd].DataArr[childInd].cartItemIndex 
        // item.num !== 0
      )

      // cartItem2[MainDataArr[mainInd].DataArr[childInd].cartItemIindex] = MainDatArr[mainInd].DataArr[childInd]
      dispatch(setMainDataArr(MainDataArr2))
      dispatch(setCartItem(cartItem2))
    };
  

    // useEffect(() => {
    //   let MainDataArr2 : any = [...MainDataArr]
    //   let cartItem2 : any = [...cartItem]
    //   if (MainDataArr2[mainInd].DataArr[childInd].num === 0) {
    //     cartItem2 = cartItem2.filter((item: any, index: number) => {
    //       index !== MainDataArr[mainInd].DataArr[childInd].cartItemIndex
    //       // cartItem2[MainDataArr[mainInd].DataArr[childInd].cartIndex].num === 0
    //     })
    //   //   cartItem2.filter((item: any, index: number) => {
    //   //   item.cartItemIndex !== MainDataArr[mainInd].DataArr[childInd].cartItemIndex
    //   // })
    // }
    // dispatch(setMainDataArr(MainDataArr2))
    // dispatch(setCartItem(cartItem2))
    // },[MainDataArr[mainInd].DataArr[childInd].num])

    const [ num, setNum ] = useState(0)
    return(
      <div className="BgGray IntroMainPage">
      {(mainInd && childInd) &&
      <>
        {/* <Navbar /> */}
            <div className="IntroRow">
              {/* <div className="centerRow"> */}
              <div className="IntroImgDiv">
              <img className="IntroMainImg" src={MainDataArr[mainInd]?.DataArr[childInd]?.ImgSrc} width={"400px"}/>
              <div className="IntroCenter">
                <img className={ num === 1 ? "IntroSmallImg IntroSmallImg2" : "IntroSmallImg"} onClick={() => setNum(1)} src={MainDataArr[mainInd]?.DataArr[childInd]?.ImgSrc} width={"400px"}/>
                <img className={ num === 2 ? "IntroSmallImg IntroSmallImg2" : "IntroSmallImg"} onClick={() => setNum(2)} src={MainDataArr[mainInd]?.DataArr[childInd]?.ImgSrc} width={"400px"}/>
                <img className={ num === 3 ? "IntroSmallImg IntroSmallImg2" : "IntroSmallImg"} onClick={() => setNum(3)} src={MainDataArr[mainInd]?.DataArr[childInd]?.ImgSrc} width={"400px"}/>
              </div>
              </div>
              {/* {MainDataArr[mainInd]?.DataArr.map((item: any, index: number) => 
              ((!MainDataArr[mainInd]?.DataArr[childInd + 3].ImgSrc)  ?
              (index < childInd-1 && index > childInd + 3) && alert("1")
              :
              (index > childInd+1 && index < childInd - 4) && alert("2"))
              &&
              <img width="100px" src={item?.ImgSrc}/>
              )}
              </div> */}
              <div className="MainIntroPara">
              <p className="pad IntroHead">{MainDataArr[mainInd]?.DataArr[childInd]?.name}</p>
              <p className="pad centerRow">Brand: <p className="litBold">Xiaomi</p></p>
              <div className="pad centerRow">
              <p>Rated: </p>
              <Image className="IntroStar" height="20px" width="110px" src={MainDataArr[mainInd]?.DataArr[childInd]?.rated === 5? FiveStar : FourStar} />
              <p className="litBold">(50)</p>
              </div>
              <p className="IntroHead IntroPrice">{MainDataArr[mainInd]?.DataArr[childInd]?.newVal}</p>
              <p>Stock Available</p>
              <div className="AddNumMainDiv">
              {
                MainDataArr[mainInd].DataArr[childInd].num === 0 ?
                <button className="IntroButton" onClick={() => AddNum()}>Add To Cart</button>
                :
                <div className="NumDiv">
                <p
                  className={MainDataArr[mainInd].DataArr[childInd].num === 0 ? "add hidden" : "add"}
                  onClick={() => CutNum()}
                >
                  –
                </p>
                <p
                  className={
                    MainDataArr[mainInd].DataArr[childInd].num === 0 ? "addNum add hidden" : "add addNum"
                  }
                >
                  {MainDataArr[mainInd].DataArr[childInd].num}
                </p>
                <p className="add" onClick={() => AddNum()}>
                  +
                </p>
              </div>
              }
              </div>
              <p className="centerRow">Sold By: <p className="litBold">Moblie Store</p></p>
            </div>
          </div>
        <div className="IntroRow2">
            <p className="borderBot">Description</p>
            <p className="head2">Specification:</p>
            <p className="smallFont">Brand: Beats</p>
            <p className="smallFont">Model: S450</p>
            <p className="smallFont">Wireless Bluetooth Headset</p>
            <p className="smallFont">FM Frequency Response: 87.5 – 108 MHz</p>
            <p className="smallFont">Feature: FM Radio, Card Supported (Micro SD / TF)</p>
            <p className="smallFont">Made in China</p>
        </div>
        <div className="IntroRow2">
          <p className="head2 margTop">Frequently Bought Together</p>
            <div className="centerRow">
            <div className="imgDiv">
                <img width="130px" height="130px" src={`https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F2.PremiumGroceryCollection.png&w=1920&q=75`}/>
                <p className="name">Premium Grocery ...</p>
                <div className="centerRow">
                  <p className="redCol">$250</p>
                  <p className="grayCol2">$1600</p>
                </div>
            </div>
            <p className="grayCol">+</p>
            <div className="imgDiv">
              <img width="130px" height="130px" src={`https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F3.PremiumGroceryPack.png&w=1920&q=75`}/>
              <p className="name">Premium Grocery ...</p>
              <div className="centerRow">
                <p className="redCol">$250</p>
                <p className="grayCol2">$1600</p>
              </div>
            </div>
            <p className="grayCol">+</p>
            <div className="imgDiv">
              <img width="130px" height="130px" src={`https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F4.FreashRealCholeMasala.png&w=1920&q=75`}/>
              <p className="name">{`Fresh&Real CHole...`}</p>
              <div className="centerRow">
                <p className="redCol">$250</p>
                <p className="grayCol2">$1600</p>
              </div>
            </div>
            <p className="grayCol">+</p>
            <div className="imgDiv">
              <img width="130px" height="130px" src={`https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F5.GumPack.png&w=1920&q=75`}/>
              <p className="name">Gum Pack</p>
              <div className="centerRow">
                <p className="redCol">$250</p>
                <p className="grayCol2">$1600</p>
              </div>
            </div>
            <p className="grayCol equalSign">=</p>
            <div className="imgDiv total IntroRow">
              <p className="IntroHead IntroPrice2">{price}</p>
              <p>Save $500</p>
              <div className="centerRow">
                <button className="IntroButton AddToCartButton">Add To Cart</button>
                <button className="IntroButton AddToListButton">Add To List</button>
              </div>
            </div>
        </div>
          <div>
            <p className="margTop head2">Also Available at</p>
            <div className="centerRow">
              <div className="imgDiv smallBox">
                <img width="50px" src={`https://bazar-react.vercel.app/assets/images/faces/propic.png`}/>
              <p className="smallBoxBold">Tech Friend</p>
              </div>
              <div className="imgDiv smallBox">
                <img width="50px" src={`https://bazar-react.vercel.app/assets/images/faces/propic(1).png`}/>
              <p className="smallBoxBold">Smart Shop</p>
              </div>
              <div className="imgDiv smallBox">
                <img width="50px" src={`https://bazar-react.vercel.app/assets/images/faces/propic(8).png`}/>
              <p className="smallBoxBold">Gadget 360</p>
              </div>
            </div>
          </div>
          {/* <div>
            <p className="margTop head2">Related Products</p>
          </div> */}
        </div>
            <Footer />
            </>
          }
            </div>
            )
  }
  
export default Product