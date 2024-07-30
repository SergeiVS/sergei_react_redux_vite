import { v4 } from "uuid"
import { useEffect, useState } from "react"
import { Alert } from "@mui/material"

import Button from "components/Button/Button"
import Modal from "components/Modal/Modal"

import {
  ButtonContainer,
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

  const { randomJokes, error, isPending } = useAppSelector(
    randomJokeSelectors.jokesData,
  )

  const [isModalOpen, setModalOpen] = useState<boolean>(false)

  const deleteAllJokes = () => {
    dispatch(randomJokeActions.deleteAllJokes())
  }

  const getJokeElements = randomJokes.map((joke: RandomJoke, index: number) => {
    const deletejoke = () => {
      dispatch(randomJokeActions.deleteJoke(joke.id))
    }
    return (
      <JokeWrapper key={v4()}>
        <JokePresenter>
          <JokeLine>{index + 1}</JokeLine>
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
      setModalOpen(true)
    }
  }, [error])

  return (
    <PageWrapperHW18>
      <ButtonContainer>
        <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
          <Alert severity="error">{error}</Alert>
        </Modal>
        {randomJokes.length > 0 && (
          <Button name="Delete All Jokes" isRed onClick={deleteAllJokes} />
        )}
      </ButtonContainer>
      <JokesContainer>{getJokeElements}</JokesContainer>
      <ButtonContainer>
        <Button name="Get Joke" onClick={getJoke} disabled={isPending} />
      </ButtonContainer>
    </PageWrapperHW18>
  )
}

export default Homework_18
