import React from "react";
import { Card, CardContent, Avatar } from "@mui/material";

import useStyle from "./displaystyle";

const DisplayCard = () => {
  const classes = useStyle();

  return (
    <Card className={classes.card1}>
      <CardContent className={classes.content}>
        <Avatar className={classes.avatar}>.</Avatar>
      </CardContent>
    </Card>
  );
};

export default DisplayCard;
