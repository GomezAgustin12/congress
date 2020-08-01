import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchOneMemberFailure,
  fetchOneMemberSuccess,
  fetchOneMemberRequest,
} from "../../redux";
import { fetchOneMember } from "../../api";
import { LinearProgress } from "@material-ui/core";
import { Navbar } from "../index";

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
      <Navbar
        title={`${detailed.member["First Name"]} ${detailed.member["Middle Name"]} ${detailed.member["Last Name"]}`}
      />
      {keys.map((key) => {
        console.log(key);
        return (
          <p>
            {key}: {detailed.member[key]}
          </p>
        );
      })}
    </>
  );
};

export default Detailed;
