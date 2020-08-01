import React from "react";
import { Members, Navbar } from "../components";

const MembersView = () => {
  return (
    <>
      <Navbar title='Member List' />
      <Members />
    </>
  );
};

export default MembersView;
