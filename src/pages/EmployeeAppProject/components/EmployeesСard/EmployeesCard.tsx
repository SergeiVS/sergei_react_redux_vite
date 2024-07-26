import { EmployeesCard, TextDiv, TextLabel, TextContent } from "./styles";
import { Employee } from "pages/EmployeeAppProject/Layout_Team_1/types";

function Employees_Card({ name, surName, age, jobPosition }: Employee) {
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
    </EmployeesCard>
  );
}

export default Employees_Card;
