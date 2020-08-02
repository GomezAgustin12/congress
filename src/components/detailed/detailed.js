import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchOneMemberFailure,
  fetchOneMemberSuccess,
  fetchOneMemberRequest,
} from "../../redux";
import { fetchOneMember } from "../../api";
import { LinearProgress, Container } from "@material-ui/core";

const Detailed = () => {
  const { id } = useParams();
  const detailed = useSelector((state) => state.detailed);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchOneMemberRequest());
      fetchOneMember(id).then((res) => {
        dispatch(fetchOneMemberSuccess(res.results[0]));
      });
    } catch (error) {
      dispatch(fetchOneMemberFailure());
      console.error(error);
    }
  }, []);

  if (detailed.loading) {
    return <LinearProgress color='secondary' />;
  }

  const keys = Object.keys(detailed.member);
  return (
    <>
      <Container>
        {keys.map((key) => (
          <p>
            {key}: {detailed.member[key]}
          </p>
        ))}
      </Container>
    </>
  );
};

export default Detailed;
