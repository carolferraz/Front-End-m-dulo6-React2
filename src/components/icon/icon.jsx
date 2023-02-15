import * as S from "./styled"

export const Icon = (props) => {
  return (
    <S.IconWrapper>
      <S.Icon src={props.src} />
    </S.IconWrapper>
  );
};
