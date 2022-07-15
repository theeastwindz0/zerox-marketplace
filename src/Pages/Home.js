import React, { useEffect } from 'react'
import Parallex from '../Components/Parallex'
import SectionHalf from '../Components/SectionHalf'
import Container_1 from '../Images/Container_1.jpg'
import Container_Mobile_1 from '../Images/Container_Mobile_1.jpg'
import styles from '../CSS/GridLayout.module.css'
import section_image_1 from '../Images/section_image_1.jpg'
import section_image_2 from '../Images/section_image_2.jpg'
import section_image_3 from '../Images/section_image_3.jpg'
import section_image_4 from '../Images/section_image_4.jpg'
const Home = () => {

  useEffect(() => {
    window.scroll(0,0);
  }, [])
  
  const dts={
    parallexImage:Container_1,
    parallexImageMobile:Container_Mobile_1,
    tag:"NEW ARRIVALS",
    tagline:"Starting at 99,999"
  }

  const sectionList=[{
    title:'iPad Air',
    tagline:'Best Selling',
    productImage:section_image_1,
    backgroundColor:'black',
    color:'white',
    buttonLocation:'/ipadair'
  },
  {
    title:'iPhone 13 Pro Max',
    tagline:'So Pro',
    productImage:section_image_2,
    backgroundColor:'white',
    color:'black',
    buttonLocation:'/iphone13promax'
  },
  {
    title:'Watch',
    tagline:'Series 7',
    productImage:section_image_3,
    backgroundColor:'white',
    color:'black',
    buttonLocation:'/watch7'
  }, {
    title:'Credit Card',
    tagline:'3% cashback',
    productImage:section_image_4,
    backgroundColor:'white',
    color:'black',
    buttonLocation:'/'
  }
]

  return (
    <>
    <Parallex dtr={dts} />
    <div className={styles.gridLayout2}>
    <SectionHalf dtr={sectionList[0]}/>
    <SectionHalf dtr={sectionList[1]}/>
    <SectionHalf dtr={sectionList[3]}/>
    <SectionHalf dtr={sectionList[2]}/>

    </div>
    </>
  )
}

export default Home