/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./Components/Header/Header.jsx";
import ListProducts from "./Components/ListProducts/ListProducts.jsx";
import { categoryArr } from "./Components/utils.jsx";
import theme from "./Components/theme.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [chosenCategory, setChosenCategory] = useState(categoryArr[0]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header
          cart={cart}
          setCart={setCart}
          chosenCategory={chosenCategory}
          setChosenCategory={setChosenCategory}
        />
        <ListProducts
          cart={cart}
          setCart={setCart}
          chosenCategory={chosenCategory}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
