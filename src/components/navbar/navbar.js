import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./style.scss";

const Navbar = ({ title }) => {
  return (
    <div>
      <AppBar position='static' className='root'>
        <Toolbar>
          <Typography variant='h6' className='title'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
