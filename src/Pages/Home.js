import React from "react";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div className="Home">
      <h2 className="heading">Welcome to the Redux Store</h2>
      <h3>Products</h3>
      <Products />
    </div>
  );
};

export default Home;
