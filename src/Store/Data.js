import mbam1_Img1 from "../Images/Laptops/MacbookAirM1/mba_m1_large1.jpeg";
import mbam1_Img2 from "../Images/Laptops/MacbookAirM1/mba_m1_large2.jpeg";
import mbam1_Img3 from "../Images/Laptops/MacbookAirM1/mba_m1_large3.jpeg";
import mbam1_small from "../Images/Laptops/MacbookAirM1/mba_m1_small.png";

import mbam2_Img1 from "../Images/Laptops/MacbookAirM2/mba_m2_large1.jpeg";
import mbam2_Img2 from "../Images/Laptops/MacbookAirM2/mba_m2_large2.jpeg";
import mbam2_Img3 from "../Images/Laptops/MacbookAirM2/mba_m2_large3.jpeg";
import mbam2_small from "../Images/Laptops/MacbookAirM2/mba_m2_small.jpeg";

import ip13_1 from "../Images/Mobiles/iPhone13ProMax/iphone_13_1.jpg"
import ip13_2 from "../Images/Mobiles/iPhone13ProMax/iphone_13_2.jpg"
import ip13_3 from "../Images/Mobiles/iPhone13ProMax/iphone_13_3.jpg"

const allItems = [
  //1
  {
    name: "Macbook Air M1",
    pImages: [mbam1_Img1, mbam1_Img2, mbam1_Img3],
    tagline: "World Best Selling Laptop",
    new: false,
    pImage: mbam1_small,
    description: (
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
      </>
    ),
    id: "MBAM1",
    price: 99999,
    pTags: [],
    location: "/macbookairm1",
    amount: 1,
  },
  //2
  {
    name: "Macbook Air M2",
    pImages: [mbam2_Img1, mbam2_Img2, mbam2_Img3],
    tagline: "World Best Selling Laptop",
    new: true,
    pImage: mbam2_small,
    description: (
      <>
        <p>Apple M2 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine</p>
        <p>8GB unified memory</p>
        <p>256GB SSD storage</p>
        <p>13.6-inch Liquid Retina display with True Tone</p>
        <p>1080 p FaceTime HD camera</p>
        <p> Mega Safe charging port</p>
        <p> Two Thunderbolt / USB 4 ports</p>
        <p>30W USB-C Power Adapter</p>
        <p>Backlit Magic Keyboard with Touch ID - US English</p>
      </>
    ),
    id: "MBAM2",
    price: 119990,
    pTags: [],
    location: "/macbookairm2",
    amount: 1,
  },
  //3
  {
    name: "Macbook Pro M1",
    pImages: [mbam1_Img1, mbam1_Img2, mbam1_Img3],
    tagline: "World Second Best Selling Laptop",
    new: false,
    pImage: mbam1_small,
    description: (
      <>
        <p>Apple M1 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine</p>
        <p>8GB unified memory</p>
        <p>256GB SSD storage</p>
        <p>13.3-inch Liquid Retina display with True Tone</p>
        <p>720 p FaceTime HD camera</p>
        <p> USB charging port</p>
        <p> Two Thunderbolt / USB 4 ports</p>
        <p>30W USB-C Power Adapter</p>
        <p>Backlit Magic Keyboard with Touch ID - US English</p>
      </>
    ),
    id: "MBPM1",
    price: 129990,
    pTags: [],
    location: "/macbookprom1",
    amount: 1,
  },
  {
    name: "iPhone 13 Pro Max",
    pImages: [ ip13_3,ip13_1,ip13_2],
    tagline: "",
    new: true,
    pImage: ip13_3,
    description: (
      <>
        <p>Apple A15 Bionic (5 nm)</p>
        <p>Hexa-core, 64-bit</p>
        <p>128GB, not expandable</p>
        <p>Triple camera setup</p>
        <p>Back: Glass; Frame: Stainless steel</p>
        <p> Earpiece, Loudspeaker</p>
        <p>Graphite, Gold, Silver, Sierra Blue
</p>
      </>
    ),
    id: "iPhone13ProMax",
    price: 129990,
    pTags: [],
    location: "/iphone13promax",
    amount: 1,
  },
];

export default allItems;
