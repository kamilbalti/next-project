import React, { useEffect, useState }  from 'react'
import firstPic from "../public/firstPic.png"
import blackArrow from "../public/blackArrow.png"
import Image from "next/image"


const BigCarousal = () => {
    const [ array2, setArray2 ] = useState([
    { heading: "50% Off For Your First Shopping", 
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.",
    button: "Shop Now",
    imgSrc: firstPic} ,
    { heading: "50% Off For Your First Shopping", 
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.",
    button: "Shop Now",
    imgSrc: firstPic}
]);
    const [ num, setNum ] = useState(0)
    const [ check, setCheck ] = useState(0)

    useEffect(() => {
        (check === 0 || check === 1)?
        setTimeout(() => setNum(check),500)
        : false
    },[check])

    const changeNum = (e) => {
        setCheck(e)
    }

    return (
    <div className={`FirstCarousalDiv`}>
        <div className={`FirstCarousalMainDiv`}>
                <div className={`ImageDiv`}>
                    <Image onClick={() => changeNum(0)}  className={check === 0? `disable rotate90` : ( num === 1? `rotate90` : `rotate90 disable`)} src={blackArrow} width="50px" height="50px"/>
                </div>
            <div className={num === 1 ? "FirstCarousalItemDiv hidden" : ( check === 1 ? "FirstCarousalItemDiv right" : (num === 0 ? `FirstCarousalItemDiv` : "")) }>
                    {/* <Image onClick={() => changeNum(0)}  className={ num === 0? `rotate90` : check !== 0? `rotate90`: `rotate90 disable`} src={blackArrow} width="50px" height="50px"/> */}
                <div className={`FirstCarousalItemChildDiv1`}>
                    <h1 className={`largeFont`}>{array2[num].heading}</h1>
                    <p className={`bgGray3`}>{array2[num].para}</p>
                    <button className={`FirstCarousalItemButton`}>{array2[num].button}</button>
                </div>
                <div className={`FirstCarousalItemChildDiv2`}>
                    <Image src={array2[num].imgSrc} width="600px" height="600px"/>
                </div>
            </div>
            <div className={num === 0 ? "FirstCarousalItemDiv hidden" : ( check === 0 ? "FirstCarousalItemDiv left" : (num === 1 ? `FirstCarousalItemDiv` :  "")) }>
                <div className={`FirstCarousalItemChildDiv1`}>
                    <h1 className={`largeFont`}>{array2[num].heading}</h1>
                    <p className={`bgGray3`}>{array2[num].para}</p>
                    <button className={`FirstCarousalItemButton`}>{array2[num].button}</button>
                </div>
                <div className={`FirstCarousalItemChildDiv2`}>
                    <Image src={array2[num].imgSrc} width="600px" height="600px"/>
                </div>
                    {/* <Image onClick={() => changeNum(1)} className={ num === 0? `rotate90` : check !== 1? `rotate270`: ` rotate270 disable` } src={blackArrow} width="50px" height="50px"/> */}
            </div>
            <div className={`ImageDiv`}>
                    <Image onClick={() => changeNum(1)} className={ check === 1? `disable rotate270` : ( num === 0? `rotate270` : `rotate270 disable`)} src={blackArrow} width="50px" height="50px"/>
            </div>
        </div>
        <div className="centerRow">
            <input value={0} onClick={() => changeNum(0)} className="radio" name="image" type="radio" checked={check === 0}/>
            <input value={1} onClick={() => changeNum(1)}  className="radio" name="image" type="radio" checked={check === 1} />
        </div>
    </div>
)}
export default BigCarousal;