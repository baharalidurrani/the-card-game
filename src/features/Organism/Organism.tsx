import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Molecule } from "../../components/molecules";

const names = ["Newton", "Einstein", "Nicola"];

export function Organism() {
  return (
    <Container>
      <Typography variant="h1" align="center">
        Organism
      </Typography>
      <Molecule names={names} />
    </Container>
  );
}
