import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export function About() {
  return (
    <Container>
      <Typography variant="h1" align="center">
        Hi there!
      </Typography>
      <Typography variant="h6" align="center">
        Welcome to the most Efficient, Elegant and Easy to Excel production ready React template of
        2021 that one can <del>ever</del> never find on the web.
      </Typography>
    </Container>
  );
}
