import { Text } from "../../ui/text"
import { Icon } from "../icon"
import * as S from "./styled"

export const TabItems = (props) =>{


return (
    <S.TabItemWrapper isCurrentTab={props.isCurrentTab} onClick={props.onClick}>
        <S.TabItem >
            <Icon 
            name={props.icon} 
            size="12px" 
            color={props.isCurrentTab ? "#fff" : "#898989"}></Icon>
            <Text color={props.isCurrentTab ? "#fff" : "#898989"}>{props.text}</Text>
        </S.TabItem>
    </S.TabItemWrapper>

)}