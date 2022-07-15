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

import gen2_1 from "../Images/Airpods/gen2/gen_1.jpeg";
import gen2_2 from "../Images/Airpods/gen2/gen_2.jpeg";
import gen2_3 from "../Images/Airpods/gen2/gen_3.jpeg";

import gen3_1 from "../Images/Airpods/gen3/gen_1.jpeg";
import gen3_2 from "../Images/Airpods/gen3/gen_2.jpeg";
import gen3_3 from "../Images/Airpods/gen3/gen_3.jpeg";

import genpro_1 from "../Images/Airpods/genpro/gen_1.jpeg";
import genpro_2 from "../Images/Airpods/genpro/gen_2.jpeg";
import genpro_3 from "../Images/Airpods/genpro/gen_3.jpeg";

import ipada_1 from "../Images/iPad/iPadAir/ipad_1.jpeg";
import ipada_2 from "../Images/iPad/iPadAir/ipad_2.jpeg";
import ipada_3 from "../Images/iPad/iPadAir/ipad_3.jpeg";

import ipadp_1 from "../Images/iPad/iPadPro/ipad_1.jpeg";
import ipadp_2 from "../Images/iPad/iPadPro/ipad_2.jpeg";
import ipadp_3 from "../Images/iPad/iPadPro/ipad_3.jpeg";

import watchse_1 from "../Images/Watches/WatchSe/watch_1.jpeg";
import watchse_2 from "../Images/Watches/WatchSe/watch_2.jpeg";

import watch7_1 from "../Images/Watches/Watch7/watch_1.jpeg";
import watch7_2 from "../Images/Watches/Watch7/watch_2.jpeg";

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
        <p>Dual-camera system</p>
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
        <p>Single-camera system</p>
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
        <p>
          {" "}
          Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port
        </p>
        <p>Backlit Magic Keyboard with Touch ID - US English</p>
      </>
    ),
    id: "MBA14",
    price: 194900,
    pTags: [],
    location: "/macbook14",
    amount: 1,
  },
  //9
  {
    name: "Airpods (2nd generation)",
    pImages: [gen2_1, gen2_2, gen2_3],
    tagline: "",
    new: false,
    pImage: gen2_1,
    description: (
      <>
        <p>H1 chip</p>
        <p>Hey Siri</p>
        <p>5 hours , Up to 5 hours of listening time on one charge</p>
        <p>More than 24 hours of listening time with charging case</p>
        <p>Automatic switching</p>
        <p>Charging Case</p>
      </>
    ),
    id: "gen2",
    price: 14100,
    pTags: [],
    location: "/gen2",
    amount: 1,
  },
  //10
  {
    name: "Airpods (3rd generation)",
    pImages: [gen3_1, gen3_2, gen3_3],
    tagline: "",
    new: false,
    pImage: gen3_1,
    description: (
      <>
        <p>Spatial audio with dynamic head tracking1</p>
        <p>Sweat and water resistant</p>
        <p>H1 chip</p>
        <p>Hey Siri</p>
        <p>5 hours , Up to 6 hours of listening time on one charge</p>
        <p>More than 30 hours of listening time with charging case</p>
        <p>Automatic switching</p>
        <p>Charging Case</p>
      </>
    ),
    id: "gen3",
    price: 20500,
    pTags: [],
    location: "/gen3",
    amount: 1,
  },
  //11
  {
    name: "Airpods Pro",
    pImages: [genpro_1, genpro_2, genpro_3],
    tagline: "",
    new: false,
    pImage: genpro_1,
    description: (
      <>
        <p>Transparency mode</p>
        <p>Spatial audio with dynamic head tracking1</p>
        <p>Sweat and water resistant</p>
        <p>H1 chip</p>
        <p>Hey Siri</p>
        <p>5 hours , Up to 6 hours of listening time on one charge</p>
        <p>More than 30 hours of listening time with charging case</p>
        <p>Automatic switching</p>
        <p>Charging Case</p>
      </>
    ),
    id: "genpro",
    price: 24500,
    pTags: [],
    location: "/genpro",
    amount: 1,
  },
  //12
  {
    name: "iPad Air",
    pImages: [ipada_1, ipada_2, ipada_3],
    tagline: "",
    new: false,
    pImage: ipada_1,
    description: (
      <>
        <p>M1 chip</p>
        <p>12MP Wide back camera</p>
        <p>Ultra Wide front camera with Center Stage</p>
        <p>USB-C connector</p>
        <p>5G cellular</p>
        <p>Works with Apple Pencil (2nd generation)</p>
        <p>Works with Magic Keyboard Smart Keyboard Folio</p>
      </>
    ),
    id: "ipadair",
    price: 54900,
    pTags: [],
    location: "/ipadair",
    amount: 1,
  },
  //13
  {
    name: "iPad Pro",
    pImages: [ipadp_2, ipadp_3, ipadp_1],
    tagline: "",
    new: false,
    pImage: ipadp_2,
    description: (
      <>
        <p>M1 chip</p>
        <p>12MP Wide and 10MP Ultra Wide back cameras</p>
        <p>TrueDepth front camera with Centre Stage</p>
        <p>USB-C connector with support for Thunderbolt / USB 4</p>
        <p>5G cellular</p>
        <p>Works with Apple Pencil (2nd generation)</p>
        <p>Works with Magic Keyboard Smart Keyboard Folio</p>
      </>
    ),
    id: "ipadpro",
    price: 71900,
    pTags: [],
    location: "/ipadpro",
    amount: 1,
  },
  //14
  {
    name: "Watch SE",
    pImages: [watchse_1, watchse_2],
    tagline: "",
    new: false,
    pImage: watchse_1,
    description: (
      <>
        <p> 44 mm or 40 mm case size </p>
        <p> Retina display </p>
        <p>Water resistant,Swim Proof</p>
        <p> High and low heart rate notifications </p>
        <p>Irregular heart rhythm notification</p>
        <p>Emergency SOS</p>
        <p>International emergency calling</p>
        <p> Fall detection </p>
        <p>Compass</p>
        <p> Always-on altimeter </p>
        <p>Available cellular connectivity</p>
        <p>Up to 18 hours</p>
      </>
    ),
    id: "watchse",
    price: 29900,
    pTags: [],
    location: "/watchse",
    amount: 1,
  },
  //15
  {
    name: "Watch Series 7",
    pImages: [watch7_1, watch7_2],
    tagline: "",
    new: false,
    pImage: watch7_1,
    description: (
      <>
        <p> 45 mm or 41 mm case size </p>
        <p>  Always-On Retina display  </p>
        <p>Water resistant,Swim Proof</p>
        <p>Blood Oxygen app</p>
        <p>ECG app</p>
        <p> High and low heart rate notifications </p>
        <p>Irregular heart rhythm notification</p>
        <p>Emergency SOS</p>
        <p>International emergency calling</p>
        <p> Fall detection </p>
        <p>Compass</p>
        <p> Always-on altimeter </p>
        <p>Available cellular connectivity</p>
        <p>Up to 18 hours</p>
      </>
    ),
    id: "watch7",
    price: 41900,
    pTags: [],
    location: "/watch7",
    amount: 1,
  },
];

export default allItems;
