import Link from "next/link"
// import basket from "../public/basket.png";
// import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem, setMainDataArr, setOpen } from "../redux/Action";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch()
  const { MainDataArr, cartItem } : any = useSelector((e) => e)
  let total : any = 0;
  let temp : any = 0;


  // let allVar : any;
  // let allVar2 : any;
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
  useEffect(() => {
    let cartItem2 = [...cartItem]
      cartItem2.map((item : any, index : any) => {
      temp = item?.newVal
      temp = temp !== undefined && temp.replace("$", "")
      temp = temp * item?.num;
      total = total + parseInt(temp)
    })
  },[])

  console.log(cartItem, "cartItem");


  const CutNum = (index: number) => {
    let cartItem2: any = [...cartItem];
    let MainDataArr2 : any = [...MainDataArr]
    MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].num = MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].num - 1;
      if( MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].num >= 1 )
      cartItem2[MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].cartItemIndex] = MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index]
      if( MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].num === 0 )
      // cancelItem(MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].cartItemIndex)
      cartItem2 = cartItem2.filter((item: any, index: number) => 
      // cancelItem(MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].cartItemIndex])
        // item !== MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index]
        item.num !== 0
      )
      // }
    dispatch(setMainDataArr(MainDataArr2))
    dispatch(setCartItem(cartItem2))
  };

  const AddNum = (index: number) => {
    let cartItem2 : any = [...cartItem]
    let MainDataArr2 : any = [...MainDataArr]
    MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].num = MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].num + 1
    dispatch(setMainDataArr(MainDataArr2))
    if (MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].num === 1 ) {
      // MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].cartItemIndex = cartItem2.length
      // MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].index = cartItem2[index].index
      // MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].mainInd = cartItem2[index].mainInd
      cartItem2.push(MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index]);
    }

    else if (MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].num > 1) { 
      cartItem2 = [...cartItem]
      cartItem2[MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].cartItemIndex] = MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index]
    };
    dispatch(setCartItem(cartItem2));
    dispatch(setMainDataArr(MainDataArr2))
  };

  const cancelItem = (index: number) => {
    let cartItem2 = [...cartItem]
    let MainDataArr2 = [...MainDataArr]
    MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].num = 0
    cartItem2[MainDataArr2[cartItem2[index].mainInd].DataArr[cartItem2[index].index].cartItemIndex].num = 0
    cartItem2 = cartItem2.filter(( item2 : any, index2 : number ) => 
      index2 !== index
      // item2.num !== 0
    )
    dispatch(setCartItem( cartItem2 ))
    dispatch(setMainDataArr(MainDataArr2))
      // let tempNum : any;
      // let tempNum2 : any = MainDataArr.map(( item: any, index : any) => item.DataArr.findIndex(( item2: any, index2 : any) => {
      //     cartItem.map(( item3: any, index3 : any) => 
      //     item2 === item3
      //     // tempNum = index
      //     )
      // }))
      // let MainDataArr2 = [...MainDataArr]
      // MainDataArr2[tempNum].DataArr[tempNum2].num = 0;
  }
  // let cartItem2 : any = [...cartItem]
  // useEffect(() => {
  //   cartItem2 = cartItem2.filter((item: any, index: number) => 
  //     item?.num !== 0
  //     // cancelItem(index) : false
  //   )
  //   dispatch(setCartItem(cartItem2))
  // },[cartItem2])

  return (
    <div className="CartMainDiv">
    <div className={cartItem.length !== 0 ? "scroll" : "scroll fullWidth"}>
      {
          <div>
            <div className="row">
              <img
                src={`https://cdn.iconscout.com/icon/free/png-64/shopping-bag-1438634-1214045.png`}
                className="basket"
                width="30px"
                height="30px"
              />
              <p>{cartItem? cartItem.length : 0} item</p>
            </div>
            { !cartItem || cartItem.length === 0
                 ? 
                <div className="center">
              <div className="center childCenterDiv">
                  <img
                    width="85px"
                    src={`https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fshopping-bag.svg&w=96&q=75`}
                    />
                  <p className="centerPara">Your shopping bag is empty. Start shopping</p>
              </div>
            </div>
            : cartItem.length >= 1 &&
            <div>
              { cartItem.map((item: any, index: number) => 
              <div key={index} className="CartItemMainDiv">
                <div className='row'>
                  <div>
                    <p onClick={() => AddNum(index)} className="add"> + </p>
                    <p className={ "addNum" } > {item.num} </p>
                    <p onClick={() => cartItem[index].num >= 1 && CutNum(index)} className={item.num === 0 ? "add hidden" : "add"}>  – </p>
                  </div>
                  <img width="100px" src={item?.ImgSrc} />
                  <div>
                    <p className="pad blackCol">{item?.name}</p>
                    <p className="pad grayCol">{item?.newVal} x {item?.num}</p>
                    <p className="pad redCol">{item?.newVal}</p>
                  </div>
                </div>
                <p className="cut" onClick={() => cancelItem(index)}>X</p>
              </div>
              )}
            </div>
            }
          </div>
        // ) : (
          // {/* cartItem.map((item, index) =>  */}
        //   <div></div>
        // )
        // )
      }
    </div>
    {
      cartItem.length !== 0 ?
    <div>
      <Link href="/cart"><button className="redBut">Checkout Now (${total}.00)</button></Link>
      <Link href="/"><button className="redBut whiteBg">View Cart</button></Link>
    </div> : false }
    </div>
  );
};
export default Cart;