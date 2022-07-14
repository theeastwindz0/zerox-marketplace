import mbam1_Img1 from "../Images/Laptops/MacbookAirM1/mba_m1_large1.jpeg";
import mbam1_Img2 from "../Images/Laptops/MacbookAirM1/mba_m1_large2.jpeg";
import mbam1_Img3 from "../Images/Laptops/MacbookAirM1/mba_m1_large3.jpeg";
import mbam1_small from "../Images/Laptops/MacbookAirM1/mba_m1_small.png";

import mbam2_Img1 from "../Images/Laptops/MacbookAirM2/mba_m2_large1.jpeg";
import mbam2_Img2 from "../Images/Laptops/MacbookAirM2/mba_m2_large2.jpeg";
import mbam2_Img3 from "../Images/Laptops/MacbookAirM2/mba_m2_large3.jpeg";
import mbam2_small from "../Images/Laptops/MacbookAirM2/mba_m2_small.jpeg";

import mba14_Img1 from "../Images/Laptops/Macbook14/mba_14_large_1.jpeg";
import mba14_Img2 from "../Images/Laptops/Macbook14/mba_14_large_2.jpeg";
import mba14_Img3 from "../Images/Laptops/Macbook14/mba_14_large_3.jpeg";
import mba14_small from "../Images/Laptops/Macbook14/mba_14_small_1.jpeg";

import ip13_1 from "../Images/Mobiles/iPhone13ProMax/iphone_13_1.jpg";
import ip13_2 from "../Images/Mobiles/iPhone13ProMax/iphone_13_2.jpg";
import ip13_3 from "../Images/Mobiles/iPhone13ProMax/iphone_13_3.jpg";
import ip13_small from "../Images/Mobiles/iPhone13ProMax/ip13_small.jpg";

import ipp13_1 from "../Images/Mobiles/iPhone13/iphone_13_1.jpeg";
import ipp13_2 from "../Images/Mobiles/iPhone13/iphone_13_2.jpeg";
import ipp13_4 from "../Images/Mobiles/iPhone13/iphone_13_4.jpeg";

import ip12_1 from "../Images/Mobiles/iPhone12/iphone_12_1.jpeg";
import ip12_2 from "../Images/Mobiles/iPhone12/iphone_12_2.jpeg";
import ip12_3 from "../Images/Mobiles/iPhone12/iphone_12_3.jpeg";

import ipse_1 from "../Images/Mobiles/iPhoneSE/iphone_se_1.jpeg";
import ipse_2 from "../Images/Mobiles/iPhoneSE/iphone_se_2.jpeg";
import ipse_3 from "../Images/Mobiles/iPhoneSE/iphone_se_3.jpeg";


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

  //4
  {
    name: "iPhone 13 Pro Max",
    pImages: [ip13_3, ip13_1, ip13_2],
    tagline: "",
    new: false,
    pImage: ip13_small,
    description: (
      <>
        <p>Apple A15 Bionic (5 nm)</p>
        <p>Hexa-core, 64-bit</p>
        <p>128GB, not expandable</p>
        <p>Pro Camera Setup</p>
        <p>Back: Glass; Frame: Stainless steel</p>
        <p> Earpiece, Loudspeaker</p>
        <p>Graphite, Gold, Silver, Sierra Blue</p>
      </>
    ),
    id: "iPhone13ProMax",
    price: 129990,
    pTags: [],
    location: "/iphone13promax",
    amount: 1,
  },
  //5
  {
    name: "iPhone 13",
    pImages: [ipp13_1, ipp13_2, ipp13_4],
    tagline: "",
    new: false,
    pImage: ipp13_2,
    description: (
      <>
        <p>Apple A15 Bionic (5 nm)</p>
        <p>15.4 cm or 13.7 cm</p>
        <p>Up to 19 hours video playback⁴</p>
        <p>Advanced dual-camera system</p>
        <p>Back: Glass; Frame: Stainless steel</p>
        <p> Earpiece, Loudspeaker</p>
      </>
    ),
    id: "iPhone13",
    price: 69990,
    pTags: [],
    location: "/iphone13",
    amount: 1,
  },
  //6
  {
    name: "iPhone 12",
    pImages: [ip12_1, ip12_2, ip12_3],
    tagline: "",
    new: false,
    pImage: ip12_2,
    description: (
      <>
        <p>Apple A14 Bionic (5 nm)</p>
        <p>15.4 cm or 13.7 cm</p>
        <p>Up to 17 hours video playback⁴</p>
        <p>Dual-camera system </p>
        <p>Back: Glass; Frame: Stainless steel</p>
        <p> Earpiece, Loudspeaker</p>
      </>
    ),
    id: "iPhone12",
    price: 59990,
    pTags: [],
    location: "/iphone12",
    amount: 1,
  },
  //7
  {
    name: "iPhone SE",
    pImages: [ipse_1, ipse_3, ipse_2],
    tagline: "",
    new: false,
    pImage: ipse_1,
    description: (
      <>
        <p>Apple A15 Bionic (5 nm)</p>
        <p>11.94 cm</p>
        <p>Up to 15 hours video playback⁴</p>
        <p>Single-camera system </p>
        <p>Touch ID</p>
        <p> Earpiece, Loudspeaker</p>
      </>
    ),
    id: "iPhoneSE",
    price: 46700,
    pTags: [],
    location: "/iphonese",
    amount: 1,
  },
  //8
  {
    name: "Macbook Pro 14 inch",
    pImages: [mba14_Img1, mba14_Img2, mba14_Img3],
    tagline: "",
    new: false,
    pImage: mba14_small,
    description: (
      <>
        <p>Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine</p>
        <p>16GB unified memory</p>
        <p>5126GB SSD storage</p>
        <p>67W USB-C Power Adapter</p>
        <p>35.97 cm (14.2-inch) Liquid Retina XDR display</p>
        <p> Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port</p>
        <p>Backlit Magic Keyboard with Touch ID - US English</p>
      </>
    ),
    id: "MBA14",
    price: 194900,
    pTags: [],
    location: "/macbook14",
    amount: 1,
  }
]

export default allItems;