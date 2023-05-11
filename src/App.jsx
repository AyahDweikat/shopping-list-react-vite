/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./Components/Header/Header.jsx";
import ListProducts from "./Components/List/List.jsx";

const categoryArr = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

function App() {
  const [cart, setCart] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("");
  return (
    <div>
      <Header
        cart={cart}
        setCart={setCart}
        categoryArr={categoryArr}
        setChosenCategory={setChosenCategory}
      />
      <ListProducts
        cart={cart}
        setCart={setCart}
        chosenCategory={chosenCategory}
      />
    </div>
  );
}

export default App;
