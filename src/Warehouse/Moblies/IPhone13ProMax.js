import React from "react";
import ProductDetailed from "../../Components/ProductDetailed";
import allItems from "../../Store/Data";

const IPhone13ProMax = () => {
  return (
    <>
      <ProductDetailed dtr={allItems[3]} />
    </>
  );
};

export default IPhone13ProMax;
