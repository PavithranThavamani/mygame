import React, { useEffect } from "react";

import { useTimer } from "react-timer-hook";

function MyTimer({
  expiryTimestamp,
  count,
  setDisplayTimer,
  setDataSet,
  setTimerVisiblity,
}) {
  const { seconds, pause, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setDisplayTimer("none");

      arrayHandler();

      setDataSet(1);

      setTimerVisiblity(1);
    },
  });

  useEffect(() => {
    if (count === 0) pause();
    else {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 3);
      restart(time);
    }
  }, [count]);

  const arrayHandler = () => {
    let newArray = localStorage.getItem("array").split(",");
    let newColorArray = localStorage.getItem("colorArray").split(",");

    let length = newArray.length;

    while (length) {
      let randomValue = Math.floor(Math.random() * length);
      console.log(`random - ${randomValue}`);
      length -= 1;
      let temp1 = newArray[length];
      let temp2 = newColorArray[length];
      newArray[length] = newArray[randomValue];
      newColorArray[length] = newColorArray[randomValue];
      newArray[randomValue] = temp1;
      newColorArray[randomValue] = temp2;
    }
    localStorage.setItem("array", newArray);
    localStorage.setItem("colorArray", newColorArray);
  };

  return (
    <div>
      <p style={{ marginTop: "330px" }}>{seconds}</p>
    </div>
  );
}

export default MyTimer;
