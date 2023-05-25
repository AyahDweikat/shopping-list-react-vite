/* eslint-disable react/prop-types */

import { Alert, Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Modal from "@mui/material/Modal";
import ModalForm from "../ModalForm/ModalForm.jsx";

function Cart({ cart, setCart }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const totalPrice =
    cart.length && cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <Box
      sx={{
        backgroundColor: "info.light",
        p: "0px",
        m: "auto",
        minHeight: "100vh",
        height: "fit-content",
      }}
    >
      <Box sx={{textAlign:"center", my:"20px"}}>
        <Button variant="outlined" onClick={handleOpen}>Checkout Form</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <ModalForm onhHandleClose={handleClose} />
          </Box>
        </Modal>
      </Box>
      <Box
        sx={{
          width: "80vw",
          maxWidth: "560px",
        }}
      >
        {!cart.length ? (
          <Alert severity="warning">Nothing in the Cart</Alert>
        ) : (
          <Box>
            <Alert severity="success">Total $ {totalPrice}</Alert>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                flexWrap: "wrap",
                mt: "20px",
              }}
            >
              {cart.map((item) => {
                return (
                  <Box
                    key={item.id}
                    sx={{
                      borderRadius: "4px",
                      p: "10px",
                      backgroundColor: "secondary.main",
                      width: "110px",
                      height: "195px",
                    }}
                  >
                    <Box sx={{ width: "110px", height: "170px" }}>
                      <CardMedia
                        sx={{ width: "100%", height: "100%" }}
                        image={item.image}
                        alt={item.title}
                      />
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        sx={{
                          p: "0",
                          ml: "7px",
                          pt: "7px",
                          color: "info.dark",
                        }}
                      >
                        ${item.price}
                      </Typography>
                      <Button
                        sx={{ alignItems: "flex-end", pt: "5px" }}
                        onClick={() =>
                          setCart(cart.filter((prod) => prod.id !== item.id))
                        }
                      >
                        <ShoppingBagIcon
                          sx={{
                            color: "info.dark",
                            fontSize: "0.8",
                            mr: "0px",
                            width: "24px",
                          }}
                        />
                      </Button>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Cart;
