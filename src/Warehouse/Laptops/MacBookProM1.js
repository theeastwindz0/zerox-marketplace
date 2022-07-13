import React from "react";
import ProductDetailed from "../../Components/ProductDetailed";
import allItems from "../../Store/Data";
import { useEffect } from "react";
const MacBookProM1 = () => {
  useEffect(() => {
    window.scroll(0,0);
  }, [])
  return (
    
    <>
      <ProductDetailed dtr={allItems[2]} />
    </>
  );
};

export default MacBookProM1;
