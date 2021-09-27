import React, { useState, useEffect } from "react";
import Image from "next/image";
import zero from "../public/0-5 rating star.png";
import FourStar from "../public/4-5 rating star.png";
import FiveStar from "../public/5-5 rating star.png";
import redMenu from "../public/redMenu.png";
import medal from "../public/medal.png";
import brandStar from "../public/brandStar.png";
import newIcon from "../public/new.png";
import gift from "../public/gift.png";

const BgGrayCarousal = () => {
  const [numArr, setNumArr] = useState([
    new Array(10).fill(0),
    new Array(6).fill(0),
    new Array(9).fill(0),
    new Array(9).fill(0),
  ]);
  useEffect(() => {
    console.log(numArr, "numArr");
  }, [numArr]);
  const [cartItem, setCartItem]: Array<any> = useState([]);
  const [next, setNext]: Array<any> = useState([1, 1, 1]);
  let MainDataArr: any = [
    {
      num: 0,
      MainHeading: "Flash Deals",
      MainIcon: "https://cdn-icons-png.flaticon.com/128/252/252590.png",
      leftArrow: "https://cdn-icons-png.flaticon.com/128/2089/2089642.png",
      rightArrow: "https://cdn-icons-png.flaticon.com/128/2089/2089675.png",
      next: next[0],
      DataArr: [
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=3840&q=75`,
          name: "Smart watch black",
          rated: "4",
          delVal: "250.00",
          newVal: "$187.50",
          off: "25% off",
          num: numArr[0][0],
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=3840&q=75`,
          name: "Smart watch black",
          rated: "4",
          delVal: "250.00",
          newVal: "$187.50",
          off: "25% off",
          num: numArr[0][1],
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=3840&q=75`,
          name: "Smart watch black",
          rated: "4",
          delVal: "250.00",
          newVal: "$187.50",
          off: "25% off",
          num: numArr[0][2],
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=3840&q=75`,
          name: "Smart watch black",
          rated: "4",
          delVal: "250.00",
          newVal: "$187.50",
          off: "25% off",
          num: numArr[0][3],
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=3840&q=75`,
          name: "Smart watch black",
          rated: "4",
          delVal: "250.00",
          newVal: "$187.50",
          off: "25% off",
          num: numArr[0][4],
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=3840&q=75`,
          name: "Smart watch black",
          rated: "4",
          delVal: "250.00",
          newVal: "$187.50",
          off: "25% off",
          num: numArr[0][5],
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=3840&q=75`,
          name: "Smart watch black",
          rated: "4",
          delVal: "250.00",
          newVal: "$187.50",
          off: "25% off",
          num: numArr[0][6],
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=3840&q=75`,
          name: "Smart watch black",
          rated: "4",
          delVal: "250.00",
          newVal: "$187.50",
          off: "25% off",
          num: numArr[0][7],
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=3840&q=75`,
          name: "Smart watch black",
          rated: "4",
          delVal: "250.00",
          newVal: "$187.50",
          off: "25% off",
          num: numArr[0][8],
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=3840&q=75`,
          name: "Smart watch black",
          rated: "4",
          delVal: "250.00",
          newVal: "$187.50",
          off: "25% off",
          num: numArr[0][9],
        },
      ],
    },

    {
      MainHeading: "Top Categories",
      MainIcon: redMenu,
      next: next[1],
      DataArr: [
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=3840&q=75`,
          name: "Headphone",
          about: "3k orders this week",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=3840&q=75`,
          name: "Watch",
          about: "3k orders this week",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-3.png&w=3840&q=75`,
          name: "Sunglass",
          about: "3k orders this week",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=3840&q=75`,
          name: "Headphone",
          about: "3k orders this week",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=3840&q=75`,
          name: "Watch",
          about: "3k orders this week",
        },
      ],
    },

    {
      MainHeading: "Top Ratings",
      MainIcon: medal,
      MainHeading2: "Featured Brands",
      MainIcon2: brandStar,
      DataArr: [
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&q=75&w=3840`,
          rated: 4,
          peopleRated: "(49)",
          name: "Camera",
          price: "$3,300",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fshoes-2.png&w=2048&q=75`,
          rated: 5,
          peopleRated: "(20)",
          name: "Shoe",
          price: "$400",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=3840&q=75`,
          rated: 5,
          peopleRated: "(65)",
          name: "Phone",
          price: "$999",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fwatch-1.png&w=3840&q=75`,
          rated: 5,
          peopleRated: "(75)",
          name: "Watch",
          price: "$999",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flondon-britches.png&w=3840&q=75`,
          name: `London Britches`,
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fjim%20and%20jiko.png&w=3840&q=75`,
          name: `Jim & Jago`,
        },
      ],
    },

    {
      MainHeading: `New Arrivals`,
      MainIcon: newIcon,
      DataArr: [
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=3840&q=75`,
          name: "Sunglass",
          price: "$150",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=828&q=75`,
          name: "Makeup",
          price: "$250",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fbgwatch.png&w=2048&q=75`,
          name: "Smart Watch",
          price: "$350",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(1).png&w=2048&q=75`,
          name: "LipStick",
          price: "$15",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(4).png&w=2048&q=75`,
          name: "Green plant",
          price: "$55",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(3).png&w=2048&q=75`,
          name: "Bonsai tree",
          price: "$535",
        },
      ],
    },

    {
      MainHeading: "Big Discounts",
      MainIcon: gift,
      next: next[2],
      DataArr: [
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F7.beatsw3.png&w=2048&q=75`,
          name: "BenX 2020",
          delVal: "$250",
          newVal: "$250",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F9.SonyTV1080p.png&w=2048&q=75`,
          name: "Tony TV 1080p",
          delVal: "$250",
          newVal: "$250",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F10.SonyPS4.png&w=2048&q=75`,
          name: "Tony PS4",
          delVal: "$250",
          newVal: "$250",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F11.Netgear2020.png&w=2048&q=75`,
          name: "Setgearr 2020",
          delVal: "$250",
          newVal: "$250",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F12.SonyBGB.png&w=2048&q=75`,
          name: "Tony RGB",
          delVal: "$250",
          newVal: "$250",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F13.LGProducts.png&w=2048&q=75`,
          name: "RG products",
          delVal: "$250",
          newVal: "$250",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F14.Panasonic2019.png&w=2048&q=75`,
          name: "Ranasonic 2019",
          delVal: "$250",
          newVal: "$250",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F15.DuneHD.png&w=2048&q=75`,
          name: "Pune HD",
          delVal: "$250",
          newVal: "$250",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F16.SonyCCTV.png&w=2048&q=75`,
          name: "Tony CCTV",
          delVal: "$250",
          newVal: "$250",
        },
      ],
    },

    {
      MiniDivInfo: [
        {
          name: "Ferrari",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fferrari.png&w=32&q=75",
        },
        {
          name: "Tesla",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Ftesla.png&w=32&q=75",
        },
        {
          name: "Bmw",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fbmw.png&w=32&q=75",
        },
        {
          name: "Toyota",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Ftoyota.png&w=32&q=75",
        },
        {
          name: "Mini",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fmini.png&w=32&q=75",
        },
        {
          name: "Ford",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fford.png&w=32&q=75",
        },
        {
          name: "View All Brands",
        },
      ],
      MainHeading: "Cars",
      DataArr: [
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=1920&q=75`,
          name: "Lord 2019",
          rated: "0",
          delVal: "250.00",
          newVal: "$200.00",
          num: numArr[1][0],
          off: "20% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F2.Audi2017.png&w=1920&q=75`,
          name: "Budi 2017",
          rated: "0",
          delVal: "250.00",
          newVal: "$200.00",
          num: numArr[1][1],
          off: "20% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F3.Tesla2015.png&w=1920&q=75`,
          name: "Resla 2015",
          rated: "0",
          delVal: "250.00",
          newVal: "$200.00",
          num: numArr[1][2],
          off: "20% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F4.Porsche2018.png&w=1920&q=75`,
          name: "Xorsche 2018",
          rated: "0",
          delVal: "250.00",
          newVal: "$200.00",
          num: numArr[1][3],
          off: "20% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F5.Ford2018.png&w=1920&q=75`,
          name: "Lord 2018",
          rated: "0",
          delVal: "250.00",
          newVal: "$200.00",
          num: numArr[1][4],
          off: "20% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F6.Ford2020.png&w=1920&q=75`,
          name: "Lord 2020",
          rated: "0",
          delVal: "250.00",
          newVal: "$200.00",
          num: numArr[1][5],
          off: "20% off",
        },
      ],
    },

    {
      MiniDivInfo: [
        {
          name: "Apple",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fapple.png&w=32&q=75",
        },
        {
          name: "Dell",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fdell.png&w=32&q=75",
        },
        {
          name: "Xiaomi",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fxiaomi.png&w=32&q=75",
        },
        {
          name: "Asus",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fasus.png&w=32&q=75",
        },
        {
          name: "Sony",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fsony.png&w=32&q=75",
        },
        {
          name: "Acer",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Facer.png&w=32&q=75",
        },
        {
          name: "View All Brands",
        },
      ],
      MainHeading: "Mobile Phones",
      DataArr: [
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F29.AppleEarphones.png&w=1920&q=75`,
          name: "Mapple Earphones",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[2][0],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F30.Nokiaandroidone.png&w=1920&q=75`,
          name: "Lokia android one",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[2][1],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F31.Symphonlights.png&w=1920&q=75`,
          name: "Xymphone lights",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[2][2],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F32.iphone7.png&w=1920&q=75`,
          name: "Lphone 7",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[2][3],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F33.beatswirelessearphones.png&w=1920&q=75`,
          name: "Ceats wireless earphones",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[2][4],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F34.HTC2018.png&w=1920&q=75`,
          name: "HPC 2018",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[2][5],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F35.beatsbluetoothearpohones.png&w=1920&q=75`,
          name: "Xeats bluetooth earphones",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[2][6],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F36.sbsWirelessEarphones.png&w=1920&q=75`,
          name: "sbs Wireless Earphones",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[2][7],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F1.SilverCap.png&w=1920&q=75`,
          name: "Silver Cap",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[2][8],
          off: "25% off",
        },
      ],
    },
    {
      MiniDivInfo: [
        {
          name: "Herman Miller",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fshops%2Fherman%20miller.png&w=32&q=75",
        },
        {
          name: "Zeiss",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fshops%2Fzeiss.png&w=32&q=75",
        },
        {
          name: "Hatil",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fshops%2Fhatil.png&w=32&q=75",
        },
        {
          name: "Steelcase",
          icon: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fshops%2Fsteelcase.png&w=32&q=75",
        },
        {
          name: "View All Shops",
        },
      ],
      MainHeading: "Optics / Watch",
      DataArr: [
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F29.AppleEarphones.png&w=1920&q=75`,
          name: "Police Gray Eyeglasses",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[3][0],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F30.Nokiaandroidone.png&w=1920&q=75`,
          name: "Say Ban Matt Black",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[3][1],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F31.Symphonlights.png&w=1920&q=75`,
          name: "Say Ban Black",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[3][2],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F32.iphone7.png&w=1920&q=75`,
          name: "Say Ban Ocean",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[3][3],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F33.beatswirelessearphones.png&w=1920&q=75`,
          name: "Sun glasses Collection",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[3][4],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F34.HTC2018.png&w=1920&q=75`,
          name: "Ziaomi mi band2",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[3][5],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F35.beatsbluetoothearpohones.png&w=1920&q=75`,
          name: "Kossil Watch Brown",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[3][6],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F36.sbsWirelessEarphones.png&w=1920&q=75`,
          name: "MVMTM Watch Black",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[3][7],
          off: "25% off",
        },
        {
          ImgSrc: `https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F1.SilverCap.png&w=1920&q=75`,
          name: "Xarioho Watch Black",
          rated: "0",
          delVal: "250.00",
          newVal: "$187.50",
          num: numArr[3][8],
          off: "25% off",
        },
      ],
    },
  ];
  // const [next, setNext] = useState(1);
  const AddNum = (num: number, i: number, carNo: number) => {
    let num2 = [...numArr];
    num2[num][i] = numArr[num][i] + 1;
    setNumArr(num2);
    // numArr[num][i] > 0 ?
    let cartItem2: Array<any> = [];
    if (cartItem !== []) cartItem2 = [...cartItem];
    cartItem2.push(MainDataArr[carNo].DataArr[i]);
    setCartItem(cartItem2);
    console.log(cartItem, "cart");
  };

  const CutNum = (num: number, i: number, carNo: number) => {
    let num2 = [...numArr];
    num2[num][i] = numArr[num][i] - 1;
    setNumArr(num2);
    let cartItem2;
    if (cartItem !== []) cartItem2 = [...cartItem];
    // cartItem2.push(MainDataArr[carNo].DataArr[i])
    cartItem2 !== []
      ? cartItem2?.filter(
          (item, index) => item !== MainDataArr[carNo].DataArr[i]
        )
      : false;
    setCartItem(cartItem2);
    console.log(cartItem, "cart");
  };

  // console.log(n, "  num", v, "  value");
  const ChangeNextNum = (n: number, v: string, nv: number) => {
    // v === "add" ? MainDataArr[n].next = MainDataArr[n].next+1 : false;
    // v === "sub" ? MainDataArr[n].next = MainDataArr[n].next-1 : false;
    if (v === "add") {
      let next2 = [...next];
      next2[nv] = MainDataArr[n].next + 1;
      setNext(next2);
    }
    if (v === "sub") {
      let next2 = [...next];
      next2[nv] = MainDataArr[n].next - 1;
      setNext(next2);
    }
    // v === "sub" ? setNext(MainDataArr[n].next-1) : false;
  };

  return (
    <div className={``}>
      <div className={`bgLightGray`}>
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
            <button
              className="noBorder"
              disabled={MainDataArr[0].next === 1}
              onClick={() => ChangeNextNum(0, "sub", 0)}
            >
              <img
                className={
                  MainDataArr[0].next === 1 ? `arrow disable` : `arrow`
                }
                src={MainDataArr[0].leftArrow}
              />
            </button>
            {MainDataArr[0]?.DataArr?.map(
              (item: any, index: number) =>
                index < MainDataArr[0].next + 3 &&
                index > MainDataArr[0].next - 2 && (
                  <div key={index} className={"imgDiv"}>
                    <p className="off">{item.off}</p>
                    <img src={item.ImgSrc} className="imgSrc" />
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
                          onClick={() => CutNum(0, index, 0)}
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
                        <p className="add" onClick={() => AddNum(0, index, 0)}>
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
                              : false
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
                  {/* <Image width="120px" height="20px" src={item2.rated === 5 ? FiveStar: (item2.rated === 4 ? FourStar : false)}/> */}
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
              (item, index) =>
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
            {MainDataArr[5].MiniDivInfo?.map((item, index) => (
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
          {/* <div className="ImgDiv"> */}

          <div className="allImgDiv allImgDiv5">
            <div className="centerRow headingDiv">
              <h2 className="mainHeading mainHeading2">
                {MainDataArr[5].MainHeading}
              </h2>
            </div>
            <div className="bgLightGray">
              <div className="centerRow">
                {MainDataArr[5]?.DataArr?.map(
                  (item, index) =>
                    index < 3 && (
                      <div key={index} className={"imgDiv imgDiv4"}>
                        <p className="off">{item.off}</p>
                        <img src={item.ImgSrc} className="imgSrc imgSrc4" />
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
                              onClick={() => CutNum(1, index, 5)}
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
                              onClick={() => AddNum(1, index, 5)}
                            >
                              +
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
              <div className="centerRow">
                {MainDataArr[5]?.DataArr?.map(
                  (item, index) =>
                    index > 2 && (
                      <div key={index} className={"imgDiv imgDiv4"}>
                        <p className="off">{item.off}</p>
                        <img src={item.ImgSrc} className="imgSrc imgSrc4" />
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
                              onClick={() => CutNum(1, index, 5)}
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
                              onClick={() => AddNum(1, index, 5)}
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
            {MainDataArr[6].MiniDivInfo?.map((item, index) => (
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
              <div className="centerRow">
                {MainDataArr[6]?.DataArr?.map(
                  (item, index) =>
                    index < 3 && (
                      <div key={index} className={"imgDiv imgDiv4"}>
                        <p className="off">{item.off}</p>
                        <img src={item.ImgSrc} className="imgSrc imgSrc4" />
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
                              onClick={() => CutNum(2, index, 6)}
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
                              onClick={() => AddNum(2, index, 6)}
                            >
                              +
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
              <div className="centerRow">
                {MainDataArr[6]?.DataArr?.map(
                  (item, index) =>
                    index > 2 &&
                    index < 6 && (
                      <div key={index} className={"imgDiv imgDiv4"}>
                        <p className="off">{item.off}</p>
                        <img src={item.ImgSrc} className="imgSrc imgSrc4" />
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
                              onClick={() => CutNum(2, index, 6)}
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
                              onClick={() => AddNum(2, index, 6)}
                            >
                              +
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>

              <div className="centerRow">
                {MainDataArr[6]?.DataArr?.map(
                  (item, index) =>
                    index > 5 && (
                      <div key={index} className={"imgDiv imgDiv4"}>
                        <p className="off">{item.off}</p>
                        <img src={item.ImgSrc} className="imgSrc imgSrc4" />
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
                              onClick={() => CutNum(2, index, 6)}
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
                              onClick={() => AddNum(2, index, 6)}
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
            className="centerPic"
            src={`https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-1.png&w=1920&q=75`}
          />
          <img
            className="centerPic"
            src={`https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-2.png&w=1920&q=75`}
          />
        </div>
      </div>
    </div>
  );
};

export default BgGrayCarousal;
