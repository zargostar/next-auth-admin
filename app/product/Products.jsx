// import React, { useEffect, useState } from "react";
// import { useCurrentUser } from "../helpers/currentUser";
import { fetchData } from "../actions/productActions";
import { getServerSession } from "next-auth";
export default async function Products() {
  const session = await getServerSession();
  console.log("session hhhh");
  console.log(session);

  //const { token } = useCurrentUser();
  // const [products, setProduct] = useState([]);
  const data = await fetchData("");

  //   useEffect(() => {
  //     async function result() {
  //       return await fetchData();
  //     }
  //     const { data } = result();
  //     setProduct(data);
  //   }, [token]);

  return (
    <div>
      {data?.map((product) => (
        <div key={product.id}>{product.price}</div>
      ))}
    </div>
  );
}
