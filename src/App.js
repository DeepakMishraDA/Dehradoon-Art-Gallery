import * as React from "react";
import { ButtonGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import VpnKeyTwoToneIcon from "@material-ui/icons//VpnKeyTwoTone";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <Box
        m={0.5}
        pl={125}
        style={{ borderBottom: ".5px solid", borderColor: "pink" }}
      >
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button startIcon={<AccountBalanceTwoToneIcon />}>Gallery</Button>
          <Button
            endIcon={<VpnKeyTwoToneIcon />}
            onClick={() =>
              alert(
                "Sorry you are not a member yet! Please register first. Thank You"
              )
            }
          >
            Login
          </Button>
        </ButtonGroup>
      </Box>
      <Box pl={25} sx={{ display: "flex" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={true}
          aria-label="scrollable prevent tabs example"
        >
          <Tab label="Tanvi Singh"></Tab>
          <Tab label="Bio" />
          <Tab label="Photographs" />
          <Tab label="Murals" />
          <Tab label="Gigapixel Images" />
          <Tab label="ShortFilms" />
          <Tab label="Latest" />
        </Tabs>
      </Box>
    </div>
  );
}

export default App;
