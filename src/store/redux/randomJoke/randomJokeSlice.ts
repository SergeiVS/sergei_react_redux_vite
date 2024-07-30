import axios from "axios"
import { v4 } from "uuid"

import { createAppSlice } from "store/createAppSlice"
import { RandomJoke, randomJokeSliceStates } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const randomJokeInitialState: randomJokeSliceStates = {
  randomJokes: [],
  error: undefined,
  isPending: false,
}

export const randomJokeSlice = createAppSlice({
  name: "RANDOM_JOKE",
  initialState: randomJokeInitialState,
  reducers: create => ({
    getRandomJoke: create.asyncThunk(
      async () => {
        let response = await axios.get(
          "https://official-joke-api.appspot.com/random_joke",
        )
        return response
      },
      {
        pending: (state: randomJokeSliceStates) => {
          state.error = undefined
          state.isPending = true
        },

        fulfilled: (state: randomJokeSliceStates, action) => {
          state.randomJokes = [
            ...state.randomJokes,
            {
              punchLine: action.payload.data.punchline,
              setUp: action.payload.data.setup,
              id: v4(),
            },
          ]
          state.isPending = false
        },
        rejected: (state: randomJokeSliceStates, action) => {
          state.error = action.error.message
          state.isPending = false
        },
      },
    ),
    deleteJoke: create.reducer(
      (state: randomJokeSliceStates, action: PayloadAction<string>) => {
        state.randomJokes = state.randomJokes.filter(
          (randomJoke: RandomJoke) => randomJoke.id !== action.payload,
        )
      },
    ),
    deleteAllJokes: create.reducer((state: randomJokeSliceStates) => {
      state.randomJokes = []
    }),
  }),
  selectors: {
    jokesData: (state: randomJokeSliceStates) => state,
  },
})

export const randomJokeActions = randomJokeSlice.actions

export const randomJokeSelectors = randomJokeSlice.selectors
