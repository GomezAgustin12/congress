import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Header = () => (
  <AppBar position='static' className='root'>
    <Toolbar>
      <Button href='/' color='inherit'>
        <Typography variant='h6' className='title'>
          CONGRESS APP
        </Typography>
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
