import {
  useState,
  createContext,
  PropsWithChildren,
  SetStateAction,
} from "react";

import { LayoutProps } from "pages/EmployeeAppProject/Layout_Team_1/types";
import { Employee } from "pages/EmployeeAppProject/Layout_Team_1/types";

export interface EmployeeContextType {
  employees: Employee[];
  setEmployees: React.Dispatch<SetStateAction<Employee[]>>;
}

export const EmployeeAppContext = createContext<EmployeeContextType>({
  employees: [],
  setEmployees: () => {},
});

function EmployeeAppContextProvider({
  children,
}: PropsWithChildren<LayoutProps>) {
  const [employee, setEmployee] = useState<Employee[]>([]);

  return (
    <EmployeeAppContext.Provider
      value={{ employees: employee, setEmployees: setEmployee }}
    >
      {children}
    </EmployeeAppContext.Provider>
  );
}

export default EmployeeAppContextProvider;
