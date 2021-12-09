import * as React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import useStyles from "./useStyles";

function AllTabs() {
  //not-destructured
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        color: "black",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullwidth"
        scrollButtons={true}
        aria-label="scrollable prevent tabs example"
      >
        <Tab className={classes.tabstyle} label="Bio" />
        <Tab className={classes.tabstyle} label="Latest" />
        <Tab className={classes.tabstyle} label="Photographs" />
        <Tab className={classes.tabstyle} label="Murals" />
        <Tab className={classes.tabstyle} label="Gigapixel Images" />
        <Tab className={classes.tabstyle} label="ShortFilms" />
      </Tabs>
    </div>
  );
}

export default AllTabs;
