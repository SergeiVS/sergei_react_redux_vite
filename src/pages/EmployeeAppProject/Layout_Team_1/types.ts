import { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

export interface Employee {
  id?: string
  name: string
  surName: string
  age: number | string
  jobPosition?: string
}
export enum PagesPaths {
  HOME = "/",
  CREATE_EMPLOYEES = "/create",
  EMPLOYEES = "/employees",
}
