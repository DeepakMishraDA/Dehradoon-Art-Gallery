import Box from "@material-ui/core/Box";
import AllTabs from "./components/tabs";
import AllButtons from "./components/Buttons";

function App() {
  const url = "#";
  return (
    <Box className="App">
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
        <h1
          style={{
            color: "black",
            font: "italic 40px Tahoma Helvetica sans-serif",
            textTransform: "uppercase",
            paddingTop: "2%",
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
      <div
        style={{ border: "solid black 1px", padding: "10%", margin: "5%" }}
      ></div>
    </Box>
  );
}

export default App;
