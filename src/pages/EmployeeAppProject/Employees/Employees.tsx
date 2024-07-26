import { ReactNode, useContext } from "react"

import Employees_Card from "../components/EmployeesCard/EmployeesCard"
import Button from "components/Button/Button"

import { EmployeeAppContext } from "../contexts/EmployeeAppContext"
import { PageWrapper, EmployeesWrapper, DeleteButtonControl } from "./styles"
import { Employee } from "../Layout_Team_1/types"
import { v4 } from "uuid"

function Employees() {
  const { employees } = useContext(EmployeeAppContext)

  const getEmployeesCards = (employees: Employee[]): ReactNode[] =>
    employees.map((emlpoyeeObj: Employee) => {
      return (
        <PageWrapper>
        <EmployeesWrapper>
        <Employees_Card
          key={v4()}
          name={emlpoyeeObj.name}
          surName={emlpoyeeObj.surName}
          age={emlpoyeeObj.age}
          jobPosition={emlpoyeeObj.jobPosition}
        /></EmployeesWrapper>
        <DeleteButtonControl><Button name="Remove all employees" onClick={() => {}} disabled={!employees} isRed={true} /></DeleteButtonControl>
         </PageWrapper>
      )
    })

  return (
      <>
      {getEmployeesCards(employees)}
      </>
    
    
   
  )
}

export default Employees
