import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => (
  <AppBar position='static' className='root'>
    <Toolbar>
      <Typography variant='h6' className='title'>
        APP NAME
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
