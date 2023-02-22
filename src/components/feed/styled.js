import styled from "styled-components";

export const FeedWrapper = styled.div`
  max-width: 975px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`;

export const FeedItem = styled.div``;

export const FeedPhoto = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
