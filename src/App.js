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
          justifyContent: "end",
          marginRight: "3.5%",
          marginBottom: "0%",
        }}
      >
        <AllButtons />
      </div>
      <div
        style={{
          paddingLeft: "1%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Sofia"
        ></link>
        <h1
          style={{
            color: "black",
            fontFamily: "Sofia",
            fontSize: "38px",
            textTransform: "uppercase",
            paddingTop: "2%",
            paddingBottom: ".5%",
          }}
        >
          <a
            href={url}
            style={{ textDecoration: "none", ":hover": { color: "red" } }}
          >
            {" "}
            Tanvi Singh
          </a>
        </h1>
        <AllTabs style={{ paddingTop: "8%", flex: "1" }} />
      </div>
      <ResponsiveGrid />
    </Box>
  );
}

export default App;
