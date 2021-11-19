import Box from "@material-ui/core/Box";
import AllTabs from "./components/tabs";
import AllButtons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <Box
        m={0.5}
        pl={125}
        style={{ borderBottom: ".5px solid", borderColor: "pink" }}
      >
        <AllButtons />
      </Box>
      <Box pl={25} sx={{ display: "flex" }}>
        <AllTabs />
      </Box>
    </div>
  );
}

export default App;
