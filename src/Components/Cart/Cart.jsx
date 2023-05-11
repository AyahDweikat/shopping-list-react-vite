/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Drawer } from '@mui/material'
import React from 'react'

function Cart({isOpen, toggleDrawer, cart, setCart}) {
  return (
    <Drawer
      anchor={"right"}
      open={isOpen}
      onClose={toggleDrawer(false)}
    >
      {/* {list(anchor)} */}
      <Box>
        <h1>cart </h1>
      </Box>
    </Drawer>
  )
}

export default Cart