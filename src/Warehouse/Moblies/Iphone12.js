import React from "react";
import ProductDetailed from "../../Components/ProductDetailed";
import allItems from "../../Store/Data";

const Iphone12 = () => {
  return (
    <>
      <ProductDetailed dtr={allItems[5]} />
    </>
  );
};

export default Iphone12;
