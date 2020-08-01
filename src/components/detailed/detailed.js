import React from "react";
import { useSelector } from "react-redux";

const Detailed = () => {
  const member = useSelector((state) => state.detailed.member);
  const keys = Object.keys(member);
  return (
    <>
      {keys.map((key) => (
        <p>
          {key}: {member[key]}
        </p>
      ))}
    </>
  );
};

export default Detailed;
