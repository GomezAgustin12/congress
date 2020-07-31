import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./style.scss";

export default function ButtonAppBar() {
  return (
    <div>
      <AppBar position='static' className='root'>
        <Toolbar>
          <Typography variant='h6' className='title'>
            Members
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
