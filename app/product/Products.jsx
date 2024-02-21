// import React, { useEffect, useState } from "react";
// import { useCurrentUser } from "../helpers/currentUser";
"use client";
import { fetchData } from "../actions/productActions";
import { getServerSession } from "next-auth";
import { useCurrentUser } from "../helpers/currentUser";
import { useEffect, useState } from "react";
export default function Products() {
  const { token } = useCurrentUser();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function result() {
      const res = await fetchData(token);
      return res;
    }
    result()
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((e) => {
        console.log("from catch");
        console.log(e);
      });
  }, [token]);

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>{product.price}</div>
      ))}
    </div>
  );
}
