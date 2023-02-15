import * as S from "./styled"

export const Avatar = (props) => {
  return (
    <S.AvatarWrapper size={props.size}>
      <S.Image src={props.src}/>
    </S.AvatarWrapper>
  );
};
