import styled from "styled-components";

export const UlStyled = styled.ul`
  background-color: royalblue;
  color: black;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  min-width: 800px;
  li {
    margin: 15px;
    display: flex;
    justify-content: space-between;
  }
  span {
    margin: 0 15px;
  }
`;
