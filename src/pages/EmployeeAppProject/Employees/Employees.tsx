import { ReactNode, useContext } from "react";

import Employees_Card from "pages/EmployeeAppProject/components/EmployeesСard/EmployeesCard";

import { EmployeeAppContext } from "../contexts/EmployeeAppContext";
import { EmployeesWrapper } from "./styles";
import { Employee } from "../Layout_Team_1/types";
import { v4 } from "uuid";

function Employees() {
  const { employees } = useContext(EmployeeAppContext);

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
      );
    });

  return <EmployeesWrapper>{getEmployeesCards(employees)}</EmployeesWrapper>;
}

export default Employees;
