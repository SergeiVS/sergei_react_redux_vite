import Button from "components/Button/Button"
import Counter from "components/Counter/Counter"
import Input from "components/Input/Input"

import { PageWrapper_HW_15 } from "./styles"

function Homework_15() {
  return (
    <PageWrapper_HW_15>
      <Input id="input-id" name="numberInput" label="Start Number" />
      <Counter count={0} onMinus={() => {}} onPlus={() => {}} />
      <Button name="name"/>
    </PageWrapper_HW_15>
  )
}

export default Homework_15
