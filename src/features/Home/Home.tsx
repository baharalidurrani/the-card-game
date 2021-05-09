import React from "react";
import Grid from "@material-ui/core/Grid";
import { CardList, Controls, Details } from "../../components/organisms";

export function Home() {
  return (
    <Grid container direction="row" justify="space-evenly" spacing={1}>
      <Grid item xs={12} md={9}>
        <Details />
        <br />

        <CardList />
      </Grid>
      <Grid item xs={12} md={3}>
        <Controls />
      </Grid>
    </Grid>
  );
}
