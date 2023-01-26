import React, { useState } from "react";
import { useProductsContext } from "../context/products_context";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("hab");
  const { products } = useProductsContext();
  return (
    <div>
      <input
        type="text"
        aria-label="search"
        class="px2 py1"
        placeholder="🔍 Search product/s"
        // value=""
        style={{
          padding: "10px",
          width: "200px",
          fontSize: "20px",
          backgroundColor: "blueViolet",
          color: "black",
        }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {products
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return <div key={val.id}>{val.title} </div>;
        })}
    </div>
  );
};
export default Search;
