import * as React from "react";
//import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@material-ui/core/Box";
//import Paper from "@material-ui/core/Paper";
//import Grid from "@material-ui/core/Grid";

import n1 from "../images/1.jpg";
import n2 from "../images/2.jpg";
import n3 from "../images/3.jpg";
import n4 from "../images/4.jpg";
import n5 from "../images/5.jpg";
import n6 from "../images/6.jpg";
import n7 from "../images/7.jpg";
import n8 from "../images/8.jpg";
import wc from "../images/wc.jpg";
import n10 from "../images/10.jpg";
import n11 from "../images/11.jpg";
import n12 from "../images/12.jpg";
import n13 from "../images/13.jpg";
import n14 from "../images/14.jpg";
import n15 from "../images/15.jpg";
import n16 from "../images/16.jpg";
import n17 from "../images/17.jpg";
import n18 from "../images/18.jpg";
// import n19 from "../images/19.jpg";
// import n20 from "../images/20.jpg";
// import n21 from "../images/21.jpg";
import useStyles from "./useStyles";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function ResponsiveGrid() {
  const arra = [
    n1,
    n2,
    n3,
    n4,
    n5,
    n6,
    n7,
    n8,
    wc,
    n10,
    n11,
    n12,
    n13,
    n14,
    n15,
    n16,
    n17,
    n18,
  ];
  const classes = useStyles();
  return (
    <Box
      sx={{
        paddingTop: "40px",
        padding: "10px",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridGap: "50px",
        justifyContent: "space-evenly",
      }}
    >
      {arra.map((item, index) => {
        return (
          <div className={classes.divStyle}>
            <img width="350px" height="350px" src={item} alt={index} />
          </div>
        );
      })}
    </Box>
  );
}
export default ResponsiveGrid;
