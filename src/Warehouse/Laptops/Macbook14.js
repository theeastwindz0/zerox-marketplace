import React from "react";
import ProductDetailed from "../../Components/ProductDetailed";
import allItems from "../../Store/Data";
import { useEffect } from "react";
const Macbook14 = () => {
  useEffect(() => {
    window.scroll(0,0);
  }, [])
  return (
    <>
      <ProductDetailed dtr={allItems[7]} />
    </>
  );
};

export default Macbook14;
