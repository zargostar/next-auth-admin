// import React, { useEffect, useState } from "react";
// import { useCurrentUser } from "../helpers/currentUser";
"use client";
import { axios, fetchData, fetchWraper } from "../actions/axiosWrapper";
import { getServerSession } from "next-auth";
import { useCurrentUser } from "../helpers/currentUser";
import { useEffect, useState } from "react";

export default function Products({ url }) {
  const { token } = useCurrentUser();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function result() {
      const res = await axios.get(url, token);
      return res;
    }
    result()
      .then((data) => {
        setProduct(data);
      })
      .catch((e) => {
        console.log("from catch");
        console.log(e);
      });
  }, [token, url]);

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>{product.price}</div>
      ))}
    </div>
  );
}
