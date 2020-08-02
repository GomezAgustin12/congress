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
  const { members, loading } = useSelector((state) => state.members);
  const history = useHistory();
  const [showMembers, setShowMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchMembers, setSearchMembers] = useState([]);

  useEffect(() => {
    try {
      dispatch(fetchMembersRequest());
      fetchMembers().then((payload) => {
        const dataMembers = payload.results[0].members;
        dispatch(fetchMembersSuccess(dataMembers));
        // const membersParties = dataMembers.map((member) => member.party);
        // const uniqueParties = [...new Set(membersParties)];
        // console.log(uniqueParties);
      });
    } catch (error) {
      console.error(error);
      dispatch(fetchMembersFailure());
    }
  }, []);

  useEffect(() => {
    const elements = pagination(searchMembers, 7, currentPage);
    if (searchMembers.length) setShowMembers(elements);
  }, [currentPage]);

  useEffect(() => {
    setSearchMembers(members);
    const elements = pagination(members, 7, currentPage);
    setShowMembers(elements);
  }, [members]);

  const pagination = (array, elements, page = 0) => {
    const firstElement = elements * page;
    const lastElement = elements + elements * page;
    const pageElements = array.slice(firstElement, lastElement);
    return pageElements;
  };

  const onChange = async ({ target }) => {
    const searchElements = members.filter((member) => {
      const keys = Object.keys(member);
      const aux = keys.filter((key) => member[key]);
      const aux3 = aux.filter((aux2) =>
        String(member[aux2]).includes(target.value)
      );
      if (aux3.length) {
        return member;
      }
    });
    setSearchMembers(searchElements);
    const elements = pagination(searchElements, 7, currentPage);
    setShowMembers(elements);
  };

  const onClick = (id) => {
    history.push(`/id/${id}`);
  };

  return (
    <>
      {loading && <LinearProgress color='secondary' />}
      <Container>
        <TextField
          variant='outlined'
          margin='normal'
          label='Search'
          autoFocus
          onChange={onChange}
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
          {currentPage !== 0 && (
            <IconButton onClick={() => setCurrentPage(currentPage - 1)}>
              <ArrowBackIosIcon />
            </IconButton>
          )}
          {currentPage < Math.ceil(searchMembers.length / 7) - 1 && (
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
