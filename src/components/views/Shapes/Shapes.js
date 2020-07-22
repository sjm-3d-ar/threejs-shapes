/* eslint-disable no-param-reassign */
import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
  },
});

const Shapes = () => {
  const classes = useStyles();

  const canvas = useRef();

  useEffect(() => {}, []);

  return <canvas className={classes.root} ref={canvas} />;
};

export default Shapes;
