import { v4 } from "uuid"
import { useEffect } from "react"
import Button from "components/Button/Button"
import {
  ButtonContainer,
  ButtonPositioner,
  DeleteButtonContainer,
  JokeLine,
  JokePresenter,
  JokesContainer,
  JokeWrapper,
  PageWrapperHW18,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomeJokeActions,
  randomeJokeSelectors,
} from "store/redux/randomJoke/randomJokeSlice"
import { RandomJoke } from "store/redux/randomJoke/types"

function Homework_18() {
  const isDisabled: boolean = false
  const dispatch = useAppDispatch()
  const getJoke = () => {
    dispatch(randomeJokeActions.getRandomJoke())
  }

  const jokes = useAppSelector(randomeJokeSelectors.randomJokes)
  const error = useAppSelector(randomeJokeSelectors.error)

  const getJokeElements = jokes.map((joke: RandomJoke) => {
    const deletejoke = () => {
      dispatch(randomeJokeActions.deleteJoke(joke.id))
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
            disabled={!randomeJokeActions.getRandomJoke.pending}
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
      <JokesContainer>{jokes.length > 0 && getJokeElements}</JokesContainer>
      <ButtonPositioner>
        <ButtonContainer>
          <Button name="Get Joke" onClick={getJoke} />
        </ButtonContainer>
      </ButtonPositioner>
    </PageWrapperHW18>
  )
}

export default Homework_18
