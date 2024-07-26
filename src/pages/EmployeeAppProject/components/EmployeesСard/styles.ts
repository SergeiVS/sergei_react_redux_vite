import styled from "@emotion/styled";
import { COLORS_TEAM_1 } from "pages/EmployeeAppProject/Layout_Team_1/styles";

export const EmployeesCard = styled.div`
display: flex;
  flex-direction: column;
  width: 590px;
  min-height: 441px;
  max-height: fit-content;
  padding: 60px;
  gap: 30px;
  background-color: ${COLORS_TEAM_1.CARD_WHITE};
  border: 1px solid #000000;
  border-radius: 4px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
  height: 65px;
  gap: 12px;
`;

export const TextLabel = styled.p`
  font-size: 16px;
  font-weight: lighter;
  color: rgba(111, 111, 111, 1);
`;

export const TextContent = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: rgba(28, 28, 28, 1);
`;
