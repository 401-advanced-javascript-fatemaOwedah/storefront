import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
export default function Header() {

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h7" >
          OUR STORE
        </Typography>
      </Toolbar>
    </AppBar>
  );
}