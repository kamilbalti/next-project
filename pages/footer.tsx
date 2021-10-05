import Image from "next/image";
import redMenu from "../public/redMenu.png";
import medal from "../public/medal.png";
import brandStar from "../public/brandStar.png";
import newIcon from "../public/new.png";
import gift from "../public/gift.png";
import bazar from "../public/logo.svg"

const Footer = () => {
    const footerDataArr : Array<any> = [
            {
                MainHeading: "About us",
                DataArr: [
                    "Careers",
                    "Our Stores",
                    "Our Cares",
                    "Terms & Conditions",
                    "Privacy Policy",
                ]
            },
            {
                MainHeading: "Customer Care",
                DataArr: [
                    "Help Center",
                    "How to Buy",
                    "Track your Order",
                    "Corporate & Bulk Purchasing",
                    "Returns & Refunds",
                ]
            },
            {
                MainHeading: "Contact Us",
                DataArr:[
                    "70 Washington Square South, New York, NY 10012, United States",
                    "Email: uilib.help@gmail.com",
                    "Phone: +1 1123 456 780",
                ] ,
                imgArr:[
                    `https://cdn.iconscout.com/icon/free/png-256/facebook-259-675868.png`,
                    `https://cdn.iconscout.com/icon/free/png-256/twitter-3318135-2795916.png`,
                    `https://cdn.iconscout.com/icon/free/png-256/youtube-4054104-3353179.png`,
                    `https://cdn.iconscout.com/icon/free/png-64/google-396-438233.png`,
                    `https://cdn.iconscout.com/icon/free/png-64/instagram-85-433319.png`
                ]
            },
    ]
    return(
        <div className="bgBlue">
        <div className="footerDiv1">
          <Image className="head" src={bazar} width="120px" height="50px"/>
          <p className="grayCol">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
          <div className="centerRow head">
            <div className="bgLightBlue">
              <img className="icon" src={`https://cdn.pixabay.com/photo/2016/08/31/00/49/google-1632434_1280.png`}/>
              <div>
                <p className="miniName">Get it on</p>
                <p className="bold">Google Play</p>
              </div>
            </div>
            <div className="bgLightBlue">
              <img className="icon" src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png`}/>
              <div>
                <p className="miniName">Download on the</p>
                <p className="bold">App Store</p>
              </div>
            </div>
          </div>
        </div>
        {
            footerDataArr.map((item: any, index: number) => (
            <div className={index === 0? `footerDiv2 footerDiv` : (index === 1? `footerDiv3 footerDiv`: `footerDiv4 footerDiv`)}>
                <p className="bold head">{item?.MainHeading}</p>
                {item?.DataArr.map((item2: any, index2: number) => 
                    <p className={ index === 2 ? "grayCol" : "grayCol cursor"} >{item2}</p>
                )}
                <p className={"miniIconDiv"}>
                {item?.imgArr?.map((item: any, index: number) => 
                    <img className="miniImage" src={item}/>
                    )}
                </p>
            </div>
            )
        )}
      </div>
    )
}
export default Footer