/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./list.module.css";
import fetchData from "../utils.jsx";
import { Box, ListItem, List, Button } from "@mui/material";

function ListProducts({ chosenCategory, cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (chosenCategory) {
      fetchData(chosenCategory).then((response) => setProducts(response));
    }
  }, [chosenCategory]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
      className={styles.productsSection}
    >
      <h2>Products</h2>
      <List
        className={styles.products}
        sx={{
          width: "100%",
          m: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {products?.map((product, id) => (
          <ListItem
            key={id}
            sx={{
              listStyleType: "none",
              px: "8px",
              border: 1,
              borderColor: "error.main",
              borderRadius: "8px",
              width: "20%",
              my: "5px",
            }}
          >
            <div>
              <div className={styles.productImg}>
                <img src={product.image} alt={product.name} />
              </div>
              <h4>{product.title}</h4>
              <p>Price: {product.price} $</p>
              {/* <p>Category: {product.category}</p> */}
              {/* <p>Rate: {product.rating.rate}</p> */}
              <p>Count: {product.rating.count}</p>
              <Button onClick={() => setCart([...cart, product])}>
                AddToCart
              </Button>
            </div>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ListProducts;
