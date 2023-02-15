import styled, { css } from "styled-components"

const textCss = css`
    color: ${(props) => props.color || "#fff"};
    font-weight: ${(props) => (props.bold ? "bold" : "")};
    font-family: sans-serif;
    font-size: ${(props) => props.size || "14px"};
    margin: ${(props) => props.margin};
`;

export const Text = styled.span`
    ${textCss}
`;

export const TextLink = styled.a`
    ${textCss}
    text-decoration: none;
    &:hover{
        text-decoration: ${(props) => props.hoverTextDecoration};
        cursor: pointer;
    }
`;
