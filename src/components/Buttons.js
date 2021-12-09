import { ButtonGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import VpnKeyTwoToneIcon from "@material-ui/icons//VpnKeyTwoTone";

import useStyles from "./useStyles";

function AllButtons() {
  const classes = useStyles();
  return (
    <ButtonGroup
      variant="text"
      color="primary"
      aria-label="text primary button group"
    >
      <Button
        startIcon={<AccountBalanceTwoToneIcon />}
        className={classes.tabstyle}
      >
        Gallery
      </Button>
      <Button
        endIcon={<VpnKeyTwoToneIcon />}
        onClick={() =>
          alert("Sorry you are not a member yet! Please register. Thank You")
        }
        className={classes.tabstyle}
      >
        Login
      </Button>
    </ButtonGroup>
  );
}

export default AllButtons;
