import styles from './CSS/App.module.css'
import { Route, Routes } from "react-router-dom";
import Branding from "./Components/Branding";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Accessories from "./Pages/Accessories";
import Airpords from "./Pages/Airpords";
import Bag from "./Pages/Bag";
import Home from "./Pages/Home";
import Laptop from "./Pages/Laptop";
import Mobile from "./Pages/Mobile";
import Support from "./Pages/Support";
import Tablet from "./Pages/Tablet";
import Watch from "./Pages/Watch";
import CartProvider from "./Store/CartProvider";
import MacbookAirM1 from "./Warehouse/Laptops/MacbookAirM1";
import MacbookAirM2 from "./Warehouse/Laptops/MacbookAirM2";
import MacBookProM1 from './Warehouse/Laptops/MacBookProM1';
import IPhone13ProMax from './Warehouse/Moblies/IPhone13ProMax';
import Iphone13 from './Warehouse/Moblies/Iphone13';
import Iphone12 from './Warehouse/Moblies/Iphone12';
import IphoneSe from './Warehouse/Moblies/IphoneSE';
import Macbook14 from './Warehouse/Laptops/Macbook14';
import  { AuthContextProvider } from './Store/AuthContext';
import UserLogin from './Pages/UserLogin';
import UserProfile from './Components/UserProfile';
function App() {


  //   const Pages=[{
  //     path:'/',
  //     ele:<Home/>
  //   },
  //   {
  //     path:'/laptop',
  //     ele:<Laptop/>
  //   },
  //   {
  //     path:'/mobile',
  //     ele:<Home/>
  //   },
  //   {
  //     path:'/',
  //     ele:<Home/>
  //   },
  //   {
  //     path:'/',
  //     ele:<Home/>
  //   },
  //   {
  //     path:'/',
  //     ele:<Home/>
  //   },
  // ]
  return (
    <AuthContextProvider>
    <CartProvider>
      <div className={styles.page_container}>
        <div className={styles.content_wrap}>
          <Header />
          <Branding />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/laptop" exact element={<Laptop />} />
            <Route path="/mobile" exact element={<Mobile />} />
            <Route path="/tablet" exact element={<Tablet />} />
            <Route path="/accessories" exact element={<Accessories />} />
            <Route path="/watch" exact element={<Watch />} />
            <Route path="/support" exact element={<Support />} />
            <Route path="/airpords" exact element={<Airpords />} />
            <Route path="/bag" exact element={<Bag />} />
            <Route path='/userlogin' element={<UserLogin/>}/>
            <Route path='/userprofile' element={<UserProfile/>}/>
            <Route path="/macbookairm1" element={<MacbookAirM1 />} />
            <Route path="/macbookairm2" element={<MacbookAirM2 />} />
            <Route path="/macbookprom1" element={<MacBookProM1/>}/>
            <Route path="/iphone13promax" element={<IPhone13ProMax/>}/>
            <Route  path="/iphone13" element={<Iphone13/>}/>
            <Route path='/iphone12' element={<Iphone12/>}/>
            <Route path='iphonese' element={<IphoneSe/>}/>
            <Route path='/macbook14' element={<Macbook14/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
