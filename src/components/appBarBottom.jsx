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
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  link: {
    padding: theme.spacing(1),
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
    <AppBar className={classes.appbar} position="static" color="primary">
      <Toolbar>
        <Typography variant="h6">
          <Typography variant="subtitle1" align="center" color="default">
            You can reach me at the addresses below.
          </Typography>
        </Typography>
      </Toolbar>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Link
          className={classes.link}
          color="inherit"
          target="_blank"
          href="https://www.instagram.com/serifcolakell/?hl=tr"
        >
          <InstagramIcon />
        </Link>

        <Link
          className={classes.link}
          color="inherit"
          target="_blank"
          href="https://www.facebook.com/Srf247/"
        >
          <FacebookIcon />
        </Link>

        <Link
          className={classes.link}
          color="inherit"
          target="_blank"
          href="https://www.linkedin.com/in/serifcolakel/"
        >
          <LinkedInIcon />
        </Link>

        <Link
          className={classes.link}
          color="inherit"
          target="_blank"
          href="https://github.com/serifcolakel"
        >
          <GitHubIcon />
        </Link>
      </Grid>
    </AppBar>
  );
}
