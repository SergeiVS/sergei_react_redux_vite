export interface randomJokeSliceStates {
  isPending: boolean
  randomJokes: RandomJoke[]
  error: string | undefined
}

export interface RandomJoke {
  id: string
  setUp: string
  punchLine: string
}
