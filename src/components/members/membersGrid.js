import React, { useState, useEffect } from "react";
import { fetchMembers } from "../../api";
import {
  Grid,
  LinearProgress,
  TextField,
  IconButton,
  Container,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MemberCard from "./memberCard";
import {
  fetchMembersFailure,
  fetchMembersRequest,
  fetchMembersSuccess,
} from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style.scss";

const MembersGrid = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);
  const history = useHistory();
  const [showMembers, setShowMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    try {
      dispatch(fetchMembersRequest());
      fetchMembers().then((payload) => {
        const dataMembers = payload.results[0].members;
        dispatch(fetchMembersSuccess(dataMembers));
        const membersParties = dataMembers.map((member) => member.party);
        const uniqueParties = [...new Set(membersParties)];
        console.log(uniqueParties);
      });
    } catch (error) {
      console.error(error);
      dispatch(fetchMembersFailure());
    }
  }, []);

  useEffect(() => {
    const elements = pagination(members.members, 6, currentPage);
    setShowMembers(elements);
  }, [members, currentPage]);

  const pagination = (array, elements = 6, page = 0) => {
    const firstElement = elements * page;
    const lastElement = elements + elements * page;
    const pageElements = array.slice(firstElement, lastElement);
    return pageElements;
  };

  if (members.loading) {
    return <LinearProgress color='secondary' />;
  }

  const onClick = (id) => {
    history.push(`/id/${id}`);
  };

  return (
    <>
      <Container>
        <TextField
          variant='outlined'
          margin='normal'
          label='Search'
          autoFocus
        />
        <Grid>
          {showMembers.map((member) => {
            return (
              <MemberCard
                key={member.id}
                first_name={member.first_name}
                last_name={member.last_name}
                onClick={onClick}
                id={member.id}
              />
            );
          })}
        </Grid>
        <div className='paginationButtons'>
          {currentPage != 0 && (
            <IconButton onClick={() => setCurrentPage(currentPage - 1)}>
              <ArrowBackIosIcon />
            </IconButton>
          )}
          {currentPage < Math.ceil(members.members.length / 6) - 1 && (
            <IconButton
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </div>
      </Container>
    </>
  );
};

export default MembersGrid;
