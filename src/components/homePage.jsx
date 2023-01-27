import React from "react";
import { useState } from "react";
import { Nav } from "./nav";
import { Product } from "./product";

export const HomePage = () => {
  const [selectedData, setSelectedData] = useState([]);
  console.log(selectedData);
  return (
    <div>
      <Nav />
      <Product setSelectedData={setSelectedData} selectedData={selectedData} />
    </div>
  );
};
