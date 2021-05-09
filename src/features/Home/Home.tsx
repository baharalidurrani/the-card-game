import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { allCardsAsync } from "../../app-redux/game/actions/gameActions";
import { selectCards } from "../../app-redux/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../app-redux/hooks";
import { CardList, Controls, Details } from "../../components/organisms";

export function Home() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards);
  useEffect(() => {
    console.log("dispatching allCardsAsync.....");
    dispatch(allCardsAsync());
  }, [dispatch]);
  return (
    <Grid container direction="row" justify="space-evenly" spacing={1}>
      <Grid item xs={12} md={9}>
        <Details data={cards[0]} />
        <br />

        <CardList cards={cards} />
      </Grid>
      <Grid item xs={12} md={3}>
        <Controls />
      </Grid>
    </Grid>
  );
}
