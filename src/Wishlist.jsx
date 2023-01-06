import React, { useContext } from "react";
import { Context } from "./Context";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Wishlist() {
  const { wishlist, handleCart, cart, deleteWishlist } = useContext(Context);
  console.log(wishlist);
  console.log(wishlist.length);

  return (
    <div className="full-wishlist-page">
      <h1 className="wishlist-page">Wishlist Page</h1>
      <hr className="wishlist-hr" />
      {wishlist.length < 1 && (
        <div className="no-items-text-wishlist">
          You have no items wishlisted.
        </div>
      )}
      <div className="wishlist-cards-div">
        {wishlist.map((c) => (
          <Card sx={{ Width: 300 }} className="wishlist-cards">
            <div className="wishlist-img-div">
              <CardMedia
                component="img"
                height="140"
                image={c.images[0]}
                alt="green iguana"
                className="wishlist-img"
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {c.brand}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {c.title} - ${c.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => handleCart(c.id)}
                variant="outlined"
                size="small"
                startIcon={<AddShoppingCartIcon />}
              >
                {cart.some((w) => w.id === c.id) ? "Remove" : "Add"}
              </Button>
              <Button
                onClick={() => deleteWishlist(c.id)}
                variant="outlined"
                size="small"
                startIcon={<FavoriteBorderIcon />}
              >
                Remove
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
