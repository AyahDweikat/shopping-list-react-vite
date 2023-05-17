/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Button,
} from "@mui/material";

import BGImg from "./imgs/background.jpg";
import ResponsiveAppBar from "./ResponsiveAppBar.jsx";

function Header({ setChosenCategory, cart, setCart, chosenCategory }) {
  return (
    <Box>
      <Box sx={{display: "flex",justifyContent:"space-between" ,position:"fixed", top:'0', left:"0", backgroundColor: "secondary.dark", zIndex:"6", width: "100%" }}>
        <ResponsiveAppBar chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} cart={cart} setCart={setCart} />
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${BGImg})`,
          height:"100vh",
          position:"relative",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display:"flex", 
          justifyContent:"center",
          alignItems:"flex-end"
        }}>
          <Button href="#shopping" sx={{color: "secondary.main", position:"absolute", zIndex:"5", mb:"50px", backgroundColor:"info.dark", p:"8px"}}>Start Shopping Now</Button>
      </Box>
    </Box>
  );
}

export default Header;
