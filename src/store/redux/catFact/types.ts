export interface CatFactsSliceStates {
  catFacts: CatFact[]
  error: string | undefined
}

export interface CatFact {
  id: string
  catFact: string
}
