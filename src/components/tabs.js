import * as React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function AllTabs() {
  //not-destructured

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullwidth"
        scrollButtons={true}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Bio" />
        <Tab label="Photographs" />
        <Tab label="Murals" />
        <Tab label="Gigapixel Images" />
        <Tab label="ShortFilms" />
        <Tab label="Latest" />
      </Tabs>
    </div>
  );
}

export default AllTabs;
