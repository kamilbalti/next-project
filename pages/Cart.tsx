import basket from "../public/basket.png";
import Image from "next/image";

// import '../styles/globals.css'

const Cart = ({ cartItem }: any) => {

  const cancelItem = (index: number) => {
    let cartItem2 = [...cartItem]
    cartItem2 = cartItem2.filter(( item2, index2 ) => 
      index2 != index
      )
      cartItem = cartItem2
      // alert(index + ' 1 ' + index2 + ' 2 ')
  }
  return (
    <div className="CartMainDiv">
      {
        // cartItem !== 0 ? (
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
            {   !cartItem ||
                cartItem.length === 0
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
            :
            <div>
              {cartItem.map((item: any, index: number) => 
              <div key={index} className="CartItemMainDiv">
                <div className='row'>
                  <div>
                    <p className="add"> + </p>
                    <p className={ "addNum" } > {item.num} </p>
                    <p className={item.num === 0 ? "add hidden" : "add"}>  – </p>
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
  );
};
export default Cart;
