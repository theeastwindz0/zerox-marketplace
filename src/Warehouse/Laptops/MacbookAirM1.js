import React from 'react'
import ProductDetailed from '../../Components/ProductDetailed'
import Img1 from "../../Images/Laptops/MacbookAirM1/mba_m1_large1.jpeg"
import Img2 from "../../Images/Laptops/MacbookAirM1/mba_m1_large2.jpeg"
import Img3 from "../../Images/Laptops/MacbookAirM1/mba_m1_large3.jpeg"
import sImg1 from "../../Images/Laptops/MacbookAirM1/mba_m1_small.png";

const MacbookAirM1 = () => {

    const dataToSend = {
        pName: "Macbook Air M1",
        pImages: [Img1,Img2,Img3],
        pSmallImage:sImg1,
        pDescription:
      <>
        <p>Apple M1 chip with 7‑core CPU, 8‑core GPU, 16‑core Neural Engine</p>
        <p>8GB unified memory</p>
        <p>256GB SSD storage</p>
        <p>13.3-inch Liquid Retina display with True Tone</p>
        <p>720 p FaceTime HD camera</p>
        <p> USB charging port</p>
        <p> Two Thunderbolt / USB 4 ports</p>
        <p>30W USB-C Power Adapter</p>
        <p>Backlit Magic Keyboard with Touch ID - US English</p>
      </>,
        pID: "MBAM1",
        pPrice: 99999,
        pTags: [],
        location:'/macbookairm1'
      }
  return (
     <><ProductDetailed dtr={dataToSend}/></>
  )
}

export default MacbookAirM1