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
import "./style.scss";
import { BackButton } from "../index";

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
    <Container>
      <BackButton />
      <div className='table'>
        {keys.map((key) => (
          <div className='tableElement'>
            <div className='elementLabel'>{key}</div>
            <div>{String(detailed.member[key])}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Detailed;
