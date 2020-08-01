import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./style.scss";
import { useHistory } from "react-router-dom";

const Navbar = ({ title, view }) => {
  const history = useHistory();

  const backButton = () => {
    history.push("/");
  };

  return (
    <div>
      <AppBar position='static' className='root'>
        <Toolbar>
          {view == "detailed" && (
            <IconButton
              onClick={() => backButton()}
              edge='start'
              color='inherit'
              aria-label='menu'
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant='h6' className='title'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
