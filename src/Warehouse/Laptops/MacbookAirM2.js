import React from "react";
import ProductDetailed from "../../Components/ProductDetailed";
import Img1 from "../../Images/Laptops/MacbookAirM2/mba_m2_large1.jpeg"
import Img2 from "../../Images/Laptops/MacbookAirM2/mba_m2_large2.jpeg"
import Img3 from "../../Images/Laptops/MacbookAirM2/mba_m2_large3.jpeg"
import sImg1 from "../../Images/Laptops/MacbookAirM2/mba_m2_small.jpeg";

const MacbookAirM2 = () => {
  const dataToSend = {
    pName: "Macbook Air M2",
    pImages: [Img1, Img2, Img3],
    pSmallImage: sImg1,
    pDescription:
      <>
        <p>Apple M2 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine</p>
        <p>8GB unified memory</p>
        <p>256GB SSD storage</p>
        <p>13.6-inch Liquid Retina display with True Tone</p>
        <p>1080p FaceTime HD camera</p>
        <p> MagSafe 3 charging port</p>
        <p> Two Thunderbolt / USB 4 ports</p>
        <p>30W USB-C Power Adapter</p>
        <p>Backlit Magic Keyboard with Touch ID - US English</p>
      </>
    ,

    pID: "MBAM2",
    pPrice: 120000,
    pTags: [],
    location:'/macbookairm2'
  };
  return (
    <>
      <ProductDetailed dtr={dataToSend} />
    </>
  );
};

export default MacbookAirM2;
