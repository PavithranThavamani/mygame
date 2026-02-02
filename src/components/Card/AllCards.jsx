import React, { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";

import useStyle from "./allcardstyle";

const AllCards = ({ dataCardCount }) => {
  const [array, setArray] = useState([]);

  const classes = useStyle();

  console.log(dataCardCount);

  useEffect(() => {
    createArray();
  }, []);

  const createArray = () => {
    let array = [];
    while (dataCardCount > 0) {
      array.push(1);
      dataCardCount -= 1;
    }
    setArray(array);
  };

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        listStyle: "none",
      }}
    >
      {array.map((card, index) => {
        return (
          <li key={index} className={classes.card1}>
            {" "}
            <DisplayCard />{" "}
          </li>
        );
      })}
    </ul>
  );
};

export default AllCards;
