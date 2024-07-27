import Employees from "pages/EmployeeAppProject/Employees/Employees"
import { EmployeesSliceState } from "./types"
import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { Employee } from "pages/EmployeeAppProject/Layout_Team_1/types"

const employeeAppInitialState: EmployeesSliceState = {
  employees: [],
}

export const employeeAppSlice = createAppSlice({
  name: "EMPLOYEE-APP",
  initialState: employeeAppInitialState,
  reducers: create => ({
    createEmployee: create.reducer(
      (state: EmployeesSliceState, action: PayloadAction<Employee>) => {
        state.employees.push(action.payload)
      },
    ),
    deleteCard: create.reducer(
      (state: EmployeesSliceState, action: PayloadAction<Employee>) => {
        state.employees.splice(state.employees.indexOf(action.payload), 1)
      },
    ),
    deleteAllCards: create.reducer(() => employeeAppInitialState),
  }),
  selectors: { employees: (state: EmployeesSliceState) => state.employees },
})

export const employeesAppSliceAction = employeeAppSlice.actions
export const employeesAppSliceSelectors = employeeAppSlice.selectors

// onSubmit: (values, helpers) => {
//    новая функция createEmployee (values)
//     helpers.resetForm()
//     setModalOpen(true)
//   },
