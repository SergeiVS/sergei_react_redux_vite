import { useState } from "react"

import Button from "components/Button/Button"
import Counter from "components/Counter/Counter"
import Input from "components/Input/Input"

import { PageWrapper_HW_15 } from "./styles"
import { useState } from "react"
import { number } from "yup"

function Homework_15() {
  const [counter, setCounter] = useState<number>(0)
  const onPlus = (): void => {
    setCounter((prevValue: number): number => prevValue + 1)
  }

  const onMinus = (): void => {
    setCounter((prevValue: number): number => prevValue - 1)
  }
  return (
    <PageWrapper_HW_15>
      <Input id="input-id" name="numberInput" label="Start Number" />
      <Counter count={0} onMinus={onMinus} onPlus={onPlus} />
      <Button name="name" />
    </PageWrapper_HW_15>
  )
}

export default Homework_15
