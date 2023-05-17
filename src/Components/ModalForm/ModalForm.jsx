/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "100%",
  boxSizing: "border-box",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  gap: "25px",
  flexDirection: "column",
};

function ModalForm({ onhHandleClose }) {
  return (
    <Box sx={style}>
      <Typography sx={{color:"info.dark"}}>Checkout Form</Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        color="info"
        focused
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        color="info"
        focused
      />
      <Button
        variant="outlined"
        color="info"
        onClick={onhHandleClose}
        sx={{ width: "80px", alignSelf: "center" }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default ModalForm;
