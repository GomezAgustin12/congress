import React, { useState, useEffect } from "react";
import { fetchMembers } from "../../api";
import {
  Grid,
  LinearProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import MemberCard from "./memberCard";
import {
  fetchMembersFailure,
  fetchMembersRequest,
  fetchMembersSuccess,
} from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const MembersGrid = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);
  console.log(members.members);
  const history = useHistory();
  // const [showMembers, setShowMembers] = useState([]);

  useEffect(() => {
    try {
      dispatch(fetchMembersRequest());
      fetchMembers().then((payload) => {
        dispatch(fetchMembersSuccess(payload.results[0].members));
      });
    } catch (error) {
      console.error(error);
      dispatch(fetchMembersFailure());
    }
  }, []);

  // const pagination = (elements = 7, page = 0) => {
  //   let aux = [];
  //   const first_element = 0 + elements * page;
  //   const last_element = elements + elements * page;
  //   for (let i = first_element; i < last_element; i++) {
  //     aux.push(members.members[i]);
  //   }
  //   setShowMembers(aux);
  // };

  if (members.loading) {
    return <LinearProgress color='secondary' />;
  }

  const onClick = (id) => {
    history.push(`/id/${id}`);
  };

  return (
    <>
      <TextField variant='outlined' margin='normal' label='Search' autoFocus />
      <FormControl variant='outlined' className='formControl' margin='normal'>
        <InputLabel id='demo-simple-select-outlined-label'>7</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
        >
          <MenuItem>7</MenuItem>
          <MenuItem>10</MenuItem>
          <MenuItem>15</MenuItem>
        </Select>
      </FormControl>
      <Grid>
        {members.members.map((member) => {
          return (
            <MemberCard
              first_name={member.first_name}
              last_name={member.last_name}
              onClick={onClick}
              id={member.id}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default MembersGrid;
