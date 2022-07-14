import React from "react";
import ProductDetailed from "../../Components/ProductDetailed";
import allItems from "../../Store/Data";

const Iphone13 = () => {
  return (
    <>
      <ProductDetailed dtr={allItems[4]} />
    </>
  );
};

export default Iphone13;
