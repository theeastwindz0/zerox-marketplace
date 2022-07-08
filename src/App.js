import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Accessories from "./Pages/Accessories";
import Airpords from "./Pages/Airpords";
import Bag from "./Pages/Bag";
import Home from "./Pages/Home";
import Laptop from "./Pages/Laptop";
import Mobile from "./Pages/Mobile";
import Support from "./Pages/Support";
import Tablet from "./Pages/Tablet";
import Watch from "./Pages/Watch";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/laptop" exact element={<Laptop/>}/>
        <Route path="/mobile" exact element={<Mobile/>}/>
        <Route path="/tablet" exact element={<Tablet/>}/>
        <Route path="/accessories" exact element={<Accessories/>}/>
        <Route path="/watch" exact element={<Watch/>}/>
        <Route path="/support" exact element={<Support/>}/>
        <Route path="/airpords" exact element={<Airpords/>}/>
        <Route path="/bag" exact element={<Bag/>}/>
      </Routes>
    </div>
  );
}

export default App;
