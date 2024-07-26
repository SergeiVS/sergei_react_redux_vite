import { createAppSlice } from "store/createAppSlice"
import { FeedbackInitialState } from "./types"

const feedbackInitialState: FeedbackInitialState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    addLikes: create.reducer((state: FeedbackInitialState) => {
      state.likes += 1
    }),
    addDislikes: create.reducer((state: FeedbackInitialState) => {
      state.dislikes += 1
    }),
    resetResults: create.reducer(() => feedbackInitialState),
  }),
  selectors: {
    // feedBack: (state)=>state
    selectLikes: (state: FeedbackInitialState) => state.likes,
    selectDislikes: (state: FeedbackInitialState) => state.dislikes,
  },
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
