import Footer from "./footer"
import Image from "next/image";
import FourStar from "../public/4-5 rating star.png";
import FiveStar from "../public/5-5 rating star.png";
import Navbar from "./Navbar"
import { useEffect } from "react";
const AboutPage = ({mainInd, childInd, MainDataArr} : any) => {
    let price = MainDataArr[mainInd].DataArr[childInd].newVal;
    let price2;
        price2 = price.slice(1)
        price2 = Number(price2)
        price2 = price2 + 1000;
        price2 = price2.toFixed(0)
        price2 = "$" + price2
        price = price2
    return(
        <div className="BgGray IntroMainPage">
            <div className="IntroRow">
            {/* <div className="centerRow"> */}
                <img className="IntroMainImg" style={{margin: "10px"}} src={MainDataArr[mainInd].DataArr[childInd].ImgSrc} width={"400px"}/>
            {/* {MainDataArr[mainInd].DataArr.map((item: any, index: number) => 
            ((!MainDataArr[mainInd].DataArr[childInd + 3].ImgSrc)  ?
            (index < childInd-1 && index > childInd + 3) && alert("1")
            :
            (index > childInd+1 && index < childInd - 4) && alert("2"))
            &&
            <img width="100px" src={item?.ImgSrc}/>
            )}
            </div> */}
            <div className="MainIntroPara">
            <p className="pad IntroHead">{MainDataArr[mainInd].DataArr[childInd].name}</p>
            <p className="pad centerRow">Brand: <p className="litBold">Xiaomi</p></p>
            <div className="pad centerRow">
            <p>Rated: </p>
            <Image className="IntroStar" height="20px" width="110px" src={MainDataArr[mainInd].DataArr[childInd].rated === 5? FiveStar : FourStar} />
            <p className="litBold">(50)</p>
            </div>
            <p className="IntroHead IntroPrice">{MainDataArr[mainInd].DataArr[childInd].newVal}</p>
            <p>Stock Available</p>
            <button className="IntroButton">Add To Cart</button>
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
        </div>
    )
}
export default AboutPage