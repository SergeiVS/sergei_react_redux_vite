import styled from "@emotion/styled"
import { PageWrapperCss } from "styles/standartStyles"

export const PageWrapperHW18 = styled.div`
  ${PageWrapperCss}
  gap: 20px;
  padding: 60px;
  background-color: wheat;
`
export const JokesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
  width: 700px;
  min-height: 300px;
  max-height: 800px;
  overflow-y: auto;
  padding: 10px;
  background-color: whitesmoke;
`
export const JokeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: 20px;
`
export const JokePresenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const JokeLine = styled.div`
  font-size: 20px;
  font-weight: bold;
`

export const DeleteButtonContainer = styled.div`
  min-width: 180px;
  min-height: 70px;
`

export const ButtonContainer = styled.div`
  right: 40%;
  width: 400px;
  min-height: 70px;
`
