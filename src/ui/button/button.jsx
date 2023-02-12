import * as S from "./styled"

export const Button = (props) => {
  return (
    <>
      <S.Btn>{props.children}</S.Btn>;
    </>
  );
};
