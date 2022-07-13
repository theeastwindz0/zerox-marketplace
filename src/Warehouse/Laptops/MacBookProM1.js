import React from "react";
import ProductDetailed from "../../Components/ProductDetailed";
import allItems from "../../Store/Data";

const MacBookProM1 = () => {
  return (
    <>
      <ProductDetailed dtr={allItems[2]} />
    </>
  );
};

export default MacBookProM1;
