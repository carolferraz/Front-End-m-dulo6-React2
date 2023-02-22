import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${props => props.gap};
  background-color: #000;
  height:  100%;
  width: 100%;
  max-width: 220px;
  border-right: 1px solid #363636;
  position: fixed;
  padding: 8px 12px 20px;
`;

export const BoxTitle = styled.div`
  margin-bottom: 20px;
  padding: 25px 12px 16px;
`;

export const Box = styled.div`
  display: ${props => props.flex ? "flex" : ""};
  flex-direction: ${props => props.column ? "column" : ""};
  justify-content: ${props => props.spaceBetween ? "space-between" : ""};
  margin-bottom: 20px;
`;

export const Navitem = styled.div`
  padding: 12px;
  margin: 2px 0;
  display: flex;
  align-items: center;


  &:hover{
    cursor: pointer;
    border-radius: 24px;
    background-color: #121212;
  }
`

export const NavText = styled.div`
  padding-left: 16px;
`