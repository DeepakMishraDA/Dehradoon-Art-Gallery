import * as React from "react";
//import { experimentalStyled as styled } from "@mui/material/styles";
//import Box from "@material-ui/core/Box";
//import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import nature from "../images/1.jpg";
import feature from "../images/6.jpg";
import useStyles from "./useStyles";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function ResponsiveGrid() {
  const arra = [nature, feature];
  const classes = useStyles();
  return (
    <div>
      {arra.map((item, index) => {
        if (index === 1) {
          return (
            <Grid className={classes.imgStyle}>
              <img src={item} alt={index} />
            </Grid>
          );
        }
        return (
          <Grid className={classes.imgStyle}>
            <img src={item} alt={index} />
          </Grid>
        );
      })}
    </div>
  );
}
export default ResponsiveGrid;
