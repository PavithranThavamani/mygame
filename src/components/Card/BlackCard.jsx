import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  rgbToHex,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

import LocationCityIcon from "@material-ui/icons/LocationCity";
import FlagIcon from "@material-ui/icons/Flag";

import useStyle from "./displaystyle";

function BlackCards({
  cardid,
  type,
  setCorrectAnswered,
  setWrongAnswered,
  setUnanswered,
  unanswered,
}) {
  const [correct, setCorrect] = useState(0);

  const [button, setButton] = useState(false);

  const classes = useStyle();

  const leftColorCompareHandler = () => {
    let getColorArray = localStorage.getItem("colorArray").split(",");

    let greenCardColor = document.getElementById(`greenCard${cardid + 1}`);
    let redCardColor = document.getElementById(`redCard${cardid + 1}`);

    let style = getComputedStyle(greenCardColor);
    let avatar1Color = style["backgroundColor"];
    let hex = rgbToHex(avatar1Color);
    console.log(hex);

    let colorState = 0;
    if (hex === "#ff0000") {
      colorState = 1;
    } else {
      colorState = 0;
    }
    setButton(true);
    if (colorState == getColorArray[cardid]) {
      greenCardColor.style.backgroundColor = "#00c853";
      redCardColor.style.backgroundColor = "#00c853";
      document.getElementById(`blackCard${cardid + 1}`).style.backgroundColor =
        "#00c853";
      setCorrect(1);
      console.log("FEFW");
      setCorrectAnswered((arr) => [...arr, 1]);
      unanswered.shift();
      setUnanswered(unanswered);
    } else {
      greenCardColor.style.backgroundColor = "#ff0000";
      redCardColor.style.backgroundColor = "#ff0000";
      document.getElementById(`blackCard${cardid + 1}`).style.backgroundColor =
        "#ff0000";
      setCorrect(2);
      console.log("wer");
      setWrongAnswered((arr) => [...arr, 1]);
      unanswered.shift();
      setUnanswered(unanswered);
    }
  };

  const rightColorCompareHandler = () => {
    let getColorArray = localStorage.getItem("colorArray").split(",");

    // console.log(getColorArray);
    let redCardColor = document.getElementById(`redCard${cardid + 1}`);
    let greenCardColor = document.getElementById(`greenCard${cardid + 1}`);

    let style = getComputedStyle(redCardColor);
    let avatar1Color = style["backgroundColor"];

    let hex = rgbToHex(avatar1Color);
    console.log(hex);
    let colorState = 0;
    if (hex === "#ff0000") {
      colorState = 1;
    } else {
      colorState = 0;
    }
    // console.log(redCardButton);
    setButton(true);
    if (colorState == getColorArray[cardid]) {
      // console.log("Red");
      redCardColor.style.backgroundColor = "#ff0000";
      greenCardColor.style.backgroundColor = "#ff0000";
      document.getElementById(`blackCard${cardid + 1}`).style.backgroundColor =
        "#ff0000";
      setCorrect(1);
      setCorrectAnswered((arr) => [...arr, 1]);

      unanswered.shift();
      setUnanswered(unanswered);
    } else {
      redCardColor.style.backgroundColor = "#00c853";
      greenCardColor.style.backgroundColor = "#00c853";
      document.getElementById(`blackCard${cardid + 1}`).style.backgroundColor =
        "#00c853";
      setCorrect(2);
      setWrongAnswered((arr) => [...arr, 1]);
      unanswered.shift();
      setUnanswered(unanswered);
    }
  };

  // const colorCompareHandler = () => {
  //   let getColorArray = localStorage.getItem("colorArray").split(",");

  //   // console.log(getColorArray);
  //   let redCardColor = document.getElementById(`redCard${cardid + 1}`);
  //   let greenCardColor = document.getElementById(`greenCard${cardid + 1}`);

  //   let style = getComputedStyle(redCardColor);
  //   let avatar1Color = style["backgroundColor"];

  //   let hex = rgbToHex(avatar1Color);
  //   console.log(hex);
  //   let colorState = 0;
  //   if (hex === "#ff0000") {
  //     colorState = 1;
  //   } else {
  //     colorState = 0;
  //   }
  //   // console.log(redCardButton);
  //   setButton(true);
  //   if (colorState == getColorArray[cardid]) {
  //     // console.log("Red");
  //     redCardColor.style.backgroundColor = "#ff0000";
  //     greenCardColor.style.backgroundColor = "#ff0000";
  //     document.getElementById(`blackCard${cardid + 1}`).style.backgroundColor =
  //       "#ff0000";
  //     setCorrect(1);
  //     setCorrectAnswered((arr) => [...arr, 1]);

  //     unanswered.shift();
  //     setUnanswered(unanswered);
  //   } else {
  //     redCardColor.style.backgroundColor = "#00c853";
  //     greenCardColor.style.backgroundColor = "#00c853";
  //     document.getElementById(`blackCard${cardid + 1}`).style.backgroundColor =
  //       "#00c853";
  //     setCorrect(2);
  //     setWrongAnswered((arr) => [...arr, 1]);
  //     unanswered.shift();
  //     setUnanswered(unanswered);
  //   }
  // };

  useEffect(() => {}, [correct]);

  return (
    <Card id={`blackCard${cardid + 1}`} className={classes.blackCard1}>
      <CardContent className={classes.content}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            className={classes.avatarColor1}
            id={`greenCard${cardid + 1}`}
          >
            <Button
              disabled={button}
              id={`greenCardButton${cardid + 1}`}
              // onClick={colorCompareHandler}
              onClick={leftColorCompareHandler}
            >
              {" "}
            </Button>
          </Avatar>
          <Avatar className={classes.avatarColor2} id={`redCard${cardid + 1}`}>
            <Button
              disabled={button}
              id={`redCardButton${cardid + 1}`}
              // onClick={colorCompareHandler}
              onClick={rightColorCompareHandler}
            >
              {correct === 1 ? <CheckIcon style={{ color: "white" }} /> : ""}
              {correct === 2 ? <ClearIcon style={{ color: "white" }} /> : ""}
            </Button>
          </Avatar>
        </div>
        <div>
          <Avatar className={classes.avatarBlack} style={{ color: "black" }}>
            <div>
              {type.type === "city" ? (
                <LocationCityIcon fontSize="large" />
              ) : (
                <FlagIcon fontSize="large" />
              )}
            </div>
          </Avatar>
        </div>
        <Typography className={classes.name} variant="h6">
          {type.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BlackCards;
