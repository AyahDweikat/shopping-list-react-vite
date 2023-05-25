/* eslint-disable react/prop-types */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Badge, Drawer } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "../Cart/Cart.jsx";
import { GlobalContext } from "../contextForCategory.jsx";


function ResponsiveAppBar({ setChosenCategory, chosenCategory, cart, setCart}) {
  const {categoryArr} = React.useContext(GlobalContext);
  let itemCountInCart = cart.length;
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = (event, open) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const [anchorElNav, setAnchorElNav] = React.useState("");
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "secondary" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {categoryArr.map((page) => (
                <MenuItem
                  selected={page == chosenCategory}
                  onClick={() => {
                    setChosenCategory(page);
                    handleCloseNavMenu();
                  }}
                  key={page}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {categoryArr.map((page) => (
              <Button
                selected={page == chosenCategory}
                key={page}
                onClick={() => {
                  setChosenCategory(page);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Cart">
              <Badge
                showZero
                badgeContent={itemCountInCart}
                sx={{ alignSelf: "flex-end", mt: "15px", mr: "20px" }}
              >
                <IconButton
                  onClick={(event)=> toggleDrawer(event, true)}
                sx={{ p: 0 }}
              >
                <AddShoppingCartIcon sx={{color:"white"}} />
              </IconButton>
              </Badge>
            </Tooltip>
            <Drawer anchor={"right"} open={isDrawerOpen} onClose={(event) => toggleDrawer(event, false)}>
                <Cart cart={cart} setCart={setCart} sx={{ width: "50%" }} />
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
