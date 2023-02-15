import styled from "styled-components";

export const PageLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.alignItems};
  flex-direction: column;
  margin: 30px 10px 0 30px;
  width: 100%;
  max-height: ${(props) => props.maxHeight};
`;

export const FormBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection || "column"};
  border: 1px solid #363636;
  background: #000;
  padding: 10px 5px;
  margin: 10px 5px 5px;
  width: 100%;
  max-width: 350px;
  flex-grow: 1;
`;

export const LogoWrapper = styled.div`
  margin: 36px 0 12px;
`;

export const ImgPageLogin = styled.img``;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 10px;
`;

export const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: roll;
  border: 1px solid #363636;
  background: #000;
  padding: 10px 5px;
  margin: 10px 5px 5px;
  width: 100%;
  max-width: 350px;
  flex-grow: 1;
`;

export const GetApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 5px;
  margin: 10px 5px 5px;
  width: 100%;
  max-width: 350px;
  flex-grow: 1;
`;

export const ImgAppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ImgApp = styled.img``
