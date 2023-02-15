import * as S from "./styled"

export const Input = ( props ) => {
    return (
      <S.InputWrapper>
        <S.Label htmlFor="input-">{props.label}</S.Label>
        <S.Input name="input" placeholder={props.placeholder} type={props.hide ? "password" : "text"} onChange={props.onChange} ></S.Input>
        
      </S.InputWrapper>
    );
  }