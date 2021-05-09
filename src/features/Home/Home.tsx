import React, { useEffect } from "react";
import { Box, Grow } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { allCardsAsync, postCardAsync } from "../../app-redux/game/actions/gameActions";
import {
  selectCardAction,
  selectCards,
  selectSelectedCard,
  selectStatus,
  sortAscAction,
  sortDecAction,
} from "../../app-redux/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../app-redux/hooks";
import { ICard } from "../../common/@types/app";
import { CardList, Controls, Details } from "../../components/organisms";

export function Home() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards);
  useEffect(() => {
    console.log("dispatching allCardsAsync.....");
    dispatch(allCardsAsync());
  }, [dispatch]);
  const selected = useAppSelector(selectSelectedCard);
  const status = useAppSelector(selectStatus);
  const postNew = () => {
    selected && dispatch(postCardAsync(selected));
  };

  const sortByName = (asc: boolean) =>
    asc ? dispatch(sortAscAction()) : dispatch(sortDecAction());

  return (
    <>
      <Grid container direction="row" justify="space-evenly" spacing={1}>
        <Grid item xs={12} md={9}>
          {selected && (
            <Grow in>
              <Box m={1}>
                <Details data={selected} />
              </Box>
            </Grow>
          )}

          <Typography variant="h4">Overview</Typography>
          <CardList
            cards={cards}
            selected={selected}
            changeSelect={(data: ICard) => {
              dispatch(selectCardAction(data));
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Controls sortByName={sortByName} status={status} postNew={postNew} />
        </Grid>
      </Grid>
    </>
  );
}
