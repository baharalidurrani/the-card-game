import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../../common/@types/app";
import { ax } from "../../../common/api/apiClient";
import { GameState } from "../gameSlice";

/**
 * Don't use directly, instead use `openDrawerAction` from the corresponding slice/reduce file
 */
export const getAllCards = (state: GameState, action: PayloadAction<ICard[]>) => {
  state.status = "idle";
  state.cards = action.payload;
};

export const allCardsAsync = createAsyncThunk("game/getAllCards", async () => {
  const response = await ax.get("/cards");
  return response.data;
});
export const postNewCard = (state: GameState, action: PayloadAction<ICard>) => {
  state.status = "idle";
  state.cards.push(action.payload);
};

export const postCardAsync = createAsyncThunk("game/postNewCard", async (body: ICard) => {
  const response = await ax.post("/cards", body);
  return response.data;
});