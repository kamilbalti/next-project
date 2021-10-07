import Footer from "./footer"
import Image from "next/image";
import FourStar from "../public/4-5 rating star.png";
import FiveStar from "../public/5-5 rating star.png";
import Navbar from "./Navbar"
const AboutPage = ({mainInd, childInd, MainDataArr} : any) => {
    return(
        <div className="IntroMainPage">
            <div className="IntroRow">
            {/* <div className="centerRow"> */}
                <img style={{margin: "10px"}} src={MainDataArr[mainInd].DataArr[childInd].ImgSrc} width={"500px"}/>
            {/* {MainDataArr[mainInd].DataArr.map((item: any, index: number) => 
            ((!MainDataArr[mainInd].DataArr[childInd + 3].ImgSrc)  ?
            (index < childInd-1 && index > childInd + 3) && alert("1")
            :
            (index > childInd+1 && index < childInd - 4) && alert("2"))
            &&
            <img width="100px" src={item?.ImgSrc}/>
            )}
            </div> */}
            <div>
            <p className="pad IntroHead">{MainDataArr[mainInd].DataArr[childInd].name}</p>
            <p className="pad centerRow">Brand: <p className="litBold">Xiaomi</p></p>
            <div className="pad centerRow">
            <p>Rated: </p>
            <Image className="IntroMainImg" height="20px" width="110px" src={MainDataArr[mainInd].DataArr[childInd].rated === 5? FiveStar : FourStar} />
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
            <p className="head2">Specification</p>
            <p>Brand: Beats</p>
            <p>Model: S450</p>
            <p>Wireless Bluetooth Headset</p>
            <p>FM Frequency Response: 87.5 – 108 MHz</p>
            <p>Feature: FM Radio, Card Supported (Micro SD / TF)</p>
            <p>Made in China</p>
        </div>
            <Footer />
        </div>
    )
}
export default AboutPage