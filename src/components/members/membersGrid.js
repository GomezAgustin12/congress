import React, { useState, useEffect } from "react";

import {
  Grid,
  LinearProgress,
  TextField,
  IconButton,
  Container,
  Switch,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MemberCard from "./memberCard";
import { fetchMembersRequest } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style.scss";
import FieldFilter from "./fieldFilter";

const MembersGrid = () => {
  const dispatch = useDispatch();
  const { members, loading } = useSelector((state) => state.members);
  const history = useHistory();
  const [showMembers, setShowMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchMembers, setSearchMembers] = useState([]);
  const [filterFlag, setFilterFlag] = useState(false);

  useEffect(() => {
    dispatch(fetchMembersRequest());
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

  const filterSwitch = () => {
    setFilterFlag(!filterFlag);
  };

  /**
   * @description
   * @name handleAdvanceSearch
   * @returns
   * @param {String} value User Input
   * @param {String} key Member obj atribute
   */
  const handleAdvanceSearch = (value, key) => {
    const searchElements = members.filter((member) =>
      String(member[key]).includes(value)
    );
    setSearchMembers(searchElements);
    const elements = pagination(searchElements, 7, currentPage);
    setShowMembers(elements);
  };

  const onChange = async ({ target }) => {
    const searchElements = members.filter((member) => {
      const keys = Object.keys(member);
      const nonEmptyKeys = keys.filter((key) => member[key]);

      const foundKeys = nonEmptyKeys.filter((key) =>
        String(member[key]).includes(target.value)
      );
      if (foundKeys.length) {
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
      <Container className='listContainer'>
        <h1>Member List</h1>

        <div className='filterArea'>
          <div>
            {filterFlag === false && (
              <TextField
                variant='outlined'
                margin='normal'
                label='Search'
                autoFocus
                onChange={onChange}
              />
            )}
            {filterFlag && <FieldFilter onChange={handleAdvanceSearch} />}
          </div>

          <Switch onChange={filterSwitch} className='switchButton' />
        </div>
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
