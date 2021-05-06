import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Molecule } from "../molecules";

const names = ["Newton", "Einstein", "Nicola"];

export function Organism() {
  return (
    <Container>
      <Typography variant="h2" align="center">
        Organism
      </Typography>
      <Molecule names={names} />
    </Container>
  );
}
