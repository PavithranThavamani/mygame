import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  box: {
    transform: "scale(0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 10px",
  },

  box1: {
    width: "700px",
    height: "550px",
    border: "2px solid black",
    overflow: "auto",
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "40px",
  },

  box2: {
    width: "300px",
    height: "550px",
    border: "2px solid black",
    borderLeft: 0,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  playButton: {
    margin: "50px",
    padding: "5px 50px",
    backgroundColor: "#a9c4d9",
    color: "black",
    fontWeight: "700",

    "&:hover": {
      backgroundColor: "#a9c4d9",
    },
  },

  timer: {
    width: "230px",
    height: "230px",
    backgroundColor: "#a9c4d9",
    marginTop: "20px",
  },

  typo2: {
    fontSize: "150px",
  },

  // resultBarStyle: {
  //   height: "350px",
  //   // backgroundColor: "red",
  // },
}));
