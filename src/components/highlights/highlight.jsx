import { useEffect } from "react";
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
  {
    image: "https://via.placeholder.com/90",
    text: undefined,
  },
  {
    image: "https://via.placeholder.com/90",
    text: "",
  },
];

export const changeEmptyDataToNone = (item) => {
  if (!item.text) {
    return "NONE";
  }
  return item.text;
}

export const removeInvalidValues = (item)=>{
  if (item.text === "NONE"){
    return false
  } else return true
}

export const Highlight = (props) => {
 
  const normalizeData = (array) => 
  array.map(changeEmptyDataToNone)
    .filter(removeInvalidValues);
  
  useEffect(() => {
    normalizeData(highlightContentList);
  },[])

  return (
    <>
      <S.HighlightWrapper>
        {highlightContentList.map((highlight, index)=>(
          <S.HighlightItem key={index}>
            <Avatar size="small" src={highlight.image} />
            <S.HighlightText size="12px">{highlight.text}</S.HighlightText>
          </S.HighlightItem>
        ))}
      </S.HighlightWrapper>
    </>
  );
};
