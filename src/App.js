import { ButtonGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import VpnKeyTwoToneIcon from "@material-ui/icons//VpnKeyTwoTone";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
