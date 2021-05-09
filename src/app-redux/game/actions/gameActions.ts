import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../../common/@types/app";
import { ax } from "../../../common/api/apiClient";
import { GameState } from "../gameSlice";

export const sortAsc = (state: GameState) => {
  state.cards = state.cards.sort((a, b) => {
    return b.realName < a.realName ? 1 : b.realName > a.realName ? -1 : 0;
  });
};

export const sortDec = (state: GameState) => {
  state.cards = state.cards.sort((a, b) => {
    return b.realName > a.realName ? 1 : b.realName < a.realName ? -1 : 0;
  });
};

export const selectCard = (state: GameState, action: PayloadAction<ICard>) => {
  state.selected = action.payload;
};

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
