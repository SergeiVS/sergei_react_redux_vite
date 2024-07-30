export interface randomJokeSliceStates {
  randomJokes: RandomJoke[]
  error: string | undefined
}

export interface RandomJoke {
  id: string
  setUp: string
  punchLine: string
}
