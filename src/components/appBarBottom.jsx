import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  appbar: {
    display: "flex",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    top: "auto",
    bottom: 0,
  },
}));

export default function AppBarBottom() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6">
          <Typography variant="subtitle1" align="center" color="default">
            You can reach me at the addresses below.
          </Typography>
        </Typography>
      </Toolbar>
      <Typography
        spacing={1}
        variant="subtitle2"
        color="default"
        align="center"
      >
        <Link color="inherit" href="https://material-ui.com/">
          <InstagramIcon />
        </Link>

        <Link color="inherit" href="https://material-ui.com/">
          <FacebookIcon />
        </Link>

        <Link color="inherit" href="https://material-ui.com/">
          <LinkedInIcon />
        </Link>

        <Link color="inherit" href="https://material-ui.com/">
          <GitHubIcon />
        </Link>
      </Typography>
    </AppBar>
  );
}
