import { useAppDispatch, useAppSelector } from "store/hooks"
import Counter from "components/Counter/Counter"
import {
  counterSliceSelectors,
  counterSliceActions,
} from "store/redux/counter/counterSlice"

import { LessonWrapper } from "./styles"

function Lesson_16() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSliceSelectors.count)
  const onPlus = () => {
    dispatch(counterSliceActions.plus())
  }
  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(3))
  }

  const onDivide = () => {
    dispatch(counterSliceActions.divide(2))
  }

  return (
    <LessonWrapper>
      <Counter
        count={count}
        onPlus={onPlus}
        onMinus={onMinus}
        onDivide={onDivide}
        onMultiply={onMultiply}
      />
    </LessonWrapper>
  )
}
export default Lesson_16
