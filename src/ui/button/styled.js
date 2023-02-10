import styled from "styled-components";

export const Btn = styled.button`
  appearance: none;
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  height: ${(props) => props.height || "24px"};
  background: ${(props) => props.background };
  
  &:hover{
    cursor: pointer;
  }
  `;