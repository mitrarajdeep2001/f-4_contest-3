import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../Store/Slices/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      const data = res.data;
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div className="card" key={index}>
          <div>
            <img src={product.image} alt="product_img" />
          </div>
          <h3 className="title">{product.title}</h3>
          <p className="description" style={{textTransform: "capitalize"}}>{product.description}</p>
          <p className="price">Rs.{product.price}</p>
          <button onClick={() => dispatch(add(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
