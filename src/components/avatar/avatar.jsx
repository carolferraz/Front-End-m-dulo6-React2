import * as S from "./styled"

export const Avatar = (props) => {
  return (
    <S.Wrapper size={props.size}>
      <S.Image src={props.src}/>
    </S.Wrapper>
  );
};
