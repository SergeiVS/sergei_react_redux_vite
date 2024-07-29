import axios from "axios"
import { v4 } from "uuid"

import { createAppSlice } from "store/createAppSlice"
import { CatFact, CatFactsSliceStates } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const catFactInitialState: CatFactsSliceStates = {
  catFacts: [],
  error: undefined,
}

export const catFactSlice = createAppSlice({
  name: "CAT_FACT",
  initialState: catFactInitialState,
  reducers: create => ({
    getCatFact: create.asyncThunk(
      async () => {
        // В response у нас будет лежать либо ошибка, либо нормальные данные, что именно мы не занем сразу
        let response = await axios.get("https://catfact.ninja/fact")

        return response
      },
      {
        pending: (state: CatFactsSliceStates) => {
          state.error = undefined
        },
        fulfilled: (state: CatFactsSliceStates, action) => {
          state.catFacts = [
            ...state.catFacts,
            { catFact: action.payload.data.fact, id: v4() },
          ]
        },
        rejected: (state: CatFactsSliceStates, action) => {
          state.error = action.error.message
        },
      },
    ),
    deleteFact: create.reducer(
      (state: CatFactsSliceStates, action: PayloadAction<string>) => {
        state.catFacts = state.catFacts.filter(
          (catFact: CatFact) => catFact.id !== action.payload,
        )
      },
    ),
  }),
  selectors: {
    catFacts: (state: CatFactsSliceStates) => state.catFacts,
    error: (state: CatFactsSliceStates) => state.error,
  },
})

export const catFactsActions = catFactSlice.actions

export const catFactSelectors = catFactSlice.selectors
