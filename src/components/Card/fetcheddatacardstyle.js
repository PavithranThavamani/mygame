import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card1: {
    backgroundColor: "#d5d5d5",
    marginRight: "15px",
    width: "110px",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
  },
  avatar: {
    // paddingTop: "10px",
    marginTop: "10px",
    width: "70px",
    height: "70px",
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    alignSelf: "center",
  },

  typo1: {
    marginTop: "10px",
    color: "white",
    textAlign: "center",
    fontSize: "16px",
  },

  red: {
    backgroundColor: "red",
  },

  green: {
    backgroundColor: "green",
  },
});
