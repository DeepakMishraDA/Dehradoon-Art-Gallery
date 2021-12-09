import Box from "@material-ui/core/Box";
import AllTabs from "./components/tabs";
import AllButtons from "./components/Buttons";

import ResponsiveGrid from "./components/Grid";
import Image from "./images/9.jpg";

function App() {
  const url = "#";
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        backgroundBlendMode: "normal",
        backgroundImage: `url(${Image})`,
      }}
      className="App"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "3.5%",
        }}
      >
        {" "}
        <div
          style={{
            fontSize: "28px",
            paddingTop: "15px",
            alignSelf: "flex-end",
          }}
        >
          <h1
            style={{
              paddingLeft: "100px",
              fontFamily: "Sofia",
              textTransform: "uppercase",
            }}
          >
            <a
              href={url}
              style={{
                textDecoration: "none",
                ":hover": { color: "#FFFFF" },
              }}
            >
              {" "}
              Tanvi Singh
            </a>
          </h1>
        </div>
        <div
          style={{
            paddingTop: "15px",
            paddingRight: "5px",
            alignSelf: "flex-start",
          }}
        >
          {" "}
          <AllButtons />
          <hr />
        </div>
      </div>
      <div
        style={{
          paddingLeft: "23%",
          display: "flex",
          alignItems: "right",
          justifyContent: "space-evenly",
          paddingTop: "0px",
        }}
      >
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Sofia"
        ></link>
        <AllTabs style={{ paddingTop: "8%", flex: "1" }} />
      </div>
      <ResponsiveGrid />
    </Box>
  );
}

export default App;
