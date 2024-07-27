import Employees from "pages/EmployeeAppProject/Employees/Employees"
import { EmployeesSliceState } from "./types"
import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { Employee } from "pages/EmployeeAppProject/Layout_Team_1/types"
import { v4 } from "uuid"

const employeeAppInitialState: EmployeesSliceState = {
  employees: [],
}

export const employeeAppSlice = createAppSlice({
  name: "EMPLOYEE-APP",
  initialState: employeeAppInitialState,
  reducers: create => ({
    createEmployee: create.reducer(
      (state: EmployeesSliceState, action: PayloadAction<Employee>) => {
        action.payload.id = v4()

        state.employees.push(action.payload)
        console.log(action.payload.id)
      },
    ),
    deleteCard: create.reducer(
      (state: EmployeesSliceState, action: PayloadAction<Employee>) => {
        state.employees = state.employees.filter(
          employeeObject => employeeObject.id !== action.payload.id,
        )
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
