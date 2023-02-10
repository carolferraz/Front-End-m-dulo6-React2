import { Avatar } from "../avatar/avatar";
import * as S from "./styled";

const highlightContentList = [
  {
    image: "https://via.placeholder.com/90",
    text: "Parceiros",
  },
  {
    image: "https://via.placeholder.com/90",
    text: "Desafios",
  },
  {
    image: "https://via.placeholder.com/90",
    text: "Comunidade",
  },
  {
    image: "https://via.placeholder.com/90",
    text: "Faculdades",
  },
  {
    image: "https://via.placeholder.com/90",
    text: "Modelo Educacional",
  },
];

export const Highlight = (props) => {
  return (
    <>
      <S.Wrapper>
        {highlightContentList.map((highlight, index)=>(
          <S.HighlightItem key={index}>
            <Avatar size="small" src={highlight.image} />
            <S.HighlightText>{highlight.text}</S.HighlightText>
          </S.HighlightItem>
        ))}
      </S.Wrapper>
    </>
  );
};
