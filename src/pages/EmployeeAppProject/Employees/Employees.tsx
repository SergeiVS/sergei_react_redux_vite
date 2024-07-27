import { ReactNode, useContext } from "react"

import Employees_Card from "../components/EmployeesCard/EmployeesCard"
import Button from "components/Button/Button"

// import { EmployeeAppContext } from "../contexts/EmployeeAppContext"
import { PageWrapper, EmployeesWrapper, DeleteButtonControl } from "./styles"
import { Employee } from "../Layout_Team_1/types"
import { v4 } from "uuid"
import {
  employeesAppSliceAction,
  employeesAppSliceSelectors,
} from "store/redux/employees/employeesSlice"
import { useAppSelector } from "store/hooks"
import { useDispatch } from "react-redux"

function Employees() {
  // const { employees } = useContext(EmployeeAppContext)
  const dispach = useDispatch()
  const createEmployees = useAppSelector(employeesAppSliceSelectors.employees)

  const deleteAllCards = () => {
    dispach(employeesAppSliceAction.deleteAllCards())
  }

  // const createEmployee = () => {
  //   dispach(employeesAppSliceAction.createEmployee(employee: Employee))
  // }

  const getEmployeesCards = (employees: Employee[]): ReactNode[] =>
    employees.map((emlpoyeeObj: Employee) => {
      return (
        <Employees_Card
          key={v4()}
          name={emlpoyeeObj.name}
          surName={emlpoyeeObj.surName}
          age={emlpoyeeObj.age}
          jobPosition={emlpoyeeObj.jobPosition}
        />
      )
    })

  return (
    <PageWrapper>
      <EmployeesWrapper>{getEmployeesCards(createEmployees)}</EmployeesWrapper>
      <DeleteButtonControl>
        <Button name="Remove all employees" onClick={deleteAllCards} isRed={true} />
      </DeleteButtonControl>
    </PageWrapper>
  )
}

export default Employees
