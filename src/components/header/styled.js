import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;

export const AvatarWrapper = styled.div`
  width: 30%;
`;

export const FollowArea = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: ${(props)=> props.justifyContent || "center"};
  margin-bottom: ${(props)=> props.marginBottom || "15px"};
  gap: ${(props)=> props.gap || "30px"};
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: ${(props)=> props.marginBottom || "15px"};
`;
