import Link from "next/link"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import zero from "../public/0-5 rating star.png";
import FourStar from "../public/4-5 rating star.png";
import FiveStar from "../public/5-5 rating star.png";
import Footer from "./Footer";
import BigCarousal from "./BigCarousal";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem, setMainDataArr, setOpen } from "../redux/Action";
import Navbar from './Navbar'


const BgGrayCarousal = () => {
  const { MainDataArr, cartItem, open } : any = useSelector((e) => e)
  let dispatch = useDispatch()


  const [ select, setSelect ] : any = useState(false)
  const productSelect = (mainIndex: any, childIndex: any) => {
    setSelect({mainIndex: mainIndex, childIndex: childIndex})
  }

  const AddNum = ( i: number, carNo: number ) => {
    let MainDataArr2 : any = [...MainDataArr]
    MainDataArr2[carNo].DataArr[i].num = MainDataArr2[carNo].DataArr[i].num + 1
    dispatch(setMainDataArr(MainDataArr2))
    let cartItem2 : any = [...cartItem]
    if (MainDataArr2[carNo].DataArr[i].num === 1 ) {
      MainDataArr2[carNo].DataArr[i].cartItemIndex = cartItem2.length
      MainDataArr2[carNo].DataArr[i].index = i
      MainDataArr2[carNo].DataArr[i].mainInd = carNo
      cartItem2.push(MainDataArr2[carNo].DataArr[i]);
    }

    else if (MainDataArr2[carNo].DataArr[i].num > 1) { 
      cartItem2 = [...cartItem]
      cartItem2[MainDataArr[carNo].DataArr[i].cartItemIndex] = MainDataArr[carNo].DataArr[i]
    };
    dispatch(setCartItem(cartItem2));
    dispatch(setMainDataArr(MainDataArr2))
  }


  const CutNum = (i: number, carNo: number) => {
    let cartItem2: any = [...cartItem];
    let MainDataArr2 : any = [...MainDataArr]
    
    MainDataArr2[carNo].DataArr[i].num = MainDataArr2[carNo].DataArr[i].num - 1;
      if( MainDataArr2[carNo].DataArr[i].num >= 1 )
      cartItem2[MainDataArr2[carNo].DataArr[i].cartItemIndex] = MainDataArr2[carNo].DataArr[i]
      if( MainDataArr2[carNo].DataArr[i].num === 0 )
      cartItem2 = cartItem2.filter((item: any, index: number) => 
        item !== MainDataArr2[carNo].DataArr[i]
        // item.num !== 0
      )
      // }
    dispatch(setMainDataArr(MainDataArr2))
    dispatch(setCartItem(cartItem2))
  };

  
  
  const ChangeNextNum = (n: number, v: string, nv: number) => {
    let MainDataArr2 = [...MainDataArr]
    if (v === "add") {
      MainDataArr2[n].next = MainDataArr2[n]?.next + 1;
    }
    if (v === "sub") {
      MainDataArr2[n].next = MainDataArr2[n]?.next - 1;
    }
    dispatch(setMainDataArr(MainDataArr2))
  };
  
  return (
    <div>
      <div className={`bgLightGray`}>
        <div className="fullWidth">
        <div>
        {/* <Navbar /> */}
        <BigCarousal />
          <div className={`SecondCarousalDiv `}>
          <div className="centerRow headingDiv">
            <div
              style={{
                width: "20px",
                height: "20px",
                margin: "0 8px 0 25px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="mainIcon"
                src={MainDataArr[0].MainIcon}
                width="20px"
                height="20px"
              />
            </div>
            <h2 className="mainHeading">{MainDataArr[0].MainHeading}</h2>
          </div>
          <div className="centerRow allImgDiv">
            <button className="noBorder" disabled={MainDataArr[0].next === 1}
              onClick={() => ChangeNextNum(0, "sub", 0)} >
              <img className={ MainDataArr[0].next === 1 ? `arrow disable` : `arrow` }
                src={MainDataArr[0].leftArrow}/>
            </button>
            {MainDataArr[0]?.DataArr?.map(
              (item: any, index: number) =>
                index < MainDataArr[0].next + 3 &&
                index > MainDataArr[0].next - 2 && (
                  <div key={index} className={"imgDiv"}>
                    <p className="off">{item.off}</p>
                    <Link href={`/Product/${0}-${index}`}><img src={item.ImgSrc} className="imgSrc" onClick={() => productSelect(0, index)}/></Link>
                    <div className="centerRow">
                      <div className="aboutDiv">
                        <p className="itemName">{item.name}</p>
                        <div className="starDiv">
                          <Image
                            src={item.rated === "4" ? FourStar : FiveStar}
                            className="four"
                          />
                        </div>
                        <p className="centerRow redGrayCol">
                          <p className="redCol">{item.newVal}</p>
                          <del className="grayCol">{item.delVal}</del>
                        </p>
                      </div>
                      <div>
                        <p
                          className={item.num === 0 ? "add hidden" : "add"}
                          onClick={() => CutNum(index, 0)}
                        >
                          –
                        </p>
                        <p
                          className={
                            item.num === 0 ? "addNum hidden" : "addNum"
                          }
                        >
                          {item.num}
                        </p>
                        <p className="add" onClick={() => AddNum(index, 0)}>
                          +
                        </p>
                      </div>
                    </div>
                  </div>
                )
            )}
            <button
              className="noBorder"
              disabled={MainDataArr[0].next === 7}
              onClick={() => ChangeNextNum(0, "add", 0)}
            >
              <img
                className={
                  MainDataArr[0].next === 7 ? `arrow1 disable` : `arrow1`
                }
                src={MainDataArr[0].rightArrow}
              />
            </button>
          </div>
        </div>
        <div className={`SecondCarousalDiv`}>
          <div className="centerRow headingDiv">
            <div
              style={{
                width: "20px",
                height: "20px",
                margin: "0 8px 0 25px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image className="mainIcon" src={MainDataArr[1].MainIcon} />
            </div>
            <h2 className="mainHeading">{MainDataArr[1].MainHeading}</h2>
          </div>
          <div className="centerRow allImgDiv">
            <button
              className="noBorder"
              disabled={MainDataArr[1].next === 1}
              onClick={() => ChangeNextNum(1, "sub", 1)}
            >
              <img
                className={
                  MainDataArr[1].next === 1 ? `arrow disable` : `arrow`
                }
                src={MainDataArr[0].leftArrow}
              />
            </button>
            {MainDataArr[1]?.DataArr?.map(
              (item2: any, index2: number) =>
                index2 < MainDataArr[1]?.next + 2 &&
                index2 > MainDataArr[1]?.next - 2 && (
                  <div key={index2} className={"imgDiv imgDiv2"}>
                    <p className="off off2_1">{item2.name}</p>
                    <p className="off2_2">{item2.about}</p>
                    <img src={item2.ImgSrc} className="imgSrc imgSrc2" />
                  </div>
                )
            )}
            <button
              className="noBorder"
              disabled={MainDataArr[1].next === 3}
              onClick={() => ChangeNextNum(1, "add", 1)}
            >
              <img
                className={
                  MainDataArr[1].next === 3 ? `arrow1 disable` : `arrow1`
                }
                src={MainDataArr[0].rightArrow}
              />
            </button>
          </div>
        </div>
        <div className={`row`}>
          <div className={`SecondCarousalDiv halfDiv`}>
            <div className="centerRow headingDiv">
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "0 8px 0 25px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  className="mainIcon mainIcon2"
                  src={MainDataArr[2].MainIcon}
                />
              </div>
              <h2 className="mainHeading">{MainDataArr[2].MainHeading}</h2>
            </div>
            <div className="centerRow allImgDiv allImgDiv2">
              {MainDataArr[2]?.DataArr?.map(
                (item2: any, index2: number) =>
                  index2 < 4 && (
                    <div key={index2} className={"imgDiv imgDiv2"}>
                      <img src={item2.ImgSrc} className="imgSrc imgSrc3" />
                      <div className="row">
                        <Image
                          width="120px"
                          height="20px"
                          src={
                            item2.rated === 5
                              ? FiveStar
                              : item2.rated === 4
                              ? FourStar
                              : ''
                          }
                        />
                        <p className="price miniNum">{item2.peopleRated}</p>
                      </div>
                      <p className="price name">{item2.name}</p>
                      <p className="price">{item2.price}</p>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className={`SecondCarousalDiv halfDiv2`}>
            <div className="centerRow headingDiv">
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "0 8px 0 25px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  className="mainIcon mainIcon2"
                  src={MainDataArr[2].MainIcon2}
                />
              </div>
              <h2 className="mainHeading">{MainDataArr[2].MainHeading2}</h2>
            </div>
            <div className="centerRow allImgDiv allImgDiv3">
              {MainDataArr[2]?.DataArr?.map(
                (item2: any, index2: number) =>
                  index2 < 6 &&
                  index2 > 3 && (
                    <div key={index2} className={"imgDiv imgDiv3"}>
                      <img src={item2.ImgSrc} className="imgSrc bigImgSrc" />
                      <p className="price name">{item2.name}</p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        <div className={`SecondCarousalDiv`}>
          <div className="centerRow headingDiv">
            <div
              style={{
                width: "50px",
                height: "50px",
                margin: "0 8px 0 25px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                className="mainIcon mainIcon3"
                src={MainDataArr[3].MainIcon}
              />
            </div>
            <h2 className="mainHeading">{MainDataArr[3].MainHeading}</h2>
          </div>
          <div className="centerRow allImgDiv allImgDiv2 allImgDiv4">
            {MainDataArr[3]?.DataArr?.map((item2: any, index2: number) => (
              <div key={index2} className={"imgDiv imgDiv3"}>
                <img src={item2.ImgSrc} className="imgSrc imgSrc2 noPad" />
                <div className="row noPad">
                  <p className="price miniNum noPad">{item2.peopleRated}</p>
                </div>
                <p className="price name noPad">{item2.name}</p>
                <p className="price noPad">{item2.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`SecondCarousalDiv `}>
          <div className="centerRow headingDiv">
            <div
              style={{
                width: "20px",
                height: "20px",
                margin: "0 8px 0 25px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                className="mainIcon"
                src={MainDataArr[4].MainIcon}
                width="20px"
                height="20px"
              />
            </div>
            <h2 className="mainHeading">{MainDataArr[4].MainHeading}</h2>
          </div>
          <div className="centerRow allImgDiv">
            <button
              className="noBorder"
              disabled={MainDataArr[4].next === 1}
              onClick={() => ChangeNextNum(4, "sub", 2)}
            >
              <img
                className={
                  MainDataArr[4].next === 1 ? `arrow disable` : `arrow`
                }
                src={MainDataArr[0].leftArrow}
              />
            </button>
            {MainDataArr[4]?.DataArr?.map(
              (item: any, index: number) =>
                index < MainDataArr[4].next + 5 &&
                index > MainDataArr[4].next - 2 && (
                  <div key={index} className={"imgDiv"}>
                    <img src={item.ImgSrc} className="imgSrc imgSrc2" />
                    <div className="aboutDiv">
                      <p className="itemName">{item.name}</p>
                      <p className="centerRow redGrayCol">
                        <p className="redCol">{item.newVal}</p>
                        <del className="grayCol">{item.delVal}</del>
                      </p>
                    </div>
                  </div>
                )
            )}
            <button
              className="noBorder"
              disabled={MainDataArr[4].next === 4}
              onClick={() => ChangeNextNum(4, "add", 2)}
            >
              <img
                className={
                  MainDataArr[4].next === 4 ? `arrow1 disable` : `arrow1`
                }
                src={MainDataArr[0].rightArrow}
              />
            </button>
          </div>
        </div>
        <div className="SecondCarousalDiv carousalDiv">
          <div className="miniBgWhite">
            {MainDataArr[5].MiniDivInfo?.map((item: any, index: number) => (
              <div className={!item.icon ? "NoIcon miniBgGray" : "miniBgGray"}>
                {item.icon ? (
                  <img src={item.icon} className="miniIcon" />
                ) : (
                  false
                )}
                <p className={"miniName"}>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="allImgDiv allImgDiv5">
            <div className="centerRow headingDiv">
              <h2 className="mainHeading mainHeading2">
                {MainDataArr[5].MainHeading}
              </h2>
            </div>
            <div className="bgLightGray">
              <div className="centerRow wrap">
                {MainDataArr[5]?.DataArr?.map(
                  (item: any, index: number) =>
                    index > -1 && (
                      <div key={index} className={"imgDiv imgDiv4"}>
                        <p className="off">{item.off}</p>
                        <Link href={`/Product/${5}-${index}`}><img src={item.ImgSrc} className="imgSrc imgSrc4" onClick={() => productSelect(5, index)}/></Link>
                        <div className="centerRow">
                          <div className="aboutDiv">
                            <p className="itemName">{item.name}</p>
                            <div className="starDiv">
                              <Image src={zero} className="four" />
                            </div>
                            <p className="centerRow redGrayCol">
                              <p className="redCol">{item.newVal}</p>
                              <del className="grayCol">{item.delVal}</del>
                            </p>
                          </div>
                          <div>
                            <p
                              className={item.num === 0 ? "add hidden" : "add"}
                              onClick={() => CutNum(index, 5)}
                            >
                              –
                            </p>
                            <p
                              className={
                                item.num === 0 ? "addNum hidden" : "addNum"
                              }
                            >
                              {item.num}
                            </p>
                            <p
                              className="add"
                              onClick={() => AddNum(index, 5)}
                            >
                              +
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="SecondCarousalDiv carousalDiv">
          <div className="miniBgWhite">
            {MainDataArr[6].MiniDivInfo?.map((item: any, index: number) => (
              <div className={!item.icon ? "NoIcon miniBgGray" : "miniBgGray"}>
                {item.icon ? (
                  <img src={item.icon} className="miniIcon" />
                ) : (
                  false
                )}
                <p className={"miniName"}>{item.name}</p>
              </div>
            ))}
          </div>

          <div className="allImgDiv allImgDiv5">
            <div className="centerRow headingDiv">
              <h2 className="mainHeading mainHeading2">
                {MainDataArr[6].MainHeading}
              </h2>
            </div>
            <div className="bgLightGray">
              <div className="centerRow wrap">
                {MainDataArr[6]?.DataArr?.map(
                  (item: any, index: number) =>
                    index > -1 && (
                      <div key={index} className={"imgDiv imgDiv4"}>
                        <p className="off">{item.off}</p>
                        <Link href={`/Product/${6}-${index}`}><img src={item.ImgSrc} className="imgSrc imgSrc4" onClick={() => productSelect(6, index)}/></Link>
                        <div className="centerRow">
                          <div className="aboutDiv">
                            <p className="itemName">{item.name}</p>
                            <div className="starDiv">
                              <Image src={zero} className="four" />
                            </div>
                            <p className="centerRow redGrayCol">
                              <p className="redCol">{item.newVal}</p>
                              <del className="grayCol">{item.delVal}</del>
                            </p>
                          </div>
                          <div>
                            <p
                              className={item.num === 0 ? "add hidden" : "add"}
                              onClick={() => CutNum(index, 6)}
                            >
                              –
                            </p>
                            <p
                              className={
                                item.num === 0 ? "addNum hidden" : "addNum"
                              }
                            >
                              {item.num}
                            </p>
                            <p
                              className="add"
                              onClick={() => AddNum(index, 6)}
                            >
                              +
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <img
            className="centerPic centerPic1"
            src={`https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-1.png&w=1920&q=75`}
          />
          <img
            className="centerPic centerPic2"
            src={`https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-2.png&w=1920&q=75`}
          />
        </div>
        <div className="SecondCarousalDiv carousalDiv carousalDiv2">
          <div className="miniBgWhite miniBgWhite2">
            {MainDataArr[7].MiniDivInfo?.map((item: any, index: number) => (
              <div className={!item.icon ? "NoIcon miniBgGray" : "miniBgGray"}>
                {item.icon ? (
                  <img src={item.icon} className="miniIcon" />
                ) : (
                  false
                )}
                <p className={"miniName"}>{item.name}</p>
              </div>
            ))}
          </div>

          <div className="allImgDiv allImgDiv5">
            <div className="centerRow headingDiv">
              <h2 className="mainHeading mainHeading2">
                {MainDataArr[7].MainHeading}
              </h2>
            </div>
            <div className="bgLightGray">
              <div className="centerRow wrap">
                {MainDataArr[7]?.DataArr?.map(
                  (item: any, index: number) =>
                    index > -1 && (
                      <div key={index} className={"imgDiv imgDiv4"}>
                        <p className="off">{item.off}</p>
                        <Link href={`/Product/${7}-${index}`}><img src={item.ImgSrc} className="imgSrc imgSrc4" onClick={() => productSelect(7, index)}/></Link>
                        <div className="centerRow">
                          <div className="aboutDiv">
                            <p className="itemName">{item.name}</p>
                            <div className="starDiv">
                              <Image src={zero} className="four" />
                            </div>
                            <p className="centerRow redGrayCol">
                              <p className="redCol">{item.newVal}</p>
                              <del className="grayCol">{item.delVal}</del>
                            </p>
                          </div>
                          <div>
                            <p
                              className={item.num === 0 ? "add hidden" : "add"}
                              onClick={() => CutNum(index, 7)}
                            >
                              –
                            </p>
                            <p
                              className={
                                item.num === 0 ? "addNum hidden" : "addNum"
                              }
                            >
                              {item.num}
                            </p>
                            <p
                              className="add"
                              onClick={() => AddNum(index, 7)}
                            >
                              +
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="iconMainDiv">
        <div className="centerRow headingDiv">
            <div style={{ width: "20px", height: "20px", margin: "0 8px 0 25px", display: "flex", alignItems: "center" }}>
              <Image className="mainIcon" src={MainDataArr[8].MainIcon} />
            </div>
            <h2 className="mainHeading">{MainDataArr[8].MainHeading}</h2>
            </div>
            <div className="iconDiv">
              {MainDataArr[8].DataArr.map((item: any, index: number) => 
                <div key={index} className="centerRow bgWhite">
                  <img src={item.icon} className="icon"/>
                  <p>{item.name}</p>
                </div>
              )}
            </div>
        </div>







        <div className={`SecondCarousalDiv carousalDiv2 carousalDiv3`}>
          <div className="centerRow headingDiv">
            <h2 className="mainHeading mainHeading2">{MainDataArr[9].MainHeading}</h2>
          </div>
          <div className="centerRow allImgDiv wrap">
            {MainDataArr[9]?.DataArr?.map(
              (item: any, index: number) =>
                  <div key={index} className={"imgDiv imgDiv5"}>
                    <p className="off">{item.off}</p>
                    <Link href={`/Product/${9}-${index}`}><img src={item.ImgSrc} className="imgSrc" onClick={() => productSelect(9, index)}/></Link>
                    <div className="centerRow">
                      <div className="aboutDiv">
                        <p className="itemName">{item.name}</p>
                        <div className="starDiv">
                          <Image
                            src={zero}
                            className="four"
                          />
                        </div>
                        <p className="centerRow redGrayCol">
                          <p className="redCol">{item.newVal}</p>
                          <del className="grayCol">{item.delVal}</del>
                        </p>
                      </div>
                      <div>
                        <p
                          className={item.num === 0 ? "add hidden" : "add"}
                          onClick={() => CutNum(index, 9)}
                        >
                          –
                        </p>
                        <p
                          className={
                            item.num === 0 ? "addNum hidden" : "addNum"
                          }
                        >
                          {item.num}
                        </p>
                        <p className="add" onClick={() => AddNum(index, 9)}>
                          +
                        </p>
                      </div>
                    </div>
                  </div>
            )}
          </div>
        </div>
        <div className="SecondCarousalDiv carousalDiv2 carousalDiv4">
        <div className="centerRow allImgDiv wrap">
            {MainDataArr[10]?.DataArr?.map(
              (item: any, index: number) =>
                  <div key={index} className={"imgDiv imgDiv5 imgDiv6"}>
                    <img className="image" src={item.icon}/>
                    <p className="heading">{item.heading}</p>
                    <p className="name">{item.Intro}</p>
                  </div>
            )}
          </div>
        </div>
      </div>
      </div>
        <Footer />
      </div>
    </div>
  );
};

export default BgGrayCarousal;