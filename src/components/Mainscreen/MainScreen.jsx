import React, { useEffect, useState } from "react";

import { Avatar, Box, Button, Typography } from "@material-ui/core";

import useStyles from "./mainscreenstyle.js";
import axios from "axios";
import AllCards from "../Card/AllCards";
import FetchedDataCard from "../Card/FetchedDataCard";

import MyTimer from "./MyTimer";
import BlackCards from "../Card/BlackCard";

import { Bar } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Mainscreen = () => {
  const [buttonText, setButtonText] = useState("PLAY");
  const [count, setCount] = useState(0);
  const [fetchData, setFetchData] = useState();
  const [displayTimer, setDisplayTimer] = useState("none");
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(3);
  const [dummy, setDummy] = useState(0);
  const [dataSet, setDataSet] = useState(0);
  const [timerVisiblity, setTimerVisiblity] = useState(0);
  const [correctAnswered, setCorrectAnswered] = useState([]);
  const [wrongAnswered, setWrongAnswered] = useState([]);
  // const [unanswered, setUnanswered] = useState([
  //   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  // ]);

  const [unanswered, setUnanswered] = useState([]);

  // let dataCardCountArray = [];

  // console.log(unanswered);

  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [c, setc] = useState(15);

  // setUnanswered(dataCardCount);

  const [chartData, setChartData] = useState({
    labels: ["Correct answers", "Wrong answers", "unanswered"],
    datasets: [
      {
        label: "score",
        // data;array,
        data: [a, b, c],
        backgroundColor: "blue",
        barThickness: 30,
      },
    ],
  });

  const classes = useStyles();

  const time = new Date();
  console.log(`time - ${time}, ${time.getSeconds() + 3}`);
  // time.setSeconds(3);

  const fetchHandler = async () => {
    // const response = await axios.get("http://localhost:3001/cardData");

    setFetchData([
      {
        type: "city",
        name: "chennai",
        id: "1",
      },
      {
        type: "country",
        name: "Australia",
        id: "2",
      },
      {
        type: "city",
        name: "London",
        id: "3",
      },
      {
        type: "country",
        name: "France",
        id: "4",
      },
      {
        type: "country",
        name: "USA",
        id: "5",
      },
      {
        type: "city",
        name: "Melbourne",
        id: "6",
      },
      {
        type: "city",
        name: "Toronto",
        id: "7",
      },
      {
        type: "country",
        name: "Sweden",
        id: "8",
      },
      {
        type: "city",
        name: "Berlin",
        id: "9",
      },
      {
        type: "country",
        name: "UAE",
        id: "10",
      },
      {
        type: "city",
        name: "Paris",
        id: "11",
      },
      {
        type: "country",
        name: "UK",
        id: "12",
      },
      {
        type: "city",
        name: "Bengaluru",
        id: "13",
      },
      {
        type: "country",
        name: "Egypt",
        id: "14",
      },
      {
        type: "city",
        name: "Amsterdam",
        id: "15",
      },
      {
        type: "city",
        name: "Barcelona",
        id: "16",
      },
      {
        type: "city",
        name: "Hyderabd",
        id: "17",
      },
      {
        type: "country",
        name: "Italy",
        id: "18",
      },
      {
        type: "country",
        name: "Malayasia",
        id: "19",
      },
      {
        type: "country",
        name: "Indonesia",
        id: "20",
      },
      {
        type: "city",
        name: "Honkong",
        id: "21",
      },
      {
        type: "city",
        name: "Zurich",
        id: "22",
      },
      {
        type: "country",
        name: "Pakistan",
        id: "23",
      },
      {
        type: "country",
        name: "South Africa",
        id: "24",
      },
      {
        type: "city",
        name: "Frankfurt",
        id: "25",
      },
      {
        type: "city",
        name: "Colombo",
        id: "26",
      },
      {
        type: "country",
        name: "Abhu Dhabi",
        id: "27",
      },
    ]);
    setCorrectAnswered([]);
    setWrongAnswered([]);
    // setUnanswered([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    // setUnanswered(dataCardCount);
    setUnansweredArray();
    console.log(unanswered);

    changeCount();
    getArray();
  };

  useEffect(() => {
    setUnansweredArray();
  }, []);

  let dataCardCount = 15;

  const setUnansweredArray = () => {
    let dataCardCountArray = [];
    // let dataCardCount = 15;
    while (dataCardCount > 0) {
      dataCardCountArray.push(1);
      dataCardCount -= 1;
    }
    setUnanswered(dataCardCountArray);
    console.log(dataCardCountArray);
  };

  const getArray = () => {
    // localStorage.removeItem("array");
    // localStorage.removeItem("colorArray");
    let array = [];
    let colorArray = [];
    if (dummy === 0) {
      for (let i = 0; i < 15; i++) {
        let flag = true;

        do {
          let newData = Math.floor(Math.random() * 27);

          if (!array.includes(newData)) {
            array.push(newData);
            flag = false;
          }
        } while (flag);
        colorArray.push(Math.floor(Math.random() * 2));
      }

      setDummy(1);

      sessionStorage.setItem("hello", "hello");
      localStorage.setItem("array", array);
      localStorage.setItem("colorArray", colorArray);
    }
  };

  const changeCount = () => {
    if (count === 0) {
      // localStorage.clear();
      // getArray();
      setCount(1);
      setButtonText("Stop");
      setDisplayTimer("block");
      setIsActive(true);
    } else {
      // localStorage.clear();
      // getArray();
      setIsActive(false);
      setCount(0);
      setButtonText("Play");
      setDisplayTimer("none");
      setTimerVisiblity(0);
      setDataSet(0);
      // fetchAgain();
    }
  };

  let i = 0;

  let dataCount = 0;

  useEffect(() => {
    seta(correctAnswered.length);
    setb(wrongAnswered.length);
    setc(unanswered.length);
  }, [correctAnswered, wrongAnswered, unanswered]);
  useEffect(() => {
    console.log("CHECK", a, b, c);
    setChartData({
      labels: ["Correct answers", "Wrong answers", "unanswered"],
      datasets: [
        {
          label: "score",
          data: [a, b, c],
          // data: dataArray,
          backgroundColor: "blue",
          barThickness: 30,
        },
      ],
    });
  }, [a, b, c]);
  useEffect(() => {
    console.log(a, b, c, chartData);
  }, [chartData]);

  return (
    <Box className={classes.box}>
      <div className={classes.box1}>
        {!count ? (
          <AllCards dataCardCount={dataCardCount} />
        ) : (
          // <AllCards unanswered={unanswered} />
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
            }}
          >
            {fetchData &&
              fetchData.map((card, index) => {
                let newArray = localStorage.getItem("array").split(",");
                let newColorArray = localStorage
                  .getItem("colorArray")
                  .split(",");
                if (dataCount < 15) {
                  const getData = fetchData[parseInt(newArray[i])];

                  let j = i;
                  i = i + 1;
                  dataCount = dataCount + 1;

                  return (
                    <li key={card.id}>
                      {dataSet === 0 ? (
                        <FetchedDataCard
                          type={getData}
                          colorIndex={parseInt(newColorArray[j])}
                        />
                      ) : (
                        <BlackCards
                          cardid={index}
                          type={getData}
                          setCorrectAnswered={setCorrectAnswered}
                          setWrongAnswered={setWrongAnswered}
                          setUnanswered={setUnanswered}
                          correctAnswered={correctAnswered}
                          wrongAnswered={wrongAnswered}
                          unanswered={unanswered}
                        />
                      )}
                    </li>
                  );
                }
              })}
          </ul>
        )}
      </div>
      <div className={classes.box2}>
        <Button
          className={classes.playButton}
          variant="contained"
          color="primary"
          onClick={fetchHandler}
        >
          {buttonText}
        </Button>
        {timerVisiblity === 0 ? (
          <div id="displayTimerContent" style={{ display: displayTimer }}>
            <Avatar id="timer" className={classes.timer}>
              <Typography variant="h1" className={classes.typo2}>
                {{ isActive } && (
                  <MyTimer
                    expiryTimestamp={time}
                    count={count}
                    setDisplayTimer={setDisplayTimer}
                    setDataSet={setDataSet}
                    setTimerVisiblity={setTimerVisiblity}
                    // newArray = {newArray}
                  />
                )}
                {seconds}
              </Typography>
            </Avatar>
          </div>
        ) : (
          <div>
            <Bar
              data={chartData}
              height="500px"
              width="350px"
              // redraw
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },

                scales: {
                  y: {
                    max: 15,
                    min: 0,
                    ticks: {
                      stepSize: 1,
                    },
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </Box>
  );
};

export default Mainscreen;
