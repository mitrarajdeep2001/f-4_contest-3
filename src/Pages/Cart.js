import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/Slices/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  return (
    <div className="Cart">
      <h2>My Shopping Cart</h2>
      {items.map((e, i) => (
        <div className="item-container" key={i}>
          <div>
            <img src={e.image} alt="product_img" />
          </div>
          <h3 className="title">{e.title}</h3>
          <p className="price">Rs.{e.price}</p>
          <button onClick={() => dispatch(remove(i))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
