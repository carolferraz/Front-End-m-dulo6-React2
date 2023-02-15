import styled from "styled-components";

export const Btn = styled.button`
  appearance: none;
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  height: ${(props) => props.height || "24px"};
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.padding};
  background: ${(props) => props.background };
  color: ${(props) => props.color };
  margin: ${(props) => props.margin };
  
  &:hover{
    cursor: pointer;
    background-color: ${(props) => props.hoverBackground };

  }

  &:disabled{
    background: #0068AC;
  }
  `;