import * as React from "react";
import { useContext } from "react";
import { Context } from "./Context";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart } = useContext(Context);

  const [firstName, setFirstName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [city, setCity] = React.useState("");
  const [error, setError] = React.useState(false);

  let totalPrice = cart.map((c) => c.quantity * c.price);

  const navigate = useNavigate()

  const handleNavigate = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      address === "" ||
      phone === "" ||
      pincode === "" ||
      city === ""
    ) {
      setError(true);
    } else {
      navigate("/orderplaced");
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="full-checkout-page"
      >
        <div className="checkout-box">
          <h1 style={{marginTop:"10px"}}>Billing Details</h1>
          <div className="bill-details">
            <TextField
              onChange={(e) => {
                setFirstName(e.target.value), setError(false);
              }}
              error={error}
              helperText={error && "First Name required"}
              required
              id="outlined-required"
              label="First Name"
              fullWidth={true}
              className="textfield"
              //   defaultValue="First Name"
            />
            <TextField
              id="outlined-required"
              label="Last Name"
              className="textfield"


              //   defaultValue="Last Name"
            />
            <TextField
              onChange={(e) => {
                setAddress(e.target.value), setError(false);
              }}
              error={error}
              helperText={error && "Address required"}
              required
              id="outlined-required"
              label="Address"
              className="textfield"

              //   defaultValue="Last Name"
            />
            <TextField
              onChange={(e) => {
                setPhone(e.target.value), setError(false);
              }}
              error={error}
              helperText={error && "Phone number required"}
              required
              id="outlined-required"
              label="Phone"
              className="textfield"

              //   defaultValue="Last Name"
            />
            <TextField
              id="outlined-required"
              label="Email"
              className="textfield"

              //   defaultValue="Last Name"
            />
            <TextField
              onChange={(e) => {
                setPincode(e.target.value), setError(false);
              }}
              error={error}
              helperText={error && "Pincode required"}
              required
              id="outlined-required"
              label="Pincode"
              className="textfield"

              //   defaultValue="Last Name"
            />
            <TextField
              onChange={(e) => {
                setCity(e.target.value), setError(false);
              }}
              error={error}
              helperText={error && "Town/City required"}
              required
              id="outlined-required"
              label="Town/City"
              className="textfield"

              //   defaultValue="Last Name"
            />
            <TextField
              id="outlined-required"
              label="State"
              className="textfield"

              //   defaultValue="Last Name"
            />
          </div>
        </div>

        <table>
          <tr>
            <th>Product Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cart.map((c) => (
            <tr>
              <td>
                {c.title} ({c.brand})
              </td>
              <td>{c.quantity}</td>
              <td>${c.price}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th></th>
            <th>
              $
              {totalPrice.length > 0
                ? totalPrice.reduce((a, b) => a + b)
                : "0.00"}
            </th>
          </tr>
        </table>
      </Box>
      <div className="place-order-btn">
        {/* <Link to="/orderplaced"> */}
        <Button variant="contained" onClick={handleNavigate}>
          Place Order
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
}
