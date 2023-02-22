import styled from "styled-components";

export const TabItemWrapper = styled.div`
 
`
export const TabItem = styled.div`
border-top: ${(props) => props.isCurrentTab ? "2px solid #fff" : "none"};
display: flex;
justify-content: center;
align-items: center;
height: 60px;
margin-right: 60px;
gap: 5px;

&:hover{
    cursor: pointer;
}
`

export const TabsWrapper = styled.div`
border-top: 0.5px solid #363636;
 display: flex;
 justify-content: center;
`

