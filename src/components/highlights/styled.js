import styled from "styled-components";
import { Text } from "../../ui/text";

export const HighlightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  padding-left: 50px;
  margin: 40px 0;
  width: 100%;
  max-width: 925px;
`;

export const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HighlightText = styled(Text)`
  margin-top: 10px;
  overflow: hidden;
  width: 65px;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
`;
