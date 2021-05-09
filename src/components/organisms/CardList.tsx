import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Details } from ".";
import { ICard } from "../../common/@types/app";

interface Props {
  cards: ICard[];
  selected?: ICard;
  changeSelect?: (data: ICard) => void;
}
export function CardList(props: Props) {
  return (
    <>
      <Typography variant="h4">Overview</Typography>
      <Grid container direction="row" justify="space-between" spacing={1}>
        {props.cards.map((c, i) => (
          <Grid item xs={12} key={i} md={4}>
            <Details
              wrapText
              data={c}
              selected={props.selected}
              changeSelect={props.changeSelect}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
