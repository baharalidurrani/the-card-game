import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export function Controls() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" align="center">
          Controls
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item>
            <Tooltip title="Ascending">
              <IconButton aria-label="sort ascending">
                <ArrowDownwardIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Typography variant="subtitle2">Sort Order</Typography>
          <Grid item>
            <Tooltip title="Descending">
              <IconButton aria-label="sort descending">
                <ArrowUpwardIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
