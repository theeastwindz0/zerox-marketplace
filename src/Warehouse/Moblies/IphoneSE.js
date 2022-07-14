import React from "react";
import ProductDetailed from "../../Components/ProductDetailed";
import allItems from "../../Store/Data";

const IphoneSE = () => {
  return (
    <>
      <ProductDetailed dtr={allItems[6]} />
    </>
  );
};

export default IphoneSE;
