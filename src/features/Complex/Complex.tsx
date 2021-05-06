import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Organism } from "../../components/organisms";

export function Complex() {
  return (
    <Container>
      <Typography variant="h1" align="center">
        Complex
      </Typography>
      <Organism />
    </Container>
  );
}
