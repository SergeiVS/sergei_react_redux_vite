import { v4 } from "uuid"
import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  catFactSelectors,
  catFactsActions,
} from "store/redux/catFact/CatFactSlice"
import { CatFact } from "store/redux/catFact/types"

import Button from "components/Button/Button"

import {
  PageWrapper,
  CatFactCard,
  CatFactsContainer,
  CatFactText,
  FactWrapper,
  ButtonContainer,
} from "./styles"

function Lesson_18() {
  const dispatch = useAppDispatch()
  const catFacts = useAppSelector(catFactSelectors.catFacts)
  const error = useAppSelector(catFactSelectors.error)
  const getCatFact = () => dispatch(catFactsActions.getCatFact())

  const catFactsParagraphs = catFacts.map((catFact: CatFact) => {
    const deleteFact = () => {
      dispatch(catFactsActions.deleteFact(catFact.id))
    }
    return (
      <FactWrapper>
        <CatFactText key={v4()}>{catFact.catFact}</CatFactText>
        <ButtonContainer>
          <Button isRed name="Delete" onClick={deleteFact} />
        </ButtonContainer>
      </FactWrapper>
    )
  })
  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <CatFactCard>
        <CatFactsContainer>
          {catFacts.length > 0 && catFactsParagraphs}
        </CatFactsContainer>
        <Button name="Get Cat Fact" onClick={getCatFact} />
      </CatFactCard>
    </PageWrapper>
  )
}

export default Lesson_18
