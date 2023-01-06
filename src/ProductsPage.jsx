import React, { useContext } from "react";
import { Context } from "./Context";
import { Link } from "react-router-dom";
// import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function ProductsPage() {
  const { products, filterItem } = useContext(Context);
  console.log(products);
  return (
    <div>
      {filterItem.length > 0 ? (
        <div className="product-cards-page">
          {filterItem.map((f) => (
            <Card sx={{ width: 285 }} key={f.id} className="product-cards">
              <Link to={`/product/${f.id}`}>
                <CardActionArea>
                  <div className="prod-img">
                    <CardMedia
                      component="img"
                      height="200"
                      image={f.images[0]}
                      alt="products"
                    />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <h3>{f.brand}</h3>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <p>
                        {f.title} - ${f.price}
                      </p>
                      <h4>⭐{f.rating}</h4>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              {/* <CardActions>
                <Button size="small" color="primary">
                  Favorites
                  have to put Favorite icon here!
            import FavoriteIcon from '@mui/icons-material/Favorite';
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
                </Button>
              </CardActions> */}
            </Card>
          ))}
        </div>
      ) : (
        <div className="product-cards-page">
          {products.map((p) => (
            <Card sx={{ width: 285 }} key={p.id} className="product-cards">
              <Link to={`/product/${p.id}`}>
                <CardActionArea>
                  <div className="prod-img">
                    <CardMedia
                      component="img"
                      height="200"
                      image={p.images[0]}
                      alt="products"
                    />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <h3>{p.brand}</h3>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <p>
                        {p.title} - ${p.price}
                      </p>
                      <h4>⭐{p.rating}</h4>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              {/* <CardActions> */}
                {/* <Button size="small" color="primary"> */}
                  {/* Favorites */}
                  {/* have to put Favorite icon here!
              import FavoriteIcon from '@mui/icons-material/Favorite';
              <IconButton aria-label="add to favorites">
              <FavoriteIcon />
              </IconButton> */}
                {/* </Button> */}
              {/* </CardActions> */}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
