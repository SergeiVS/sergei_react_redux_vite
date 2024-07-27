import Button from "components/Button/Button";
import { Employee } from "pages/EmployeeAppProject/Layout_Team_1/types";

import { EmployeesCard, TextDiv, TextLabel, TextContent } from "./styles";
import { useDispatch } from "react-redux";
import { employeesAppSliceAction } from "store/redux/employees/employeesSlice";

function Employees_Card({ name, surName, age, jobPosition }: Employee) {
  
  const dispach = useDispatch()
  const deleteCard = employeesAppSliceAction.deleteCard
  
  return (
    <EmployeesCard>
      <TextDiv>
        <TextLabel>Name</TextLabel>
        <TextContent>{name}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Surname</TextLabel>
        <TextContent>{surName}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Age</TextLabel>
        <TextContent>{age}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Job Position</TextLabel>
        <TextContent>{jobPosition}</TextContent>
      </TextDiv>
      <Button name="Delete" isRed={true} onClick={()=>{}}/>
    </EmployeesCard>
  );
}

export default Employees_Card;
