import { useState } from "react"

import Button from "components/Button/Button"
import Counter from "components/Counter/Counter"
import Input from "components/Input/Input"

import { PageWrapper_HW_15 } from "./styles"

function Homework_15() {
  const [counter, setCounter] = useState<number>(0)
  const onPlus = (): void => {
    setCounter((prevValue: number): number => prevValue + 1)
  }

  const onMinus = (): void => {
    setCounter((prevValue: number): number => prevValue - 1)
  }

  const onClick = () => {
    setCounter(0)
  }

  return (
    <PageWrapper_HW_15>
      <Input id="input-id" name="numberInput" label="Start Number" />
      <Counter count={counter} onMinus={onMinus} onPlus={onPlus} />
      <Button name="Reset Counter" onClick={onClick} />
    </PageWrapper_HW_15>
  )
}

export default Homework_15
