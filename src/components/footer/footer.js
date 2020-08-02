import React from "react";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./style.scss";

const Footer = () => (
  <footer>
    <div>
      <p>Copyright © 2020 Agustin Gomez</p>
    </div>
    <div>
      <IconButton
        href='https://github.com/GomezAgustin12/congress'
        target='_blank'
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        href='https://www.linkedin.com/in/agustin-gomez-521028132/'
        target='_blank'
      >
        <LinkedInIcon />
      </IconButton>
    </div>
  </footer>
);

export default Footer;
