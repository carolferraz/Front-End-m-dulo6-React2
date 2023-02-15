import styled from "styled-components";

export const IconWrapper = styled.div((props) => {
  return {
    overflow: "hidden",
    margin: props.margin,
  };
});

export const Icon = styled.img`
    width: ${(props)=> props.width || "15px"};
    height: ${(props)=> props.height || "15px"};
    margin: ${(props)=> props.margin};
`;
