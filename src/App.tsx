import { Routes, Route } from "react-router-dom"

import Layout_Team_1 from "pages/EmployeeAppProject/Layout_Team_1/Layout_Team_1"
import CreateEmployee from "pages/EmployeeAppProject/CreateEmployee/CreateEmployee"
import Employees from "pages/EmployeeAppProject/Employees/Employees"
import { PagesPaths } from "pages/EmployeeAppProject/Layout_Team_1/types"

import Homework_15 from "homeworks/Homework_15/Homework_15"
import Homework_16 from "homeworks/Homework_16/Homework_16"

import Lesson_16 from "lessons/Lesson_16/Lesson_16"
import Lesson_18 from "lessons/Lesson_18/Lesson_18"

function App() {
  return (
    <>
      {/* <Layout_Team_1>
        <Routes>
          <Route path={PagesPaths.HOME}></Route>
          <Route
            path={PagesPaths.CREATE_EMPLOYEES}
            element={<CreateEmployee />}
          />
          <Route path={PagesPaths.EMPLOYEES} element={<Employees />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout_Team_1> */}

      {/* <Homework_15 /> */}
      {/* <Homework_16 /> */}
      {/* <Lesson_16 /> */}
      <Lesson_18 />
    </>
  )
}

export default App
