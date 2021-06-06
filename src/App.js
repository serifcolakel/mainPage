import React from "react";
import AppBarTop from "./components/appBarTop";
import Stepper from "./components/stepper";
import MuiCard from "./components/card";
import AppBarBottom from "./components/appBarBottom";

export default function CenteredGrid() {
  return (
    <React.Fragment>
      <AppBarTop />
      <Stepper />
      <MuiCard />
      <AppBarBottom />
    </React.Fragment>
  );
}
