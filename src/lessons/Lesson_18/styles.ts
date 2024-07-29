import styled from "@emotion/styled"
import { colors } from "styles/colors"
import { PageWrapperCss } from "styles/standartStyles"

export const PageWrapper = styled.div`
  ${PageWrapperCss}
  padding: 100px;
  background-color: ${colors.PRIMARY};
`

export const CatFactCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 700px;
  min-height: 300px;
  max-height: 800px;
  padding: 40px;
  border: 2px solid black;
  border-radius: 6px;
  background-color: white;
`
export const CatFactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
  overflow-y: auto;
`
export const CatFactText = styled.p`
  font-size: 24px;
  font-weight: bold;
`
export const FactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`
export const ButtonContainer = styled.div`
  min-width: 100px;
`
