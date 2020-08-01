import React from "react";
import { Card, CardHeader, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const MemberCard = ({ first_name, last_name, onClick, id }) => {
  const title = `${first_name} ${last_name}`;

  return (
    <>
      <Card className='root'>
        <CardHeader
          action={
            <IconButton onClick={() => onClick(id)} aria-label='settings'>
              <ArrowForwardIosIcon />
            </IconButton>
          }
          title={title}
        />
      </Card>
    </>
  );
};

export default MemberCard;
