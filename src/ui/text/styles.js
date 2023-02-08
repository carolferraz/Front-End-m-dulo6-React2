import styled from "styled-components"

export const TextWrapper = styled.span`
    color: ${(props) => props.color || "#fff"};
    font-weight: ${(props) => (props.bold ? "bold" : "")}
`;
