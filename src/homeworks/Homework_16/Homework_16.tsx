import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlyce"


import Feedback from "components/Feedback/Feedback"
import { PageWrapperHW16 } from "./styles"

function Homework_16() {
  const dispatch = useAppDispatch()
  const likes = useAppSelector(feedbackSliceSelectors.selectLikes)
  const dislikes = useAppSelector(feedbackSliceSelectors.selectDislikes)

  const onLikes = () => {
    dispatch(feedbackSliceActions.addLikes())
  }
  const onDislikes = () => {
    dispatch(feedbackSliceActions.addDislikes())
  }
  const resetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }
  
  return (
    <PageWrapperHW16>
      <Feedback
        like={likes}
        dislike={dislikes}
        onLike={onLikes}
        onDislike={onDislikes}
        resetResults={resetResults}
      />
    </PageWrapperHW16>
  )
}

export default Homework_16
