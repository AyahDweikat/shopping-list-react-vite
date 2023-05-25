/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./Components/Header/Header.jsx";
import ListProducts from "./Components/ListProducts/ListProducts.jsx";
import theme from "./Components/theme.jsx";
import fetchData from "./Components/ApiUtils.js";
import { GlobalContext } from "./Components/contextForCategory.jsx";


export const categoryArr = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];


function App() {
  const [cart, setCart] = useState([]);
  const [chosenCategory, setChosenCategory] = useState(categoryArr[0]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (chosenCategory) {
      fetchData(chosenCategory).then((response) => setProducts(response));
    }
  }, [chosenCategory]);

  return (
    <GlobalContext.Provider value ={{categoryArr}}>
    <div>
      <ThemeProvider theme={theme}>
        <Header
          cart={cart}
          setCart={setCart}
          chosenCategory={chosenCategory}
          setChosenCategory={setChosenCategory}
        />
        <ListProducts
        products={products}
          cart={cart}
          setCart={setCart}
          chosenCategory={chosenCategory}
        />
      </ThemeProvider>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
