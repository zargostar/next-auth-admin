import React from "react";
import Products from "./Products";
import { productUrl } from "../apiUrl";

export default function Product() {
  const url = `${productUrl}`;
  console.log("fetch product");
  console.log(productUrl);
  return (
    <div>
      <Products url={url} />
    </div>
  );
}
