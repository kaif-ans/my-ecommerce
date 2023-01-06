import React, { useContext } from "react";
import { Context } from "./Context";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { products, cart, handleCart, addQuantity, subtractQuantity } =
    useContext(Context);

  console.log(cart);
  console.log(cart.length);

  let totalPrice = cart.map((c) => c.quantity * c.price);
  console.log(totalPrice);

  const navigate = useNavigate();

  function handleNavigate(e) {
    if (localStorage.getItem("token")) {
      navigate("/checkout");
    } else {
      alert("Please login first");
      navigate("/login");
    }
  }

  return (
    <div className="cart-page">
      <h1 className="shopping-cart">Shopping Cart</h1>
      <hr />
      {cart.length < 1 && (
        <div className="no-items-text">You have no items in your cart.</div>
      )}
      {cart.map((c) => (
        <div className="cart-products-details" key={c.id}>
          <div style={{display : "flex",flexWrap:"wrap", gap : "15px"}}>
            <div className="cart-img-div">
              <img src={c.images[0]} alt="product" className="cart-imgs" />
            </div>
            <div className="cart-prod-name-btn">
              <p>
                {c.title} ({c.brand})
              </p>
              <Box sx={{ "& button": { m: 1 } }}>
                {/* <div> */}
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleCart(c.id)}
                >
                  Remove from Cart
                </Button>
                <button
                  className="add-sub-btn"
                  onClick={() => addQuantity(c.id)}
                >
                  +
                </button>
                Qty : {c.quantity}
                <button
                  className="add-sub-btn"
                  onClick={() => subtractQuantity(c.id)}
                >
                  -
                </button>
                {/* </div> */}
              </Box>
            </div>
          </div>
          <div className="cart-price">${c.price}</div>
        </div>
      ))}
      <hr className="down-hr" />
      {/* <div className="total"> */}
      <p className="total">
        Subtotal ({cart.length} items): $
        {totalPrice.length > 0 ? totalPrice.reduce((a, b) => a + b) : "0.00"}
      </p>
      {/* </div> */}
      <div className="checkout-btn">
        {totalPrice.length > 0 && (
          <Button variant="contained" size="medium" onClick={handleNavigate}>
            Proceed to Checkout
          </Button>
        )}
      </div>
    </div>
  );
}

export default Cart;
