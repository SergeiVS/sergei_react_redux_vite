import { useAppDispatch } from "store/hooks"

import Button from "components/Button/Button"
import { employeesAppSliceAction } from "store/redux/employees/employeesSlice"

import { EmployeesCard, TextDiv, TextLabel, TextContent } from "./styles"
import { EmployeeCardProps } from "./types"

function Employees_Card({ employee }: EmployeeCardProps) {

  const dispatch = useAppDispatch()
  
  const deleteCard = () => {
    dispatch(employeesAppSliceAction.deleteCard(employee))
  }

  return (
    <EmployeesCard>
      <TextDiv>
        <TextLabel>Name</TextLabel>
        <TextContent>{employee.name}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Surname</TextLabel>
        <TextContent>{employee.surName}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Age</TextLabel>
        <TextContent>{employee.age}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Job Position</TextLabel>
        <TextContent>{employee.jobPosition}</TextContent>
      </TextDiv>
      <Button name="Delete" isRed={true} onClick={deleteCard} />
    </EmployeesCard>
  )
}

export default Employees_Card
