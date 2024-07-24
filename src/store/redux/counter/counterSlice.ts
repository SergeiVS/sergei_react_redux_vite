import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { CounterSliceState } from "./types"

//default state for GobalState
const counterInitialState: CounterSliceState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  name: "COUNTER",
  initialState: counterInitialState,
  reducers: create => ({
    plus: create.reducer((state: CounterSliceState) => {
      state.count += 1
    }),
    minus: create.reducer((state: CounterSliceState) => {
      state.count -= 1
    }),
    multiply: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        state.count *= action.payload
      },
    ),
    divide: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        state.count /= action.payload
      },
    ),
  }),
  selectors: { count: (state: CounterSliceState) => state.count },
})

export const counterSliceActions = counterSlice.actions

export const counterSliceSelectors = counterSlice.selectors
