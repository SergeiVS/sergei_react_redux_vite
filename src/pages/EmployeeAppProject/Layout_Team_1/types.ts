import { ReactNode } from "react"
import { FieldNames } from "../components/CreateEmployeeForm/types"

export interface LayoutProps {
  children: ReactNode
}

export interface Employee {
  id?: string
  [FieldNames.NAME]: string
  [FieldNames.SUR_NAME]: string
  [FieldNames.AGE]: number | string
  [FieldNames.JOB_POSITION]?: string
}
export enum PagesPaths {
  HOME = "/",
  CREATE_EMPLOYEES = "/create",
  EMPLOYEES = "/employees",
}
