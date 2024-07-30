import { v4 } from "uuid"
import { useEffect } from "react"
import Button from "components/Button/Button"
import {
  ButtonContainer,
  DeleteAllButtonContainer,
  DeleteButtonContainer,
  JokeLine,
  JokePresenter,
  JokesContainer,
  JokeWrapper,
  PageWrapperHW18,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomJokeActions,
  randomJokeSelectors,
} from "store/redux/randomJoke/randomJokeSlice"
import { RandomJoke } from "store/redux/randomJoke/types"

function Homework_18() {
  const dispatch = useAppDispatch()
  const getJoke = () => {
    dispatch(randomJokeActions.getRandomJoke())
  }

  const jokes = useAppSelector(randomJokeSelectors.randomJokes)
  const error = useAppSelector(randomJokeSelectors.error)
  const isPending = useAppSelector(randomJokeSelectors.isPending)

  const deleteAllJokes = () => {
    dispatch(randomJokeActions.deleteAllJokes())
  }

  const getJokeElements = jokes.map((joke: RandomJoke) => {
    const deletejoke = () => {
      dispatch(randomJokeActions.deleteJoke(joke.id))
    }
    return (
      <JokeWrapper key={v4()}>
        <JokePresenter>
          <JokeLine>{joke.setUp}</JokeLine>
          <JokeLine>{joke.punchLine}</JokeLine>
        </JokePresenter>
        <DeleteButtonContainer>
          <Button
            name="Delete Joke"
            isRed
            onClick={deletejoke}
            disabled={!randomJokeActions.getRandomJoke.pending}
          />
        </DeleteButtonContainer>
      </JokeWrapper>
    )
  })

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapperHW18>
      <JokesContainer>
        {getJokeElements}
        {jokes.length > 0 && (
          <Button name="Delete All Jokes" isRed onClick={deleteAllJokes} />
        )}
      </JokesContainer>
      <ButtonContainer>
        <DeleteAllButtonContainer>
          <Button name="Get Joke" onClick={getJoke} disabled={isPending} />
        </DeleteAllButtonContainer>
      </ButtonContainer>
    </PageWrapperHW18>
  )
}

export default Homework_18
