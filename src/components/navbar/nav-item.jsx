import { Text } from "../../ui/text";
import { Icon } from "../icon";
import * as S from "./styled"

export const NavItem = (props) => {
    return (
        <S.Navitem>
            <Icon margin="0 2px" src={props.icon}/>
            <Text>{props.text}</Text>
        </S.Navitem>
    );
};