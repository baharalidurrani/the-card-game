import React from "react";
import { Box, Button, CircularProgress } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

interface Props {
  sortByName: (asc: boolean) => void;
  status: "idle" | "loading" | "failed";
  postNew: () => void;
}
export function Controls(props: Props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" align="center">
          Controls
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container direction="column" justify="space-between" alignItems="center">
          <Grid item>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item>
                <Tooltip title="Ascending">
                  <IconButton
                    aria-label="sort ascending"
                    onClick={() => {
                      props.sortByName(true);
                    }}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">Sort Order</Typography>
              </Grid>
              <Grid item>
                <Tooltip title="Descending">
                  <IconButton
                    aria-label="sort descending"
                    onClick={() => {
                      props.sortByName(false);
                    }}
                  >
                    <ArrowUpwardIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box m={2}>
              <Button
                variant="contained"
                color="secondary"
                disabled={props.status === "loading"}
                onClick={props.postNew}
              >
                {props.status === "loading" ? (
                  <CircularProgress color="secondary" />
                ) : (
                  "Mock Submit"
                )}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
