import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "./Context";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HowerRating from "./Rating";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';

function ProductDetails() {
  const { id } = useParams();
  const { products, cart, handleCart, wishlist, handleWishlist } = useContext(Context);

  const p = products.find((p) => p.id == id);
  console.log(p);
  return (
    <div className="full-detail-div">
      <Card sx={{ maxWidth: "max-content" }}>
        <div className="product-detail">
          <div>
            <CardMedia
              component="img"
              height="200"
              image={p.images[0]}
              alt="products"
            />
          </div>
          <div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {p.title} - ${p.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>{p.description}</p>
                <HowerRating />
                <p>({p.stock})</p>
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={() => handleCart(p.id)}
                  size="small"
                  variant="outlined"
                >
                  {cart.some((c) => c.id === p.id)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </Button>
                <Button
                  onClick={() => handleWishlist(p.id)}
                  size="small"
                  variant="outlined"
                >
                  {wishlist.some((c) => c.id === p.id)
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </Button>
                  {/* <Button size="small" variant="outlined">
                    Add to Wishlist
                  </Button> */}
              </Stack>
            </CardActions>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductDetails;
