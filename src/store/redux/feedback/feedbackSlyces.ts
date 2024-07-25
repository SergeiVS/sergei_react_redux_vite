import { createReducer, createSlice } from "@reduxjs/toolkit"
import { FeedbackSliceState } from "./types"

const feedbackInitialState: FeedbackSliceState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    addLikes: create.reducer((state: FeedbackSliceState) => {
      state.likes += 1
    }),
    addDislikes: create.reducer((state: FeedbackSliceState) => {
      state.dislikes += 1
    }),
    resetResults: create.reducer((state: FeedbackSliceState) => {
      state.likes = 0
      state.dislikes = 0
    }),
  }),
})
