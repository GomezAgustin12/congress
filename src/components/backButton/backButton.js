import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./style.scss";

const BackButton = () => {
  const history = useHistory();

  return (
    <ArrowBackIcon className='backButton' onClick={() => history.push("/")} />
  );
};

export default BackButton;
