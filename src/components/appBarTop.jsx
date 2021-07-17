import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

export default function AppBarTop() {
  return (
    <AppBar position="sticky" className="appBarTop" color="primary">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item>
            <Grid container alignItems="center" justify="space-between">
              <Link color="inherit" href="https://material-ui.com/">
                <Typography variant="h6">Serif Colakel</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
