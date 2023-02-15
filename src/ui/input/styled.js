import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #ffffffcc;
  font-size: 14px;
  font-family: sans-serif;
`;

export const Input = styled.input`
  background-color: #121212;
  border-radius: 3px;
  border: 1px solid rgba(250, 250, 250, 0.2);
  outline: none;
  width: 252px;
  height: 15px;
  padding: 9px 8px 9px;
  margin: 3px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;

  &::placeholder{
    color: #ababab;
    font-size: 11px;
  }
`;
