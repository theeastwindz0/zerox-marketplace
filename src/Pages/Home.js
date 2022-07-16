import React, { useEffect } from 'react'
import Parallex from '../Components/Parallex'
import SectionHalf from '../Components/SectionHalf'
import Container_1 from '../Images/Container_1.jpg'
import Container_Mobile_1 from '../Images/Container_Mobile_1.jpg'
import styles from '../CSS/GridLayout.module.css'
import section_image_1 from '../Images/Section/section_image_1.jpg'
import section_image_2 from '../Images/Section/section_image_2.jpg'
import section_image_3 from '../Images/Watches/Watch7/watch_1.jpeg'
import section_image_4 from '../Images/Section/section_image_4.jpg'
import section_image_5 from '../Images/Section/section_image_5.jpg'
import section_image_6 from '../Images/Section/section_image_6.jpg'
import section_image_7 from '../Images/Section/section_image_7.jpg'

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
    productImage:section_image_7,
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
  },
  {
    title:'Macbook Pro 13',
    tagline:'Supercharged by M1',
    productImage:section_image_6,
    backgroundColor:'black',
    color:'white',
    buttonLocation:'/macbookprom1'
  },{
    title:'Airpods Pro',
    tagline:'Magic like you\'ve never heard',
    productImage:section_image_5,
    backgroundColor:'black',
    color:'white',
    buttonLocation:'/genpro'
  }
]

  return (
    <>
    <Parallex dtr={dts} />
    <div className={styles.gridLayout2}>
    <SectionHalf dtr={sectionList[0]}/>
    <SectionHalf dtr={sectionList[2]}/>
    <SectionHalf dtr={sectionList[1]}/>
    <SectionHalf dtr={sectionList[4]}/>
    <SectionHalf dtr={sectionList[5]}/>
    <SectionHalf dtr={sectionList[3]}/>

    </div>
    </>
  )
}

export default Home