import React from 'react'
import ProductDetailed from '../../Components/ProductDetailed'
import Img1 from '../../Images/section_image_1.jpg'
import Img2 from '../../Images/section_image_2.jpg'
import Img3 from '../../Images/section_image_3.jpg'
import Img4 from '../../Images/section_image_4.jpg'

const MacbookAirM1 = () => {

    const dataToSend = {
        pName: "Macbook Air M1",
        pImages: [Img1,Img2,Img3,Img4],
        pDescription:
          "Im a product description. Im a great place to include more information about your product. Buyers like to know what theyrgetting before they purchase.",
    
        pID: "MBA M1",
        pPrice: "99999",
        pTags: [],
      }
  return (
     <><ProductDetailed dataToReceive={dataToSend}/></>
  )
}

export default MacbookAirM1