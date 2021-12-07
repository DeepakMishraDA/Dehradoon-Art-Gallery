import Box from "@material-ui/core/Box";
import AllTabs from "./components/tabs";
import AllButtons from "./components/Buttons";

import ResponsiveGrid from "./components/Grid";

function App() {
  const url = "#";
  return (
    <Box
      sx={{
        backgroundColor: "pink",
      }}
      className="App"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "3.5%",
          marginBottom: "0%",
          paddingTop: "5px",
        }}
      >
        <h1
          style={{
            paddingLeft: "100px",
            color: "black",
            fontFamily: "Sofia",
            fontSize: "38px",
            textTransform: "uppercase",
          }}
        >
          <a
            href={url}
            style={{ textDecoration: "none", ":hover": { color: "red" } }}
          >
            {" "}
            Tanvi Singh
          </a>
        </h1>{" "}
        <AllButtons />
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
