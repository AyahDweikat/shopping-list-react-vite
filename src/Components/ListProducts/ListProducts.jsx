/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";


import {
  Box,
  List,
  Button,
  Rating,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import fetchData from "../ApiUtils.js";

function ListProducts({ chosenCategory, cart, setCart }) {
  const [products, setProducts] = useState([]);
  function handleSelectProduct(product, id) {
    if (cart.includes(product)) setCart(cart.filter((item) => item.id !== id));
    else setCart([...cart, product]);
  }
  useEffect(() => {
    if (chosenCategory) {
      fetchData(chosenCategory).then((response) => setProducts(response));
    }
  }, [chosenCategory]);
  return (
    <Box
      id="shopping"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "info.light",
        py: "70px",
      }}
    >
      <List
        sx={{
          width: "90%",
          m: "auto",
          p: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {products?.map(product => (
          <Card key={product.id} sx={{ maxWidth: 345 }}>
            <Box sx={{ height: "180px", width: "130px", p: "8px", m: "auto" }}>
              <CardMedia
                sx={{ height: "100%", width: "100%" }}
                image={product.image}
                title={product.title}
              />
            </Box>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                sx={{
                  height: "20px",
                  textOverflow:"ellipsis",
                  fontSize: "14px",
                  textAlign: "left",
                  overflow: "hidden",
                  wordWrap: "break-word",
                }}
                component="div"
              >
                {product.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  height: "89px",
                  fontSize: "12px",
                  textTransform: "capitalize",
                  textAlign: "left",
                  overflow: "hidden",
                }}
                color="text.secondary"
              >
                {product.description}
              </Typography>
              <Rating
                name="half-rating-read"
                sx={{ pt: "10px" }}
                size="small"
                defaultValue={product.rating.rate}
                precision={0.1}
                readOnly
              />
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Typography
                sx={{ fontSize: "16px", color: "info.dark" }}
                size="small"
              >
                $ {product.price}
              </Typography>
              <Button onClick={() => handleSelectProduct(product, product.id)}>
                {cart.filter(cartItem=> cartItem.id == product.id).length ? (
                  <ShoppingCartIcon
                    sx={{
                      color: "primary.main",
                      fontSize: "0.8",
                      py: "2px",
                      px: "12px",
                      m: "0",
                    }}
                  />
                ) : (
                  <AddShoppingCartIcon
                    sx={{
                      color: "info.main",
                      fontSize: "0.8",
                      py: "1px",
                      px: "12px",
                      m: "0",
                      justifySelf: "flex-end",
                    }}
                  />
                )}
              </Button>
            </CardActions>
          </Card>
        ))}
      </List>
    </Box>
  );
}

export default ListProducts;
