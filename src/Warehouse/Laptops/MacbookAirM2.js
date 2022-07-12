import React from 'react'
import ProductDetailed from '../../Components/ProductDetailed'
import Img1 from '../../Images/section_image_1.jpg'
import Img2 from '../../Images/section_image_2.jpg'
import Img3 from '../../Images/section_image_3.jpg'
import Img4 from '../../Images/section_image_4.jpg'
import sImg1 from "../../Images/Laptops/MacbookAirM1/mba_m1_small.png";

const MacbookAirM2 = () => {

    const dataToSend = {
        pName: "Macbook Air M2",
        pImages: [Img1,Img2,Img3,Img4],
        pSmallImage:sImg1,
        pDescription:
          "Im a product description. Im a great place to include more information about your product. Buyers like to know what theyrgetting before they purchase.",
    
        pID: "MBAM2",
        pPrice: 120000,
        pTags: [],
      }
  return (
     <><ProductDetailed dtr={dataToSend}/></>
  )
}

export default MacbookAirM2