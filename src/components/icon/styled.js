import styled from "styled-components";

export const Wrapper = styled.div(() => {
  return {
    overflow: "hidden",
  };
});

export const Icon = styled.img`
    width: ${(props)=> props.width || "15px"};
    height: ${(props)=> props.height || "15px"};
    margin: ${(props)=> props.margin};
`;
