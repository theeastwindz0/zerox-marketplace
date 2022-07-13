import React from "react";
import ProductDetailed from "../../Components/ProductDetailed";
import allItems from "../../Store/Data";

const MacbookAirM2 = () => {
  return (
    <>
      <ProductDetailed dtr={allItems[1]} />
    </>
  );
};

export default MacbookAirM2;
