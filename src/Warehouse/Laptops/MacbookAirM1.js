import React from "react";
import ProductDetailed from "../../Components/ProductDetailed";
import allItems from "../../Store/Data";

const MacbookAirM1 = () => {
  return (
    <>
      <ProductDetailed dtr={allItems[0]} />
    </>
  );
};

export default MacbookAirM1;
