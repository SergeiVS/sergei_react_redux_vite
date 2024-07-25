import { useAppDispatch } from "store/hooks"
import { useSelector } from "react-redux"

import Feedback from "components/Feedback/Feedback"
import { PageWrapperHW16 } from "./styles"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlyces"

function Homework_16() {
  const dispatch = useAppDispatch()
  const likes = useSelector(feedbackSliceSelectors.selectLikes)
  const dislikes = useSelector(feedbackSliceSelectors.selectDislikes)
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
