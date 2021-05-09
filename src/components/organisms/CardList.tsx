import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Details } from ".";

export function CardList() {
  return (
    <>
      <Typography variant="h4">Overview</Typography>
      <Grid container direction="row" justify="space-between" spacing={1}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((a, i) => (
          <Grid item xs={12} key={i} md={4}>
            <Details wrapText />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
