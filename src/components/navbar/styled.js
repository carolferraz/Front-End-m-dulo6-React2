import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000;
  height: 100%;
  width: calc(20% - 60px);
  position: fixed;
  padding: 50px 30px;
`;

export const Box = styled.div`
  display: ${props => props.flex ? "flex" : ""};
  flex-direction: ${props => props.column ? "column" : ""};
  justify-content: ${props => props.spaceBetween ? "space-between" : ""};
`;