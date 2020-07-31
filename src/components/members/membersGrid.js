import React, { useState, useEffect } from "react";
import { fetchMembers } from "../../api";
import { Grid } from "@material-ui/core";
import MemberCard from "./memberCard";
import {
  fetchMembersFailure,
  fetchMembersRequest,
  fetchMembersSuccess,
} from "../../redux";

const MembersGrid = () => {
  const [members, setMembers] = useState();

  useEffect(() => {
    fetchMembers().then((res) => {
      setMembers(res.results[0].members);
    });
  }, []);
  return (
    <>
      <Grid>
        <MemberCard />
      </Grid>
    </>
  );
};

export default MembersGrid;
