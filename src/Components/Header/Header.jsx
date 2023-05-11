/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./header.module.css";
import {
  Box,
  Button,
  Icon,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "./../Cart/Cart";

function Header({ categoryArr, setChosenCategory, cart, setCart }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Categories</h2>
      <List
        sx={{
          width: "70%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          color: "error.main",
        }}
      >
        {categoryArr.map((category) => (
          <ListItem key={category}>
            <Button
              sx={{
                borderBottom: 2,
                textAlign: "center",
                color: "error.main",
                borderRadius: 0,
                px: "0px",
              }}
              onClick={() => setChosenCategory(category)}
            >
              {category}
            </Button>
          </ListItem>
        ))}
      </List>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          color: "common.black",
          bgColor: "#9e9e9e",
          borderRadius: 2,
          my: "0px",
        }}
      >
        <AddShoppingCartIcon sx={{ bgColor: "#9e9e9e" }} />
      </IconButton>
      <Cart
        cart={cart}
        setCart={setCart}
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
      />
    </Box>
  );
}

export default Header;
