import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import { Details } from ".";
import { ICard } from "../../common/@types/app";

interface Props {
  cards: ICard[];
  selected?: ICard;
  changeSelect?: (data: ICard) => void;
}
export function CardList(props: Props) {
  return (
    <Grid container direction="row" justify="space-between" spacing={1}>
      {props.cards.map((c, i) => (
        <Grid item xs={12} key={i} md={4}>
          <Grow in timeout={300 * i}>
            <Box m={1}>
              <Details
                wrapText
                data={c}
                selected={props.selected}
                changeSelect={props.changeSelect}
              />
            </Box>
          </Grow>
        </Grid>
      ))}
    </Grid>
  );
}
