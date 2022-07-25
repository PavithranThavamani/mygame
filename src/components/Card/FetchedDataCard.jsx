import React from "react";
import { Card, Avatar, Typography } from "@material-ui/core";

import LocationCityIcon from "@material-ui/icons/LocationCity";
import FlagIcon from "@material-ui/icons/Flag";

import useStyle from "./fetcheddatacardstyle";

const FetchedDataCard = ({ type, colorIndex }) => {
  const classes = useStyle();

  let color = ["#00c853", "red"];
  // let randomColor = color[Math.floor(Math.random() * 2)];
  let randomColor = color[colorIndex];
  // console.log(randomColor);
  return (
    <div className={classes.box1}>
      <Card
        className={classes.card1}
        style={{
          backgroundColor: randomColor,
        }}
      >
        {/* {console.log(color)} */}
        <div className={classes.content}>
          <Avatar className={classes.avatar}>
            <div>
              {type.type === "city" ? (
                <LocationCityIcon fontSize="large" />
              ) : (
                <FlagIcon fontSize="large" />
              )}
            </div>
          </Avatar>
          <Typography className={classes.typo1} variant="h6">
            {type.name}
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default FetchedDataCard;
